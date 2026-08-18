"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Link2, RefreshCw, Play, TrendingUp, Key, Wallet, Terminal, CheckCircle2, AlertCircle } from "lucide-react";

export default function WebhooksPage() {
  const [logs, setLogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [retryingId, setRetryingId] = useState<string | null>(null);

  const fetchLogs = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/operator/webhooks");
      const data = await res.json();
      if (data.logs) setLogs(data.logs);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchLogs();
  }, [fetchLogs]);

  const handleRetry = async (logId: string) => {
    setRetryingId(logId);
    try {
      await fetch("/api/operator/webhooks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ logId }),
      });
      fetchLogs();
    } catch (e) {
      console.error(e);
    } finally {
      setRetryingId(null);
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
            <h1 className="text-base font-black text-white">Live Webhook Settlement Logs</h1>
            <p className="text-[10px] text-amber-400 font-bold uppercase">Royal Games B2B Provider Engine</p>
          </div>
        </div>

        <button
          onClick={fetchLogs}
          className="p-2.5 rounded-xl bg-casino-card hover:bg-casino-cardHover border border-casino-border text-gray-400 hover:text-white transition-colors"
        >
          <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
        </button>
      </header>

      {/* Main Container */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-8 py-6 space-y-6">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-casino-border pb-3 overflow-x-auto">
          {[
            { label: "Dashboard", href: "/portal/dashboard", active: false, icon: TrendingUp },
            { label: "API Keys & Whitelist", href: "/portal/apikeys", active: false, icon: Key },
            { label: "Prepaid GGR Wallet", href: "/portal/wallet", active: false, icon: Wallet },
            { label: "Webhook Logs", href: "/portal/webhooks", active: true, icon: Link2 },
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

        {/* Logs Table */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-black text-white">Recent Webhook Deliveries ({logs.length})</h3>
            <span className="text-xs text-gray-400">Shows real-time HTTP callbacks sent to your casino callback endpoint</span>
          </div>

          <div className="rounded-3xl border border-casino-border bg-[#0f1422] overflow-hidden shadow-xl">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#121826] text-gray-400 font-bold border-b border-casino-border">
                <tr>
                  <th className="p-4">Time</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Serial Number</th>
                  <th className="p-4">Callback URL</th>
                  <th className="p-4">HTTP Code</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-casino-border/60 text-gray-300">
                {logs.length ? (
                  logs.map((log) => (
                    <tr key={log.id} className="hover:bg-white/5 transition-colors">
                      <td className="p-4 text-gray-500 text-[11px] whitespace-nowrap">
                        {new Date(log.createdAt).toLocaleTimeString()}
                      </td>
                      <td className="p-4">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase ${
                          log.status === "SUCCESS"
                            ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                            : "bg-rose-500/20 text-rose-300 border border-rose-500/30"
                        }`}>
                          {log.status}
                        </span>
                      </td>
                      <td className="p-4 font-mono text-[10px] text-amber-300">{log.serialNumber}</td>
                      <td className="p-4 font-mono text-[10px] text-gray-400 truncate max-w-[220px]">{log.targetUrl}</td>
                      <td className="p-4 font-black text-white">{log.responseCode || "—"}</td>
                      <td className="p-4 text-right">
                        <button
                          onClick={() => handleRetry(log.id)}
                          disabled={retryingId === log.id}
                          className="px-3 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 font-bold text-xs transition-colors"
                        >
                          {retryingId === log.id ? "Retrying..." : "Retry Callback"}
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="p-8 text-center text-gray-500">
                      No webhook deliveries logged yet. Launch a game round to see real-time callbacks.
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
