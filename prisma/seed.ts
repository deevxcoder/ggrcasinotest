import { PrismaClient } from "@prisma/client";
import crypto from "crypto";

const prisma = new PrismaClient();

function hashPassword(password: string): string {
  return crypto.createHash("sha256").update(password).digest("hex");
}

async function main() {
  console.log("Seeding initial casino users...");

  const demoUser = await prisma.user.upsert({
    where: { username: "demo_player" },
    update: {},
    create: {
      username: "demo_player",
      email: "player@nexxcasino.com",
      passwordHash: hashPassword("password123"),
      balance: 1000.0,
      currency: "INR",
      isAdmin: false,
    },
  });

  const adminUser = await prisma.user.upsert({
    where: { username: "admin" },
    update: {},
    create: {
      username: "admin",
      email: "admin@nexxcasino.com",
      passwordHash: hashPassword("admin123"),
      balance: 50000.0,
      currency: "INR",
      isAdmin: true,
    },
  });

  console.log("Seeded demo player:", demoUser.username, "Balance:", demoUser.balance);
  console.log("Seeded admin:", adminUser.username);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
