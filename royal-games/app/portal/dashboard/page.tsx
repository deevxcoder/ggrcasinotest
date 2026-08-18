"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { TrendingUp, Key, Wallet, Link2, Terminal, RefreshCw, Plus, Copy, Check, ExternalLink, ShieldCheck, Activity } from "lucide-react";

export default function OperatorDashboard() {
  const [operator, setOperator] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [copiedToken, setCopiedToken] = useState(false);

  const fetchProfile = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/operator/auth");
      const data = await res.json();
      if (data.operator) setOperator(data.operator);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  const activeToken = operator?.tokens?.[0]?.token || "No token generated";

  const handleCopy = () => {
    navigator.clipboard.writeText(activeToken);
    setCopiedToken(true);
    setTimeout(() => setCopiedToken(false), 2500);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#080b11] flex items-center justify-center">
        <div className="w-10 h-10 rounded-full border-4 border-amber-500/20 border-t-amber-400 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#080b11] text-gray-100 flex flex-col">
      {/* Top Header */}
      <header className="sticky top-0 z-30 w-full bg-[#0d121e] border-b border-casino-border px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-black">
            👑
          </div>
          <div>
            <h1 className="text-base font-black text-white">{operator?.companyName || "Partner"} Developer Portal</h1>
            <p className="text-[10px] text-amber-400 font-bold uppercase">Royal Games B2B Provider Engine</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#111728] border border-casino-border text-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-gray-300">{operator?.email}</span>
          </div>

          <Link
            href="/"
            className="text-xs text-gray-400 hover:text-white font-semibold"
          >
            Studio Home
          </Link>
        </div>
      </header>

      {/* Main Container */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-8 py-6 space-y-6">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-casino-border pb-3 overflow-x-auto">
          {[
            { label: "Dashboard", href: "/portal/dashboard", active: true, icon: TrendingUp },
            { label: "API Keys & Whitelist", href: "/portal/apikeys", active: false, icon: Key },
            { label: "Prepaid GGR Wallet", href: "/portal/wallet", active: false, icon: Wallet },
            { label: "Webhook Logs", href: "/portal/webhooks", active: false, icon: Link2 },
            { label: "Interactive API Docs", href: "/portal/docs", active: false, icon: Terminal },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <Link
                key={tab.label}
                href={tab.href}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider whitespace-nowrap transition-all ${
                  tab.active
                    ? "bg-gradient-to-r from-amber-500 to-yellow-400 text-black shadow-gold-glow"
                    : "bg-casino-card hover:bg-casino-cardHover border border-casino-border text-gray-300 hover:text-white"
                }`}
              >
                <Icon className={`w-4 h-4 ${tab.active ? "text-black" : "text-amber-400"}`} />
                <span>{tab.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Quick Credentials Card */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-[#0f1422] to-[#12192c] border border-casino-border space-y-3 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-[10px] font-black uppercase text-amber-400 tracking-wider">Active API Production Token</span>
              <div className="flex items-center gap-2 mt-1">
                <code className="text-sm font-mono font-black text-white bg-black/60 px-3 py-1.5 rounded-xl border border-white/10 select-all">
                  {activeToken}
                </code>
                <button
                  onClick={handleCopy}
                  className="p-2 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-400 border border-amber-500/40"
                  title="Copy API Token"
                >
                  {copiedToken ? <Check className="w-4 h-4 stroke-[3]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Link
                href="/portal/docs"
                className="px-4 py-2.5 rounded-xl bg-casino-card hover:bg-casino-cardHover border border-casino-border text-xs font-bold text-gray-200 hover:text-white flex items-center gap-1.5"
              >
                <Terminal className="w-3.5 h-3.5 text-amber-400" />
                <span>API Endpoint Spec</span>
              </Link>
            </div>
          </div>
        </div>

        {/* KPI Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-3xl bg-[#0f1422] border border-casino-border space-y-2 shadow-lg">
            <span className="text-xs font-black uppercase tracking-wider text-gray-400">Prepaid GGR Balance</span>
            <div className="text-2xl font-black text-amber-400">
              ₹{(operator?.balance || 0).toLocaleString("en-IN", { minimumFractionDigits: 2 })}
            </div>
            <p className="text-[11px] text-gray-500">Available to launch live sessions</p>
          </div>

          <div className="p-5 rounded-3xl bg-[#0f1422] border border-casino-border space-y-2 shadow-lg">
            <span className="text-xs font-black uppercase tracking-wider text-gray-400">GGR Revenue Share</span>
            <div className="text-2xl font-black text-emerald-400">
              {operator?.ggrRate || 10.0}%
            </div>
            <p className="text-[11px] text-gray-500">Charged on net hold turnover</p>
          </div>

          <div className="p-5 rounded-3xl bg-[#0f1422] border border-casino-border space-y-2 shadow-lg">
            <span className="text-xs font-black uppercase tracking-wider text-gray-400">Total Rounds Played</span>
            <div className="text-2xl font-black text-white">
              {operator?._count?.rounds || 0}
            </div>
            <p className="text-[11px] text-gray-500">Across all connected players</p>
          </div>

          <div className="p-5 rounded-3xl bg-[#0f1422] border border-casino-border space-y-2 shadow-lg">
            <span className="text-xs font-black uppercase tracking-wider text-gray-400">Webhook Deliveries</span>
            <div className="text-2xl font-black text-cyan-400">
              {operator?._count?.webhookLogs || 0}
            </div>
            <p className="text-[11px] text-gray-500">Real-time settlement callbacks</p>
          </div>
        </div>

        {/* Integration Quickstart Box */}
        <div className="p-6 rounded-3xl bg-[#0f1422] border border-casino-border space-y-4 shadow-xl">
          <h3 className="text-base font-black text-white">Quick Integration: 3-Step Setup for Your Casino</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-[#080c14] border border-casino-border space-y-2">
              <span className="text-xs font-black text-amber-400 uppercase">Step 1: Set Environment</span>
              <p className="text-xs text-gray-400">In your client casino <code>.env.local</code>:</p>
              <pre className="p-2.5 rounded-xl bg-black font-mono text-[10px] text-emerald-400 overflow-x-auto">
                NEXX_API_URL=http://localhost:3001/api/v1&#10;NEXX_TOKEN={activeToken.slice(0, 16)}...
              </pre>
            </div>

            <div className="p-4 rounded-2xl bg-[#080c14] border border-casino-border space-y-2">
              <span className="text-xs font-black text-amber-400 uppercase">Step 2: Launch Game</span>
              <p className="text-xs text-gray-400">Send POST request to <code>/api/v1/launch</code>:</p>
              <pre className="p-2.5 rounded-xl bg-black font-mono text-[10px] text-blue-400 overflow-x-auto">
                POST /api/v1/launch&#10;{`{ "user_id": "u1", "balance": 1000 }`}
              </pre>
            </div>

            <div className="p-4 rounded-2xl bg-[#080c14] border border-casino-border space-y-2">
              <span className="text-xs font-black text-amber-400 uppercase">Step 3: Receive Callback</span>
              <p className="text-xs text-gray-400">Your webhook callback gets automatic settlements:</p>
              <pre className="p-2.5 rounded-xl bg-black font-mono text-[10px] text-yellow-400 overflow-x-auto">
                POST /api/callback&#10;{`{ "bet_amount": 50, "win_amount": 98 }`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
