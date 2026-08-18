"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Lock, ArrowRight, ShieldCheck, Sparkles, Building2, Mail, Key } from "lucide-react";

export default function OperatorLoginPage() {
  const router = useRouter();
  const [isRegister, setIsRegister] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("partner@casino.com");
  const [password, setPassword] = useState("password123");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/operator/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: isRegister ? "register" : "login",
          companyName: isRegister ? companyName : undefined,
          email,
          password,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Authentication failed");

      router.push("/portal/dashboard");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#080b11] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#0f1422] border border-casino-border rounded-3xl p-8 shadow-2xl space-y-6">
        <div className="text-center space-y-2">
          <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mx-auto text-amber-400">
            <Lock className="w-7 h-7" />
          </div>
          <h2 className="text-2xl font-black text-white tracking-tight">
            {isRegister ? "Register Casino Partner" : "Operator Partner Portal"}
          </h2>
          <p className="text-xs text-gray-400">
            {isRegister ? "Get immediate API access + ₹5000 prepaid GGR credit" : "Sign in to manage API tokens, GGR billing, & webhook logs"}
          </p>
        </div>

        {error && (
          <div className="p-3.5 rounded-xl bg-rose-950/60 border border-rose-500/40 text-xs font-semibold text-rose-300">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {isRegister && (
            <div className="space-y-1">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Company / Casino Name</label>
              <div className="relative">
                <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="text"
                  required
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="e.g. Royal Club Casino"
                  className="w-full pl-10 pr-4 py-2.5 bg-[#080c14] border border-casino-border focus:border-amber-500 rounded-xl text-sm font-semibold text-white focus:outline-none"
                />
              </div>
            </div>
          )}

          <div className="space-y-1">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Operator Email</label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="partner@example.com"
                className="w-full pl-10 pr-4 py-2.5 bg-[#080c14] border border-casino-border focus:border-amber-500 rounded-xl text-sm font-semibold text-white focus:outline-none"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Password</label>
            <div className="relative">
              <Key className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-[#080c14] border border-casino-border focus:border-amber-500 rounded-xl text-sm font-semibold text-white focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-black font-black text-sm uppercase tracking-wider shadow-gold-glow transition-all"
          >
            {loading ? "Authenticating..." : isRegister ? "Create Partner Account & Get API Key" : "Sign In to Developer Portal"}
          </button>
        </form>

        <div className="pt-2 text-center space-y-2">
          <button
            type="button"
            onClick={() => setIsRegister(!isRegister)}
            className="text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors"
          >
            {isRegister ? "Already registered? Sign In" : "New Casino Operator? Register for API Access"}
          </button>

          <div>
            <Link href="/" className="text-[11px] text-gray-500 hover:text-gray-300">
              ← Back to Royal Games Landing Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
