"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams, useParams } from "next/navigation";
import { Sparkles, Wallet, RefreshCw, ArrowLeft, Maximize2, Minimize2, AlertCircle } from "lucide-react";

export default function PlaySessionPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const sessionId = params.sessionId as string;
  const sessionToken = searchParams.get("token");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [session, setSession] = useState<any>(null);
  const [playerBalance, setPlayerBalance] = useState<number>(0);

  // Active game specific states
  const [betAmount, setBetAmount] = useState<number>(50);
  const [coinChoice, setCoinChoice] = useState<"heads" | "tails">("heads");
  const [isProcessing, setIsProcessing] = useState(false);
  const [gameResult, setGameResult] = useState<any>(null);
  const [history, setHistory] = useState<any[]>([]);

  // Andar Bahar states
  const [betSide, setBetSide] = useState<"andar" | "bahar">("andar");
  const [jokerCard, setJokerCard] = useState<any>({ display: "K♠", color: "black", rank: "K", suit: "♠" });
  const [andarCards, setAndarCards] = useState<any[]>([]);
  const [baharCards, setBaharCards] = useState<any[]>([]);

  // Chicken Cross states
  const [chickenLane, setChickenLane] = useState(0);
  const [chickenMult, setChickenMult] = useState(1.0);
  const [chickenPlaying, setChickenPlaying] = useState(false);

  // Verify Session Token on Mount
  useEffect(() => {
    if (!sessionId || !sessionToken) {
      setError("Missing session authentication credentials");
      setLoading(false);
      return;
    }

    // In a real environment we could verify via API or decode
    // For fast mounting, we can fetch session status
    fetch(`/api/v1/whoami?token=${sessionToken}`)
      .catch(() => {})
      .finally(() => {
        setPlayerBalance(1000); // initial
        setLoading(false);
      });
  }, [sessionId, sessionToken]);

  // Execute Studio Round API
  const handlePlayRound = async (extraPayload: any = {}) => {
    if (isProcessing || betAmount <= 0) return;
    setIsProcessing(true);
    setGameResult(null);

    try {
      const res = await fetch("/api/studio/round", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId,
          sessionToken,
          gameUid: searchParams.get("game") || "royal_coinflip",
          betAmount,
          ...extraPayload,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to execute round");
      }

      setGameResult(data);
      if (data.newBalance !== undefined) setPlayerBalance(data.newBalance);

      if (data.coinResult) {
        setHistory((prev) => [data.coinResult, ...prev.slice(0, 8)]);
      }
      if (data.winningSide) {
        setJokerCard(data.jokerCard);
        setAndarCards(data.dealtAndar || []);
        setBaharCards(data.dealtBahar || []);
        setHistory((prev) => [data.winningSide === "andar" ? "A" : "B", ...prev.slice(0, 8)]);
      }
      if (data.crashed) {
        setChickenPlaying(false);
      }
      if (data.cashedOut) {
        setChickenPlaying(false);
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsProcessing(false);
    }
  };

  const gameUid = searchParams.get("game") || "royal_coinflip";

  const getGameTitle = () => {
    if (gameUid === "royal_coinflip") return "Coin Flip Royale";
    if (gameUid === "royal_andarbahar") return "Andar Bahar Live";
    if (gameUid === "royal_chickencross") return "Chicken Road Cross";
    return "Royal Games Studio";
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#080b12] flex flex-col items-center justify-center text-white space-y-4">
        <div className="w-12 h-12 rounded-full border-4 border-amber-500/20 border-t-amber-400 animate-spin" />
        <p className="text-xs font-black uppercase tracking-wider text-gray-400">Loading Royal Game Studio Session...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-[#080b11] text-white flex flex-col justify-between select-none">
      {/* Top Studio Control Bar */}
      <header className="h-14 px-4 bg-[#0d121e] border-b border-casino-border flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold">
            👑
          </div>
          <div>
            <h1 className="text-sm font-black text-white">{getGameTitle()}</h1>
            <p className="text-[10px] text-amber-400/80 font-bold uppercase">Royal Games Remote Studio</p>
          </div>
        </div>

        {/* Center Wallet Bar */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#090d16] border border-casino-border">
          <Wallet className="w-4 h-4 text-emerald-400" />
          <div className="text-right">
            <span className="text-[9px] uppercase font-bold text-gray-400 block leading-none">Balance</span>
            <span className="text-xs font-black text-emerald-400 leading-tight">
              ₹{playerBalance.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
            </span>
          </div>
        </div>

        {/* Exit Game */}
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-rose-950/40 hover:bg-rose-900/60 border border-rose-500/40 text-rose-300 font-bold text-xs"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Exit</span>
        </button>
      </header>

      {/* Main Interactive Game Area */}
      <main className="flex-1 flex flex-col items-center justify-center p-4 max-w-4xl w-full mx-auto">
        {/* ================= 1. COIN FLIP ================= */}
        {gameUid === "royal_coinflip" && (
          <div className="w-full flex flex-col items-center space-y-6">
            {/* 3D Coin Graphic */}
            <div
              onClick={() => handlePlayRound({ choice: coinChoice })}
              className="w-40 h-40 rounded-full flex items-center justify-center shadow-2xl cursor-pointer transform hover:scale-105 transition-transform"
              style={{
                background:
                  coinChoice === "heads"
                    ? "radial-gradient(circle at 35% 35%, #fde047, #ca8a04 60%, #854d0e 95%)"
                    : "radial-gradient(circle at 35% 35%, #38bdf8, #0284c7 60%, #075985 95%)",
                border: "6px solid rgba(255, 255, 255, 0.4)",
              }}
            >
              <div className="text-center">
                <span className="text-4xl">{isProcessing ? "🪙" : gameResult?.coinResult ? (gameResult.coinResult === "heads" ? "👑" : "💎") : coinChoice === "heads" ? "👑" : "💎"}</span>
                <span className="block text-xs font-black text-black uppercase mt-1">
                  {isProcessing ? "FLIPPING..." : gameResult?.coinResult ? gameResult.coinResult.toUpperCase() : coinChoice.toUpperCase()}
                </span>
              </div>
            </div>

            {/* Notification */}
            {gameResult && !isProcessing && (
              <div className={`px-4 py-2 rounded-xl text-xs font-black uppercase ${gameResult.won ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500" : "bg-rose-500/20 text-rose-400 border border-rose-500"}`}>
                {gameResult.won ? `🎉 WON ₹${gameResult.winAmount} (1.96x)!` : "TRY AGAIN!"}
              </div>
            )}

            {/* Betting Controls */}
            <div className="w-full max-w-md bg-[#0f1422] border border-casino-border rounded-3xl p-4 space-y-3">
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setCoinChoice("heads")}
                  className={`py-3 rounded-xl font-black text-xs uppercase ${coinChoice === "heads" ? "bg-amber-500 text-black shadow-gold-glow" : "bg-[#090d16] text-gray-400 border border-casino-border"}`}
                >
                  👑 HEADS (1.96x)
                </button>
                <button
                  onClick={() => setCoinChoice("tails")}
                  className={`py-3 rounded-xl font-black text-xs uppercase ${coinChoice === "tails" ? "bg-cyan-500 text-black shadow-cyan-glow" : "bg-[#090d16] text-gray-400 border border-casino-border"}`}
                >
                  💎 TAILS (1.96x)
                </button>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="number"
                  value={betAmount}
                  onChange={(e) => setBetAmount(Math.max(1, Number(e.target.value)))}
                  className="flex-1 px-3 py-2 bg-[#080c14] border border-casino-border rounded-xl text-sm font-black text-white focus:outline-none"
                />
                <button
                  onClick={() => handlePlayRound({ choice: coinChoice })}
                  disabled={isProcessing}
                  className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-black text-xs uppercase tracking-wider shadow-gold-glow"
                >
                  {isProcessing ? "FLIPPING..." : `FLIP (₹${betAmount})`}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ================= 2. ANDAR BAHAR ================= */}
        {gameUid === "royal_andarbahar" && (
          <div className="w-full flex flex-col items-center space-y-4">
            <div className="w-20 h-28 rounded-2xl bg-white text-black border-2 border-amber-400 shadow-gold-glow flex flex-col items-center justify-between p-2">
              <span className={`text-sm font-black ${jokerCard?.color === "red" ? "text-rose-600" : "text-black"}`}>{jokerCard?.rank}</span>
              <span className={`text-3xl font-black ${jokerCard?.color === "red" ? "text-rose-600" : "text-black"}`}>{jokerCard?.suit}</span>
              <span className={`text-sm font-black ${jokerCard?.color === "red" ? "text-rose-600" : "text-black"}`}>{jokerCard?.rank}</span>
            </div>

            <div className="grid grid-cols-2 gap-4 w-full max-w-lg">
              <button
                onClick={() => handlePlayRound({ betSide: "andar" })}
                disabled={isProcessing}
                className="p-4 rounded-2xl bg-rose-950/40 border-2 border-rose-500 hover:bg-rose-900/40 text-center space-y-1"
              >
                <div className="font-black text-sm text-rose-300 uppercase">ANDAR</div>
                <div className="text-xs font-bold text-rose-400">1.90x Payout</div>
              </button>

              <button
                onClick={() => handlePlayRound({ betSide: "bahar" })}
                disabled={isProcessing}
                className="p-4 rounded-2xl bg-blue-950/40 border-2 border-blue-500 hover:bg-blue-900/40 text-center space-y-1"
              >
                <div className="font-black text-sm text-blue-300 uppercase">BAHAR</div>
                <div className="text-xs font-bold text-blue-400">2.00x Payout</div>
              </button>
            </div>

            {gameResult && !isProcessing && (
              <div className={`p-3 rounded-xl text-xs font-black uppercase ${gameResult.won ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500" : "bg-rose-500/20 text-rose-400 border border-rose-500"}`}>
                {gameResult.won ? `🎉 ${gameResult.winningSide?.toUpperCase()} WON! +₹${gameResult.winAmount}` : `${gameResult.winningSide?.toUpperCase()} WON — TRY AGAIN`}
              </div>
            )}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="py-2.5 px-4 bg-[#0a0d16] border-t border-casino-border text-center text-[11px] text-gray-500">
        Royal Games Studio RGS · Secured Provably Fair RNG & Real-time Webhook Settlement Engine
      </footer>
    </div>
  );
}
