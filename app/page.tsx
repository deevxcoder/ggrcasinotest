"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Search, Sparkles, Flame, RefreshCw, AlertCircle } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { HeroBanner } from "@/components/HeroBanner";
import { CategoryFilter } from "@/components/CategoryFilter";
import { ProviderFilter } from "@/components/ProviderFilter";
import { GameCard } from "@/components/GameCard";
import { GameModal } from "@/components/GameModal";
import { DepositModal } from "@/components/DepositModal";
import { AuthModal } from "@/components/AuthModal";
import { Provider, Game } from "@/lib/types";

export default function LobbyPage() {
  // User & Auth State
  const [user, setUser] = useState<any>(null);
  const [settings, setSettings] = useState<any>(null);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [depositModalOpen, setDepositModalOpen] = useState(false);

  // Catalog State
  const [providers, setProviders] = useState<Provider[]>([]);
  const [games, setGames] = useState<Game[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedBrandId, setSelectedBrandId] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [loadingGames, setLoadingGames] = useState(true);
  const [loadingProviders, setLoadingProviders] = useState(true);

  // Active Game Launch Modal State
  const [activeGame, setActiveGame] = useState<Game | null>(null);
  const [launchUrl, setLaunchUrl] = useState<string | null>(null);
  const [launchLoading, setLaunchLoading] = useState(false);
  const [launchError, setLaunchError] = useState<string | null>(null);

  // Fetch Current User
  const fetchUser = useCallback(async () => {
    try {
      const res = await fetch("/api/auth/me");
      const data = await res.json();
      if (data.user) {
        setUser(data.user);
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  // Fetch Site Settings
  const loadSettings = useCallback(async () => {
    try {
      const res = await fetch("/api/settings");
      const data = await res.json();
      if (data.settings) {
        setSettings(data.settings);
        const theme = data.settings.themeColor || "gold";
        document.documentElement.setAttribute("data-theme", theme);
        if (data.settings.siteName) {
          document.title = `${data.settings.siteName} | ${data.settings.siteSubtitle || "Casino Royale"}`;
        }
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  // Fetch Providers
  const loadProviders = useCallback(async () => {
    setLoadingProviders(true);
    try {
      const res = await fetch("/api/catalog/providers");
      const data = await res.json();
      if (data.providers) {
        setProviders(data.providers);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingProviders(false);
    }
  }, []);

  // Fetch Games
  const loadGames = useCallback(async () => {
    setLoadingGames(true);
    try {
      const params = new URLSearchParams();
      if (selectedBrandId) params.set("brand_id", String(selectedBrandId));
      if (selectedCategory && selectedCategory !== "all") params.set("category", selectedCategory);
      if (searchQuery.trim()) params.set("q", searchQuery.trim());
      params.set("limit", "100");

      const res = await fetch(`/api/catalog/games?${params.toString()}`);
      const data = await res.json();
      if (data.games) {
        setGames(data.games);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingGames(false);
    }
  }, [selectedBrandId, selectedCategory, searchQuery]);

  useEffect(() => {
    fetchUser();
    loadProviders();
    loadSettings();
  }, [fetchUser, loadProviders, loadSettings]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      loadGames();
    }, 250);
    return () => clearTimeout(timeout);
  }, [loadGames]);

  // Handle Game Launching via NexxAPI
  const handlePlayGame = async (game: Game) => {
    if (!user) {
      setAuthModalOpen(true);
      return;
    }

    setActiveGame(game);
    setLaunchLoading(true);
    setLaunchError(null);
    setLaunchUrl(null);

    try {
      const res = await fetch("/api/game/launch", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          gameUid: game.game_uid,
          currencyCode: user?.currency || "INR",
        }),
      });

      const data = await res.json();

      if (!res.ok || (!data.url && !data.isRoyal)) {
        throw new Error(data.error || "Could not launch game session");
      }

      setLaunchUrl(data.url || null);
    } catch (err: any) {
      setLaunchError(err.message || "Failed to launch game");
    } finally {
      setLaunchLoading(false);
    }
  };

  // Launch Aviator Shortcut
  const handleLaunchAviator = () => {
    handlePlayGame({
      game_id: 737,
      game_uid: "737",
      name: "Aviator",
      provider: "Spribe",
      category: "Crash / Flash",
      logo: "/api/media?url=https%3A%2F%2Fapi.nexxapi.tech%2Fmedia%2Fgames%2F737.png",
    });
  };

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    fetchUser();
  };

  return (
    <div className="min-h-screen bg-[#080b11] flex flex-col">
      {/* Top Navigation */}
      <Navbar
        user={user}
        settings={settings}
        onOpenDeposit={() => setDepositModalOpen(true)}
        onOpenAuth={() => setAuthModalOpen(true)}
        onLogout={handleLogout}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
        {/* Hero Aviator Spotlight */}
        <HeroBanner onLaunchAviator={handleLaunchAviator} />

        {/* Filters & Search Header */}
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Category Pills */}
            <CategoryFilter
              activeCategory={selectedCategory}
              onSelectCategory={(cat) => {
                setSelectedCategory(cat);
                setSelectedBrandId(null);
              }}
            />

            {/* Live Search Box */}
            <div className="relative min-w-[260px]">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search games (e.g. Aviator, Sweet Bonanza)..."
                className="w-full pl-10 pr-4 py-2 bg-casino-card border border-casino-border focus:border-amber-500/80 rounded-xl text-xs font-semibold text-white placeholder-gray-500 focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Provider Carousel */}
          <ProviderFilter
            providers={providers}
            selectedBrandId={selectedBrandId}
            onSelectBrand={(bId) => setSelectedBrandId(bId)}
            loading={loadingProviders}
          />
        </div>

        {/* Games Grid Header */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-amber-400 fill-amber-400" />
            <h2 className="text-lg font-black text-white uppercase tracking-wider">
              {selectedBrandId
                ? `${providers.find((p) => p.brand_id === selectedBrandId)?.name || "Provider"} Games`
                : selectedCategory === "all"
                ? "Popular Games"
                : `${selectedCategory.toUpperCase()} Games`}
            </h2>
            <span className="text-xs px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-400 font-bold">
              {games.length}
            </span>
          </div>

          <button
            onClick={loadGames}
            className="flex items-center gap-1 text-xs text-gray-400 hover:text-amber-400 font-semibold transition-colors"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loadingGames ? "animate-spin" : ""}`} />
            <span>Refresh</span>
          </button>
        </div>

        {/* Games Grid */}
        {loadingGames ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="aspect-[4/3] rounded-2xl bg-casino-card animate-pulse border border-casino-border"
              />
            ))}
          </div>
        ) : games.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {games.map((game) => (
              <GameCard key={game.game_uid || game.game_id} game={game} onPlay={handlePlayGame} />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center bg-casino-card border border-casino-border rounded-3xl space-y-3">
            <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mx-auto text-amber-400">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white">No games found</h3>
            <p className="text-xs text-gray-400 max-w-sm mx-auto">
              Try searching with another keyword or pick a different provider like Spribe or Pragmatic Play.
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-casino-border/60 bg-[#06080e] py-8 text-center text-xs text-gray-500 space-y-2">
        <p className="font-semibold text-gray-400">
          {settings?.siteName || "GGR Casino"} Platform · Built with Next.js 14, TypeScript & Supabase PostgreSQL
        </p>
        <p className="text-[11px]">
          Powered by NexxAPI Gaming Infrastructure · AES-256-ECB Secured Launch & Idempotent Callback Settlements
        </p>
        <p className="text-[10px] text-gray-600">
          © {new Date().getFullYear()} {settings?.siteName || "GGR Casino"}. All rights reserved.
        </p>
      </footer>

      {/* Interactive Modals */}
      <GameModal
        game={activeGame}
        launchUrl={launchUrl}
        loading={launchLoading}
        error={launchError}
        userBalance={user?.balance || 0}
        onClose={() => {
          setActiveGame(null);
          setLaunchUrl(null);
          fetchUser();
        }}
        onOpenDeposit={() => setDepositModalOpen(true)}
        onRefreshBalance={fetchUser}
      />

      <DepositModal
        isOpen={depositModalOpen}
        onClose={() => setDepositModalOpen(false)}
        onDepositSuccess={(newBal) => {
          if (user) setUser({ ...user, balance: newBal });
        }}
      />

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        onAuthSuccess={(u) => setUser(u)}
      />
    </div>
  );
}
