import { PrismaClient } from "@prisma/client";
import path from "path";

declare global {
  var prisma: PrismaClient | undefined;
}

function getPrismaClient(): PrismaClient {
  const dbUrl = process.env.DATABASE_URL || "";

  // If using SQLite with relative path, resolve absolute path to avoid Error code 14
  if (dbUrl.startsWith("file:")) {
    const rawPath = dbUrl.replace("file:", "");
    if (!path.isAbsolute(rawPath)) {
      const cleanPath = rawPath.replace(/^\.\/?/, "");
      // Resolve path ensuring it looks in prisma/ directory or root
      const fullPath = path.resolve(
        process.cwd(),
        cleanPath.startsWith("prisma") ? cleanPath : path.join("prisma", cleanPath)
      );

      return new PrismaClient({
        datasources: {
          db: {
            url: `file:${fullPath}`,
          },
        },
      });
    }
  }

  return new PrismaClient();
}

export const db = globalThis.prisma || getPrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}
