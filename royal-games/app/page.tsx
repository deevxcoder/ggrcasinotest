"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, Terminal, Shield, Zap, ArrowRight, Gamepad2, Coins, Layers } from "lucide-react";
import { STUDIO_GAMES } from "@/lib/gamesCatalog";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#080b11] text-gray-100 flex flex-col justify-between">
      {/* Top Navbar */}
      <header className="sticky top-0 z-30 w-full bg-[#0d121e]/90 backdrop-blur border-b border-casino-border px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-400 p-[2px] shadow-gold-glow flex items-center justify-center">
            <div className="w-full h-full bg-[#0d121c] rounded-[14px] flex items-center justify-center text-xl">
              👑
            </div>
          </div>
          <div>
            <h1 className="text-base font-black text-white tracking-wider">ROYAL GAMES STUDIO</h1>
            <p className="text-[10px] text-amber-400 font-bold uppercase tracking-wider">B2B iGaming Aggregator & Remote Game Server</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/portal/docs"
            className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-xl bg-casino-card hover:bg-casino-cardHover border border-casino-border text-xs font-bold text-gray-300 hover:text-white transition-colors"
          >
            <Terminal className="w-4 h-4 text-amber-400" />
            <span>API Docs</span>
          </Link>

          <Link
            href="/portal/login"
            className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-black font-black text-xs uppercase tracking-wider shadow-gold-glow transition-all"
          >
            <span>Operator Portal</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-8 py-12 space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto pt-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold text-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>B2B iGaming Remote Game Server (RGS) & Aggregator API</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Power Your Casino With <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">Royal Games API</span>
          </h2>

          <p className="text-sm text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Integrate high-engagement multiplier games (Coin Flip, Andar Bahar, Chicken Road Cross, Aviator) into your casino with a single REST API and instant webhook settlements.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/portal/login"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 hover:from-amber-400 hover:to-yellow-300 text-black font-black text-sm uppercase tracking-wider shadow-gold-glow flex items-center gap-2 transition-all transform hover:scale-105"
            >
              <span>Get API Key & Free ₹5000 Credit</span>
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </Link>

            <Link
              href="/portal/docs"
              className="px-6 py-4 rounded-2xl bg-[#0f1422] hover:bg-[#151d30] border border-casino-border text-white font-bold text-sm flex items-center gap-2 transition-colors"
            >
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span>Explore Developer Docs</span>
            </Link>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-[#0f1422] border border-casino-border space-y-3 shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-base font-black text-white">5-Minute Integration</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Launch games with standard <code>POST /api/v1/launch</code> and receive instant idempotent balance settlements via webhook callback.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#0f1422] border border-casino-border space-y-3 shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Coins className="w-6 h-6" />
            </div>
            <h3 className="text-base font-black text-white">Lowest GGR Margin</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Industry-leading transparent 10% GGR revenue share model. Recharge prepaid wallet in real-time via UPI and USDT.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#0f1422] border border-casino-border space-y-3 shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-base font-black text-white">Provably Fair & Scalable</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Cryptographically verified RNG engine with IP whitelisting firewall and automated webhook retry queues.
            </p>
          </div>
        </div>

        {/* Games Catalog Showcase */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-black text-white">Studio Games Catalog</h3>
              <p className="text-xs text-gray-400">Available immediately over Royal Games B2B API</p>
            </div>
            <span className="text-xs px-3 py-1 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold">
              {STUDIO_GAMES.length} Active Games
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {STUDIO_GAMES.map((game) => (
              <div
                key={game.game_uid}
                className="p-5 rounded-3xl bg-[#0f1422] border border-casino-border hover:border-amber-500/60 shadow-xl space-y-3 transition-all transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl">
                    {game.game_uid === "royal_coinflip" ? "🪙" : game.game_uid === "royal_andarbahar" ? "🎴" : game.game_uid === "royal_chickencross" ? "🐔" : "✈️"}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-black border border-emerald-500/30">
                    RTP {game.rtp}%
                  </span>
                </div>

                <div>
                  <h4 className="text-base font-black text-white">{game.name}</h4>
                  <p className="text-[11px] text-amber-400 font-bold">{game.category}</p>
                </div>

                <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">
                  {game.description}
                </p>

                <div className="pt-2 border-t border-casino-border/60 flex items-center justify-between text-xs">
                  <span className="text-gray-500 font-mono">{game.game_uid}</span>
                  <span className="text-amber-400 font-black">Up to {game.max_multiplier}x</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-casino-border bg-[#06080e] py-8 text-center text-xs text-gray-500 space-y-2">
        <p className="font-semibold text-gray-400">
          Royal Games Studio & B2B GGR Provider Platform · High-Throughput Remote Gaming Server
        </p>
        <p className="text-[11px]">
          AES-256 Secured Launch & Idempotent Callback Settlements · Powered by Next.js & PostgreSQL
        </p>
        <p className="text-[10px] text-gray-600">
          © {new Date().getFullYear()} Royal Games Platform. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
