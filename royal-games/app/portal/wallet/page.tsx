"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Wallet, Plus, RefreshCw, TrendingUp, Key, Link2, Terminal, CheckCircle2, ArrowDownRight } from "lucide-react";

export default function WalletPage() {
  const [operator, setOperator] = useState<any>(null);
  const [transactions, setTransactions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [rechargeAmount, setRechargeAmount] = useState<number>(5000);
  const [rechargeMethod, setRechargeMethod] = useState("UPI_GATEWAY");
  const [recharging, setRecharging] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const fetchWallet = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/operator/wallet");
      const data = await res.json();
      if (data.operator) setOperator(data.operator);
      if (data.transactions) setTransactions(data.transactions);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchWallet();
  }, [fetchWallet]);

  const handleRecharge = async (e: React.FormEvent) => {
    e.preventDefault();
    if (rechargeAmount <= 0) return;
    setRecharging(true);
    setSuccessMsg(null);

    try {
      const res = await fetch("/api/operator/wallet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: rechargeAmount,
          method: rechargeMethod,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setSuccessMsg(`✅ Successfully credited ₹${rechargeAmount} to your Prepaid GGR balance!`);
        fetchWallet();
        setTimeout(() => setSuccessMsg(null), 4000);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setRecharging(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#080b11] text-gray-100 flex flex-col">
      {/* Top Header */}
      <header className="sticky top-0 z-30 w-full bg-[#0d121e] border-b border-casino-border px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-black">
            👑
          </div>
          <div>
            <h1 className="text-base font-black text-white">Prepaid GGR Wallet & Recharge</h1>
            <p className="text-[10px] text-amber-400 font-bold uppercase">Royal Games B2B Provider Engine</p>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-8 py-6 space-y-6">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-casino-border pb-3 overflow-x-auto">
          {[
            { label: "Dashboard", href: "/portal/dashboard", active: false, icon: TrendingUp },
            { label: "API Keys & Whitelist", href: "/portal/apikeys", active: false, icon: Key },
            { label: "Prepaid GGR Wallet", href: "/portal/wallet", active: true, icon: Wallet },
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

        {/* Balance Card & Recharge Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4 p-6 rounded-3xl bg-[#0f1422] border border-casino-border space-y-3 shadow-xl flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-xs font-black uppercase text-gray-400">Current Prepaid GGR Credit</span>
              <div className="text-3xl font-black text-amber-400">
                ₹{(operator?.balance || 0).toLocaleString("en-IN", { minimumFractionDigits: 2 })}
              </div>
              <p className="text-xs text-gray-400">
                GGR Rate: <strong>{operator?.ggrRate || 10}% Hold Revenue Share</strong>
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#080c14] border border-casino-border text-xs text-gray-400 space-y-1">
              <p className="font-bold text-gray-200">How GGR Billing Works:</p>
              <p className="text-[11px] leading-relaxed">
                As your players play games, GGR fee (10% on house hold) is automatically deducted from this wallet. You can top up anytime.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8 p-6 rounded-3xl bg-[#0f1422] border border-casino-border space-y-4 shadow-xl">
            <h3 className="text-base font-black text-white flex items-center gap-2">
              <Plus className="w-5 h-5 text-emerald-400" />
              <span>Recharge Prepaid Wallet</span>
            </h3>

            {successMsg && (
              <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-xs font-bold text-emerald-300">
                {successMsg}
              </div>
            )}

            <form onSubmit={handleRecharge} className="space-y-4">
              <div className="grid grid-cols-3 gap-2">
                {[1000, 5000, 10000].map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => setRechargeAmount(amt)}
                    className={`py-2.5 rounded-xl text-xs font-black transition-all ${
                      rechargeAmount === amt
                        ? "bg-amber-500 text-black border border-amber-400 shadow-gold-glow"
                        : "bg-[#080c14] border border-casino-border text-gray-300 hover:text-white"
                    }`}
                  >
                    + ₹{amt.toLocaleString()}
                  </button>
                ))}
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-400 uppercase">Custom Amount (INR)</label>
                <input
                  type="number"
                  min="100"
                  value={rechargeAmount}
                  onChange={(e) => setRechargeAmount(Number(e.target.value))}
                  className="w-full px-4 py-2.5 bg-[#080c14] border border-casino-border focus:border-amber-500 rounded-xl text-base font-black text-white focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={recharging}
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-black font-black text-xs uppercase tracking-wider shadow-emerald-glow transition-all"
              >
                {recharging ? "Processing Top-up..." : `Recharge ₹${rechargeAmount.toLocaleString()} to GGR Wallet`}
              </button>
            </form>
          </div>
        </div>

        {/* Transaction History Ledger */}
        <div className="space-y-3">
          <h3 className="text-base font-black text-white">Wallet Ledger History ({transactions.length})</h3>

          <div className="rounded-3xl border border-casino-border bg-[#0f1422] overflow-hidden shadow-xl">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#121826] text-gray-400 font-bold border-b border-casino-border">
                <tr>
                  <th className="p-4">Time</th>
                  <th className="p-4">Type</th>
                  <th className="p-4">Amount</th>
                  <th className="p-4">Balance After</th>
                  <th className="p-4">Reference ID</th>
                  <th className="p-4">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-casino-border/60 text-gray-300">
                {transactions.length ? (
                  transactions.map((tx) => (
                    <tr key={tx.id} className="hover:bg-white/5 transition-colors">
                      <td className="p-4 text-gray-500 text-[11px] whitespace-nowrap">
                        {new Date(tx.createdAt).toLocaleString()}
                      </td>
                      <td className="p-4">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase ${
                          tx.type === "DEPOSIT"
                            ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                            : "bg-rose-500/20 text-rose-300 border border-rose-500/30"
                        }`}>
                          {tx.type}
                        </span>
                      </td>
                      <td className={`p-4 font-black ${tx.amount >= 0 ? "text-emerald-400" : "text-rose-400"}`}>
                        {tx.amount >= 0 ? `+₹${tx.amount.toFixed(2)}` : `-₹${Math.abs(tx.amount).toFixed(2)}`}
                      </td>
                      <td className="p-4 font-bold text-white">₹{tx.balanceAfter.toFixed(2)}</td>
                      <td className="p-4 font-mono text-[10px] text-gray-400">{tx.referenceId || "—"}</td>
                      <td className="p-4 text-gray-400 text-[11px]">{tx.description}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="p-8 text-center text-gray-500">
                      No wallet transactions recorded yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
