"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Terminal, Copy, Check, TrendingUp, Key, Wallet, Link2, Sparkles, BookOpen, Layers } from "lucide-react";

export default function ApiDocsPage() {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);
  const [selectedLang, setSelectedLang] = useState<"curl" | "node" | "php" | "python">("curl");

  const handleCopy = (id: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedSection(id);
    setTimeout(() => setCopiedSection(null), 2500);
  };

  const curlLaunchExample = `curl -X POST http://localhost:3001/api/v1/launch \\
  -H "Content-Type: application/json" \\
  -d '{
    "token": "YOUR_ROYAL_API_TOKEN",
    "user_id": "player_12345",
    "balance": 1500.00,
    "game_uid": "royal_coinflip",
    "currency_code": "INR",
    "callback": "https://your-casino.com/api/callback",
    "return": "https://your-casino.com/lobby"
  }'`;

  const nodeLaunchExample = `const axios = require('axios');

async function launchRoyalGame() {
  const res = await axios.post('http://localhost:3001/api/v1/launch', {
    token: 'YOUR_ROYAL_API_TOKEN',
    user_id: 'player_12345',
    balance: 1500.00,
    game_uid: 'royal_coinflip',
    currency_code: 'INR',
    callback: 'https://your-casino.com/api/callback',
    return: 'https://your-casino.com/lobby'
  });

  console.log('Game Session URL:', res.data.data.url);
  return res.data.data.url;
}`;

  const phpLaunchExample = `<?php
$payload = [
  "token" => "YOUR_ROYAL_API_TOKEN",
  "user_id" => "player_12345",
  "balance" => 1500.00,
  "game_uid" => "royal_coinflip",
  "currency_code" => "INR",
  "callback" => "https://your-casino.com/api/callback",
  "return" => "https://your-casino.com/lobby"
];

$ch = curl_init('http://localhost:3001/api/v1/launch');
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type:application/json']);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$result = curl_exec($ch);
curl_close($ch);

$data = json_decode($result, true);
header('Location: ' . $data['data']['url']);
?>`;

  return (
    <div className="min-h-screen bg-[#080b11] text-gray-100 flex flex-col">
      {/* Top Header */}
      <header className="sticky top-0 z-30 w-full bg-[#0d121e] border-b border-casino-border px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-black">
            👑
          </div>
          <div>
            <h1 className="text-base font-black text-white">Interactive API Documentation</h1>
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
            { label: "Prepaid GGR Wallet", href: "/portal/wallet", active: false, icon: Wallet },
            { label: "Webhook Logs", href: "/portal/webhooks", active: false, icon: Link2 },
            { label: "Interactive API Docs", href: "/portal/docs", active: true, icon: Terminal },
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

        {/* API Reference Sections */}
        <div className="space-y-6">
          {/* Endpoint 1: Launch Game */}
          <div className="p-6 rounded-3xl bg-[#0f1422] border border-casino-border space-y-4 shadow-xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 font-black text-xs border border-emerald-500/30">
                  POST
                </span>
                <code className="font-mono text-sm font-bold text-white">/api/v1/launch</code>
              </div>
              <span className="text-xs text-gray-400">Generates Playable Game Session Iframe URL</span>
            </div>

            <p className="text-xs text-gray-300 leading-relaxed">
              Call this endpoint when a player on your casino website clicks on a game card to play. Returns an authenticated full-screen game session URL.
            </p>

            {/* Language Selector */}
            <div className="flex items-center gap-1.5 pt-2">
              {(["curl", "node", "php"] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setSelectedLang(lang)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold uppercase transition-all ${
                    selectedLang === lang
                      ? "bg-amber-500 text-black shadow-gold-glow"
                      : "bg-[#080c14] text-gray-400 hover:text-white border border-casino-border"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            {/* Code Box */}
            <div className="relative">
              <pre className="p-4 rounded-2xl bg-[#080c14] border border-casino-border font-mono text-xs text-emerald-400 overflow-x-auto">
                {selectedLang === "curl" ? curlLaunchExample : selectedLang === "node" ? nodeLaunchExample : phpLaunchExample}
              </pre>
              <button
                onClick={() => handleCopy("launch", selectedLang === "curl" ? curlLaunchExample : selectedLang === "node" ? nodeLaunchExample : phpLaunchExample)}
                className="absolute top-3 right-3 p-2 rounded-xl bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white"
              >
                {copiedSection === "launch" ? <Check className="w-4 h-4 stroke-[3] text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Endpoint 2: Webhook Callback Settlement */}
          <div className="p-6 rounded-3xl bg-[#0f1422] border border-casino-border space-y-4 shadow-xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="px-2.5 py-1 rounded-lg bg-blue-500/20 text-blue-300 font-black text-xs border border-blue-500/30">
                  WEBHOOK POST
                </span>
                <code className="font-mono text-sm font-bold text-white">{`{your_callback_url}`}</code>
              </div>
              <span className="text-xs text-gray-400">Incoming Settlement Payload</span>
            </div>

            <p className="text-xs text-gray-300 leading-relaxed">
              When a game round finishes on Royal Games Studio, our server immediately posts this settlement JSON to your configured callback endpoint to credit or debit the player's balance:
            </p>

            <pre className="p-4 rounded-2xl bg-[#080c14] border border-casino-border font-mono text-xs text-amber-300 overflow-x-auto">
{`{
  "game_id": 88801,
  "game_uid": "royal_coinflip",
  "game_round": "R-109482",
  "member_account": "player_12345",
  "bet_amount": 100.00,
  "win_amount": 196.00,
  "credit_amount": 1596.00,
  "serial_number": "SN-ROYAL-CF-17239823-a8f",
  "game_name": "Coin Flip Royale",
  "timestamp": 1723982390
}`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
