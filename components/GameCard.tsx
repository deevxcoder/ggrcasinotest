"use client";

import React, { useState } from "react";
import { Play, Sparkles, Flame } from "lucide-react";
import { Game } from "@/lib/types";

interface GameCardProps {
  game: Game;
  onPlay: (game: Game) => void;
}

export const GameCard: React.FC<GameCardProps> = ({ game, onPlay }) => {
  const [imgError, setImgError] = useState(false);

  // Determine fallback badge color based on provider
  const getGradient = () => {
    const p = (game.provider || "").toLowerCase();
    if (p.includes("spribe")) return "from-red-900/60 to-amber-900/40";
    if (p.includes("pragmatic")) return "from-amber-900/60 to-yellow-900/40";
    if (p.includes("smartsoft")) return "from-purple-900/60 to-indigo-900/40";
    return "from-slate-800 to-slate-900";
  };

  const isAviator = game.name.toLowerCase().includes("aviator");

  return (
    <div
      onClick={() => onPlay(game)}
      className="group relative cursor-pointer rounded-2xl overflow-hidden bg-casino-card border border-casino-border hover:border-amber-500/60 shadow-lg hover:shadow-gold-glow transition-all duration-300 transform hover:-translate-y-1"
    >
      {/* Game Thumbnail */}
      <div className={`relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br ${getGradient()} flex items-center justify-center p-2`}>
        {game.logo && !imgError ? (
          <img
            src={game.logo}
            alt={game.name}
            className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-108"
            onError={() => setImgError(true)}
            loading="lazy"
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-center p-3">
            <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-2">
              <Sparkles className="w-6 h-6 text-amber-400" />
            </div>
            <span className="font-extrabold text-sm text-white line-clamp-2">
              {game.name}
            </span>
          </div>
        )}

        {/* Top Badges */}
        <div className="absolute top-2 left-2 flex items-center gap-1">
          {isAviator ? (
            <span className="px-2 py-0.5 rounded-md bg-red-600/90 text-white text-[10px] font-black uppercase tracking-wider flex items-center gap-1 shadow-md">
              <Flame className="w-3 h-3 fill-white" />
              HOT
            </span>
          ) : (
            <span className="px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-sm text-gray-300 text-[10px] font-bold uppercase tracking-wider border border-white/10">
              {game.category || "Slot"}
            </span>
          )}
        </div>

        {/* Hover Overlay with PLAY Button */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 p-3">
          <div className="w-12 h-12 rounded-full theme-btn-accent text-black flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform">
            <Play className="w-6 h-6 fill-black ml-0.5" />
          </div>
          <span className="text-xs font-black uppercase tracking-wider theme-text-accent">
            PLAY NOW
          </span>
        </div>
      </div>

      {/* Game Info Bottom */}
      <div className="p-3 bg-[#0d121c] border-t border-casino-border/50">
        <h4 className="font-bold text-sm text-gray-100 truncate group-hover:theme-text-accent transition-colors">
          {game.name}
        </h4>
        <p className="text-[11px] font-medium text-gray-400 truncate mt-0.5">
          {game.provider}
        </p>
      </div>
    </div>
  );
};
