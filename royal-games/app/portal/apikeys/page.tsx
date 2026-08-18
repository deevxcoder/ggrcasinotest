"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Key, Plus, Trash2, Copy, Check, ShieldCheck, RefreshCw, Terminal, TrendingUp, Wallet, Link2 } from "lucide-react";

export default function ApiKeysPage() {
  const [tokens, setTokens] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [newKeyName, setNewKeyName] = useState("");
  const [newKeyIp, setNewKeyIp] = useState("");
  const [creating, setCreating] = useState(false);

  const fetchTokens = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/operator/apikeys");
      const data = await res.json();
      if (data.tokens) setTokens(data.tokens);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTokens();
  }, [fetchTokens]);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handleCreateToken = async (e: React.FormEvent) => {
    e.preventDefault();
    setCreating(true);
    try {
      const res = await fetch("/api/operator/apikeys", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "create",
          name: newKeyName,
          ipWhitelist: newKeyIp || undefined,
        }),
      });
      if (res.ok) {
        setNewKeyName("");
        setNewKeyIp("");
        fetchTokens();
      }
    } catch (e) {
      console.error(e);
    } finally {
      setCreating(false);
    }
  };

  const handleDeleteToken = async (tokenId: string) => {
    if (!confirm("Are you sure you want to revoke this API token? Any client casino using it will lose connection.")) return;
    try {
      await fetch("/api/operator/apikeys", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "delete", tokenId }),
      });
      fetchTokens();
    } catch (e) {
      console.error(e);
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
            <h1 className="text-base font-black text-white">API Keys & IP Whitelist</h1>
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
            { label: "API Keys & Whitelist", href: "/portal/apikeys", active: true, icon: Key },
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

        {/* Generate New API Key Form */}
        <div className="p-6 rounded-3xl bg-[#0f1422] border border-casino-border space-y-4 shadow-xl">
          <h3 className="text-base font-black text-white flex items-center gap-2">
            <Plus className="w-5 h-5 text-amber-400" />
            <span>Generate New B2B API Token</span>
          </h3>

          <form onSubmit={handleCreateToken} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="text-xs font-bold text-gray-400 uppercase">Key Label</label>
              <input
                type="text"
                required
                value={newKeyName}
                onChange={(e) => setNewKeyName(e.target.value)}
                placeholder="e.g. Staging Server Key"
                className="w-full mt-1 px-4 py-2.5 bg-[#080c14] border border-casino-border focus:border-amber-500 rounded-xl text-xs font-semibold text-white focus:outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-gray-400 uppercase">IP Whitelist (Optional)</label>
              <input
                type="text"
                value={newKeyIp}
                onChange={(e) => setNewKeyIp(e.target.value)}
                placeholder="e.g. 192.168.1.1, 10.0.0.1"
                className="w-full mt-1 px-4 py-2.5 bg-[#080c14] border border-casino-border focus:border-amber-500 rounded-xl text-xs font-semibold text-white focus:outline-none"
              />
            </div>

            <div className="flex items-end">
              <button
                type="submit"
                disabled={creating}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-black font-black text-xs uppercase tracking-wider shadow-gold-glow transition-all"
              >
                {creating ? "Generating..." : "Generate Token"}
              </button>
            </div>
          </form>
        </div>

        {/* Tokens List */}
        <div className="space-y-3">
          <h3 className="text-base font-black text-white">Your Active API Tokens ({tokens.length})</h3>

          <div className="space-y-3">
            {tokens.map((tok) => (
              <div
                key={tok.id}
                className="p-5 rounded-2xl bg-[#0f1422] border border-casino-border space-y-3 shadow-lg"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h4 className="font-extrabold text-sm text-white">{tok.name}</h4>
                    <span className="text-[11px] text-gray-500">Created on {new Date(tok.createdAt).toLocaleDateString()}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-black border border-emerald-500/30">
                      LIVE ACTIVE
                    </span>
                    {tokens.length > 1 && (
                      <button
                        onClick={() => handleDeleteToken(tok.id)}
                        className="p-2 rounded-xl bg-rose-950/40 hover:bg-rose-900/60 text-rose-300 border border-rose-500/40"
                        title="Revoke Token"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-black uppercase text-gray-400">API Token</span>
                  <div className="flex items-center gap-2">
                    <code className="text-xs font-mono font-black text-amber-300 bg-black/60 px-3 py-1.5 rounded-xl border border-white/10 flex-1 overflow-x-auto">
                      {tok.token}
                    </code>
                    <button
                      onClick={() => handleCopy(tok.id, tok.token)}
                      className="p-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/30"
                    >
                      {copiedId === tok.id ? <Check className="w-4 h-4 stroke-[3]" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] pt-1 text-gray-400">
                  <span>IP Whitelist: <strong>{tok.ipWhitelist || "Any (Open)"}</strong></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
