"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  Activity,
  Users,
  TrendingUp,
  Coins,
  ShieldCheck,
  Search,
  RefreshCw,
  ArrowUpRight,
  ArrowDownRight,
  Lock,
  ArrowLeft,
  AlertTriangle,
  Play,
  CheckCircle2,
  DollarSign,
  Layers,
  ChevronRight,
  UserPlus,
  Edit,
  Settings,
  Palette,
  Globe,
  Link2,
  Sparkles,
  Save,
  Check,
  X,
} from "lucide-react";

export default function AdminDashboardPage() {
  // Auth state
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [adminUsername, setAdminUsername] = useState("admin");
  const [adminPassword, setAdminPassword] = useState("admin123");
  const [loginError, setLoginError] = useState<string | null>(null);
  const [loginLoading, setLoginLoading] = useState(false);

  // Active Tab
  const [activeTab, setActiveTab] = useState<"overview" | "players" | "rounds" | "settings" | "diagnostics">("overview");

  // Data states
  const [stats, setStats] = useState<any>(null);
  const [loadingStats, setLoadingStats] = useState(false);
  const [users, setUsers] = useState<any[]>([]);
  const [userSearch, setUserSearch] = useState("");
  const [loadingUsers, setLoadingUsers] = useState(false);
  const [rounds, setRounds] = useState<any[]>([]);
  const [roundSearch, setRoundSearch] = useState("");
  const [loadingRounds, setLoadingRounds] = useState(false);

  // Site Settings state
  const [siteName, setSiteName] = useState("NEXX CASINO");
  const [siteSubtitle, setSiteSubtitle] = useState("Casino Royale");
  const [logoUrl, setLogoUrl] = useState("");
  const [themeColor, setThemeColor] = useState("gold");
  const [callbackUrl, setCallbackUrl] = useState("https://your-domain.com/api/callback");
  const [returnUrl, setReturnUrl] = useState("https://your-domain.com/lobby");
  const [currency, setCurrency] = useState("INR");
  const [loadingSettings, setLoadingSettings] = useState(false);
  const [savingSettings, setSavingSettings] = useState(false);
  const [settingsSaved, setSettingsSaved] = useState(false);

  // Modal for player balance adjustment
  const [selectedPlayer, setSelectedPlayer] = useState<any>(null);
  const [adjustAction, setAdjustAction] = useState<"credit" | "debit">("credit");
  const [adjustAmount, setAdjustAmount] = useState<number>(500);
  const [adjustNote, setAdjustNote] = useState("");
  const [adjustLoading, setAdjustLoading] = useState(false);

  // Webhook tester state
  const [testBet, setTestBet] = useState(50);
  const [testWin, setTestWin] = useState(120);
  const [testResult, setTestResult] = useState<string | null>(null);
  const [testingCallback, setTestingCallback] = useState(false);

  // Create Player Modal State
  const [createPlayerOpen, setCreatePlayerOpen] = useState(false);
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newInitialBalance, setNewInitialBalance] = useState<number>(1000);
  const [newEmail, setNewEmail] = useState("");
  const [newIsAdmin, setNewIsAdmin] = useState(false);
  const [creatingPlayer, setCreatingPlayer] = useState(false);
  const [createPlayerError, setCreatePlayerError] = useState<string | null>(null);

  // 1. Check Auth Status
  const checkAuth = useCallback(async () => {
    setCheckingAuth(true);
    try {
      const res = await fetch("/api/auth/me");
      const data = await res.json();
      if (data.user && data.user.isAdmin) {
        setCurrentUser(data.user);
      } else {
        setCurrentUser(null);
      }
    } catch (e) {
      setCurrentUser(null);
    } finally {
      setCheckingAuth(false);
    }
  }, []);

  // 2. Admin Login
  const handleAdminLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError(null);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: adminUsername, password: adminPassword }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Login failed");
      if (!data.user.isAdmin) throw new Error("Account does not have Admin privileges");
      setCurrentUser(data.user);
    } catch (err: any) {
      setLoginError(err.message);
    } finally {
      setLoginLoading(false);
    }
  };

  // 3. Load Overview Stats
  const loadStats = useCallback(async () => {
    if (!currentUser?.isAdmin) return;
    setLoadingStats(true);
    try {
      const res = await fetch("/api/admin/stats");
      const data = await res.json();
      if (res.ok) setStats(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingStats(false);
    }
  }, [currentUser]);

  // 4. Load Players List
  const loadUsers = useCallback(async () => {
    if (!currentUser?.isAdmin) return;
    setLoadingUsers(true);
    try {
      const res = await fetch(`/api/admin/users?search=${encodeURIComponent(userSearch)}`);
      const data = await res.json();
      if (data.users) setUsers(data.users);
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingUsers(false);
    }
  }, [currentUser, userSearch]);

  // 5. Load Rounds Audit Ledger
  const loadRounds = useCallback(async () => {
    if (!currentUser?.isAdmin) return;
    setLoadingRounds(true);
    try {
      const res = await fetch(`/api/admin/rounds?search=${encodeURIComponent(roundSearch)}`);
      const data = await res.json();
      if (data.rounds) setRounds(data.rounds);
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingRounds(false);
    }
  }, [currentUser, roundSearch]);

  // 6. Load Site Settings
  const loadSettings = useCallback(async () => {
    if (!currentUser?.isAdmin) return;
    setLoadingSettings(true);
    try {
      const res = await fetch("/api/admin/settings");
      const data = await res.json();
      if (data.settings) {
        setSiteName(data.settings.siteName || "NEXX CASINO");
        setSiteSubtitle(data.settings.siteSubtitle || "Casino Royale");
        setLogoUrl(data.settings.logoUrl || "");
        setThemeColor(data.settings.themeColor || "gold");
        setCallbackUrl(data.settings.callbackUrl || "https://your-domain.com/api/callback");
        setReturnUrl(data.settings.returnUrl || "https://your-domain.com/lobby");
        setCurrency(data.settings.currency || "INR");
        document.title = `${data.settings.siteName || "ROYAL GGR CASINO"} | Admin Portal`;
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingSettings(false);
    }
  }, [currentUser]);

  // Save Site Settings Handler
  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    setSavingSettings(true);
    setSettingsSaved(false);

    try {
      const res = await fetch("/api/admin/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          siteName,
          siteSubtitle,
          logoUrl,
          themeColor,
          callbackUrl,
          returnUrl,
          currency,
        }),
      });

      if (res.ok) {
        setSettingsSaved(true);
        setTimeout(() => setSettingsSaved(false), 3000);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSavingSettings(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  useEffect(() => {
    if (currentUser?.isAdmin) {
      loadStats();
      loadUsers();
      loadRounds();
      loadSettings();
    }
  }, [currentUser, loadStats, loadUsers, loadRounds, loadSettings]);

  // Player Balance Adjustment Handler
  const handleAdjustBalance = async () => {
    if (!selectedPlayer || adjustAmount <= 0) return;
    setAdjustLoading(true);
    try {
      const res = await fetch("/api/admin/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: selectedPlayer.id,
          action: adjustAction,
          amount: adjustAmount,
          note: adjustNote,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setSelectedPlayer(null);
        loadUsers();
        loadStats();
      }
    } catch (e) {
      console.error(e);
    } finally {
      setAdjustLoading(false);
    }
  };

  // Create New Player Account Handler
  const handleCreatePlayer = async (e: React.FormEvent) => {
    e.preventDefault();
    setCreatingPlayer(true);
    setCreatePlayerError(null);

    try {
      const res = await fetch("/api/admin/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "create",
          username: newUsername,
          password: newPassword,
          initialBalance: newInitialBalance,
          email: newEmail || undefined,
          isAdmin: newIsAdmin,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to create player");

      setCreatePlayerOpen(false);
      setNewUsername("");
      setNewPassword("");
      setNewInitialBalance(1000);
      setNewEmail("");
      setNewIsAdmin(false);

      loadUsers();
      loadStats();
    } catch (err: any) {
      setCreatePlayerError(err.message);
    } finally {
      setCreatingPlayer(false);
    }
  };

  // Test Round Callback Webhook Simulation
  const handleSimulateRound = async () => {
    if (!users.length) return;
    setTestingCallback(true);
    setTestResult(null);

    const testUser = users.find((u) => u.username === "demo_player") || users[0];
    const serial = `SN-${Date.now()}-${Math.random().toString(36).substring(7)}`;
    const round = `R-${Math.floor(Math.random() * 100000)}`;
    const newBal = testUser.balance + (testWin - testBet);

    try {
      const res = await fetch("/api/callback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          game_id: 737,
          game_uid: "737",
          game_round: round,
          member_account: testUser.id,
          bet_amount: testBet,
          win_amount: testWin,
          credit_amount: newBal,
          serial_number: serial,
          game_name: "Aviator (Admin Test)",
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setTestResult(
          `✅ Callback processed: ${testUser.username} new balance: ₹${newBal.toFixed(2)} (Round: ${round})`
        );
        loadStats();
        loadUsers();
        loadRounds();
      }
    } catch (err: any) {
      setTestResult(`❌ Error: ${err.message}`);
    } finally {
      setTestingCallback(false);
    }
  };

  // If Checking Auth
  if (checkingAuth) {
    return (
      <div className="min-h-screen bg-[#070a10] flex items-center justify-center">
        <div className="w-10 h-10 rounded-full border-4 border-amber-500/20 border-t-amber-400 animate-spin" />
      </div>
    );
  }

  // If Not Logged in as Admin, show Admin Login Screen
  if (!currentUser) {
    return (
      <div className="min-h-screen bg-[#080b11] flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-[#0f1422] border border-casino-border rounded-3xl p-8 shadow-2xl space-y-6">
          <div className="text-center space-y-2">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mx-auto text-amber-400">
              <Lock className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-black text-white tracking-tight">Admin Portal</h2>
            <p className="text-xs text-gray-400">Restricted to Casino Operators & Staff</p>
          </div>

          {loginError && (
            <div className="p-3.5 rounded-xl bg-rose-950/60 border border-rose-500/40 text-xs font-semibold text-rose-300">
              {loginError}
            </div>
          )}

          <form onSubmit={handleAdminLogin} className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-400">
                Admin Username
              </label>
              <input
                type="text"
                value={adminUsername}
                onChange={(e) => setAdminUsername(e.target.value)}
                className="w-full px-4 py-2.5 bg-[#080c14] border border-casino-border focus:border-amber-500 rounded-xl text-sm font-semibold text-white focus:outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-400">
                Admin Password
              </label>
              <input
                type="password"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                className="w-full px-4 py-2.5 bg-[#080c14] border border-casino-border focus:border-amber-500 rounded-xl text-sm font-semibold text-white focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={loginLoading}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-black font-black text-sm uppercase tracking-wider shadow-gold-glow transition-all"
            >
              {loginLoading ? "Authenticating..." : "Sign In to Admin Portal"}
            </button>
          </form>

          <div className="pt-2 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-amber-400 font-semibold"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Public Player Lobby</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#080b11] text-gray-100 flex flex-col">
      {/* Top Admin Header */}
      <header className="sticky top-0 z-30 w-full bg-[#0d121e] border-b border-casino-border/80 px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-black text-sm">
              👑
            </div>
            <div>
              <h1 className="text-base font-black text-white tracking-wide leading-tight">
                {siteName} OPERATOR PORTAL
              </h1>
              <p className="text-[10px] text-amber-400/80 font-bold uppercase tracking-wider">
                {siteSubtitle} · Backoffice
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-casino-card hover:bg-casino-cardHover border border-casino-border text-xs font-bold text-gray-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Public Lobby</span>
          </Link>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#111726] border border-casino-border text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{currentUser.username}</span>
          </div>
        </div>
      </header>

      {/* Low GGR Alert Banner */}
      {stats && stats.ggrBalance < 200 && (
        <div className="bg-amber-950/50 border-b border-amber-500/40 px-4 sm:px-8 py-2.5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-300">
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              Low Prepaid GGR Credit: Current operator balance is <strong>₹{stats.ggrBalance}</strong>. NexxAPI
              requires &gt; ₹200 to launch live game sessions. Contact your account manager to top up.
            </span>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 border border-amber-500/40 text-amber-300 font-black whitespace-nowrap">
            GGR ALERT
          </span>
        </div>
      )}

      {/* Main Layout Body */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-8 py-6 space-y-6">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-casino-border pb-3 overflow-x-auto">
          {[
            { id: "overview", label: "Dashboard & KPIs", icon: TrendingUp },
            { id: "players", label: `Players (${users.length})`, icon: Users },
            { id: "rounds", label: "Settlement Ledger", icon: Layers },
            { id: "settings", label: "Site & Webhook Settings", icon: Settings },
            { id: "diagnostics", label: "NexxAPI Diagnostics", icon: Activity },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider whitespace-nowrap transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-amber-500 to-yellow-400 text-black shadow-gold-glow"
                    : "bg-casino-card hover:bg-casino-cardHover border border-casino-border text-gray-300 hover:text-white"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-black" : "text-amber-400"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* ================= TAB 1: OVERVIEW & KPIS ================= */}
        {activeTab === "overview" && (
          <div className="space-y-6">
            {/* KPI Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Prepaid GGR Credit */}
              <div className="p-5 rounded-3xl bg-[#0f1422] border border-casino-border space-y-2 shadow-lg">
                <div className="flex items-center justify-between text-gray-400">
                  <span className="text-xs font-black uppercase tracking-wider">NexxAPI GGR Credit</span>
                  <Coins className="w-5 h-5 text-amber-400" />
                </div>
                <div className="text-2xl font-black text-amber-400">
                  ₹{stats?.ggrBalance !== undefined ? stats.ggrBalance.toFixed(2) : "..."}
                </div>
                <p className="text-[11px] text-gray-500 font-medium">Prepaid operator balance</p>
              </div>

              {/* Net GGR Revenue */}
              <div className="p-5 rounded-3xl bg-[#0f1422] border border-casino-border space-y-2 shadow-lg">
                <div className="flex items-center justify-between text-gray-400">
                  <span className="text-xs font-black uppercase tracking-wider">GGR Profit (Bets - Wins)</span>
                  <TrendingUp className="w-5 h-5 text-emerald-400" />
                </div>
                <div
                  className={`text-2xl font-black ${
                    (stats?.ggrProfit || 0) >= 0 ? "text-emerald-400" : "text-rose-400"
                  }`}
                >
                  ₹{(stats?.ggrProfit || 0).toFixed(2)}
                </div>
                <p className="text-[11px] text-gray-500 font-medium">House Hold Margin</p>
              </div>

              {/* Total Bets (Turnover) */}
              <div className="p-5 rounded-3xl bg-[#0f1422] border border-casino-border space-y-2 shadow-lg">
                <div className="flex items-center justify-between text-gray-400">
                  <span className="text-xs font-black uppercase tracking-wider">Gross Turnover (Bets)</span>
                  <ArrowDownRight className="w-5 h-5 text-blue-400" />
                </div>
                <div className="text-2xl font-black text-white">
                  ₹{(stats?.totalBets || 0).toFixed(2)}
                </div>
                <p className="text-[11px] text-gray-500 font-medium">Across {stats?.totalRounds || 0} rounds</p>
              </div>

              {/* Registered Players */}
              <div className="p-5 rounded-3xl bg-[#0f1422] border border-casino-border space-y-2 shadow-lg">
                <div className="flex items-center justify-between text-gray-400">
                  <span className="text-xs font-black uppercase tracking-wider">Active Players</span>
                  <Users className="w-5 h-5 text-purple-400" />
                </div>
                <div className="text-2xl font-black text-white">{stats?.totalUsers || 0}</div>
                <p className="text-[11px] text-gray-500 font-medium">Stored in local SQLite</p>
              </div>
            </div>

            {/* Quick Actions & Recent Rounds */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left: Recent Activity Feed */}
              <div className="lg:col-span-8 p-6 rounded-3xl bg-[#0f1422] border border-casino-border space-y-4 shadow-lg">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-black uppercase tracking-wider text-white">
                    Live Settlement Stream
                  </h3>
                  <button
                    onClick={loadStats}
                    className="p-1.5 rounded-lg text-gray-400 hover:text-white transition-colors"
                  >
                    <RefreshCw className={`w-4 h-4 ${loadingStats ? "animate-spin" : ""}`} />
                  </button>
                </div>

                <div className="divide-y divide-casino-border/60 max-h-80 overflow-y-auto">
                  {stats?.recentRounds?.length ? (
                    stats.recentRounds.map((r: any) => (
                      <div key={r.id} className="py-3 flex items-center justify-between text-xs">
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-white">{r.gameName || r.gameUid}</span>
                            <span className="text-[10px] text-gray-400 font-mono">
                              ({r.user?.username || r.memberAccount})
                            </span>
                          </div>
                          <span className="text-[10px] text-gray-500 font-mono">{r.serialNumber}</span>
                        </div>

                        <div className="text-right space-y-0.5">
                          <div className="flex items-center gap-3">
                            <span className="text-rose-400 font-semibold">Bet: ₹{r.betAmount}</span>
                            <span className="text-emerald-400 font-bold">Win: ₹{r.winAmount}</span>
                          </div>
                          <span className="text-[10px] text-amber-400 font-bold">
                            Balance: ₹{r.creditAmount}
                          </span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="p-8 text-center text-xs text-gray-500">
                      No game rounds logged yet.
                    </div>
                  )}
                </div>
              </div>

              {/* Right: Quick Webhook Tester */}
              <div className="lg:col-span-4 p-6 rounded-3xl bg-[#0f1422] border border-casino-border space-y-4 shadow-lg flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="text-sm font-black uppercase tracking-wider text-amber-300">
                    Webhook Settlement Tester
                  </h3>
                  <p className="text-xs text-gray-400">
                    Simulate an incoming round result from NexxAPI to verify instant balance crediting and idempotency.
                  </p>

                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <div>
                      <label className="text-[10px] font-bold uppercase text-gray-400">Bet (INR)</label>
                      <input
                        type="number"
                        value={testBet}
                        onChange={(e) => setTestBet(Number(e.target.value))}
                        className="w-full px-3 py-2 bg-[#080c14] border border-casino-border rounded-xl text-xs font-bold text-white focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold uppercase text-gray-400">Win (INR)</label>
                      <input
                        type="number"
                        value={testWin}
                        onChange={(e) => setTestWin(Number(e.target.value))}
                        className="w-full px-3 py-2 bg-[#080c14] border border-casino-border rounded-xl text-xs font-bold text-white focus:outline-none"
                      />
                    </div>
                  </div>

                  {testResult && (
                    <div className="p-2.5 rounded-xl bg-black/60 border border-white/10 text-[11px] font-mono text-emerald-400 break-all">
                      {testResult}
                    </div>
                  )}
                </div>

                <button
                  onClick={handleSimulateRound}
                  disabled={testingCallback}
                  className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-black text-xs uppercase tracking-wider shadow-gold-glow flex items-center justify-center gap-1.5 transition-all mt-4"
                >
                  <Play className="w-3.5 h-3.5 fill-black" />
                  <span>{testingCallback ? "Processing..." : "Simulate Round Callback"}</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 2: PLAYERS MANAGEMENT ================= */}
        {activeTab === "players" && (
          <div className="space-y-4">
            {/* Search and Action Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="relative flex-1 max-w-md w-full">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={userSearch}
                  onChange={(e) => setUserSearch(e.target.value)}
                  placeholder="Search player by username or email..."
                  className="w-full pl-10 pr-4 py-2.5 bg-[#0f1422] border border-casino-border focus:border-amber-500 rounded-xl text-xs font-semibold text-white focus:outline-none"
                />
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => {
                    setCreatePlayerError(null);
                    setCreatePlayerOpen(true);
                  }}
                  className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-black font-black text-xs uppercase tracking-wider shadow-emerald-glow transition-all"
                >
                  <UserPlus className="w-4 h-4" />
                  <span>Create Player</span>
                </button>

                <button
                  onClick={loadUsers}
                  className="p-2.5 rounded-xl bg-casino-card hover:bg-casino-cardHover border border-casino-border text-gray-400 hover:text-white transition-colors"
                >
                  <RefreshCw className={`w-4 h-4 ${loadingUsers ? "animate-spin" : ""}`} />
                </button>
              </div>
            </div>

            {/* Players Table */}
            <div className="rounded-3xl border border-casino-border bg-[#0f1422] overflow-hidden shadow-xl">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#121826] text-gray-400 font-bold border-b border-casino-border">
                  <tr>
                    <th className="p-4">Player</th>
                    <th className="p-4">Wallet Balance</th>
                    <th className="p-4">Role</th>
                    <th className="p-4">Rounds Played</th>
                    <th className="p-4">Registered</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-casino-border/60 text-gray-300">
                  {users.map((player) => (
                    <tr key={player.id} className="hover:bg-white/5 transition-colors">
                      <td className="p-4">
                        <div className="font-extrabold text-white">{player.username}</div>
                        <div className="text-[11px] text-gray-500">{player.email || "No email"}</div>
                      </td>
                      <td className="p-4 font-black text-emerald-400 text-sm">
                        ₹{player.balance.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
                      </td>
                      <td className="p-4">
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-black uppercase ${
                            player.isAdmin
                              ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                              : "bg-gray-800 text-gray-400"
                          }`}
                        >
                          {player.isAdmin ? "ADMIN" : "PLAYER"}
                        </span>
                      </td>
                      <td className="p-4 font-bold text-gray-300">{player._count?.rounds || 0}</td>
                      <td className="p-4 text-gray-500 text-[11px]">
                        {new Date(player.createdAt).toLocaleDateString()}
                      </td>
                      <td className="p-4 text-right">
                        <button
                          onClick={() => setSelectedPlayer(player)}
                          className="px-3 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 font-bold text-xs transition-colors"
                        >
                          Adjust Balance
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ================= TAB 3: ROUNDS AUDIT LEDGER ================= */}
        {activeTab === "rounds" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={roundSearch}
                  onChange={(e) => setRoundSearch(e.target.value)}
                  placeholder="Search by serial number, player, or game name..."
                  className="w-full pl-10 pr-4 py-2.5 bg-[#0f1422] border border-casino-border focus:border-amber-500 rounded-xl text-xs font-semibold text-white focus:outline-none"
                />
              </div>

              <button
                onClick={loadRounds}
                className="p-2.5 rounded-xl bg-casino-card hover:bg-casino-cardHover border border-casino-border text-gray-400 hover:text-white transition-colors"
              >
                <RefreshCw className={`w-4 h-4 ${loadingRounds ? "animate-spin" : ""}`} />
              </button>
            </div>

            <div className="rounded-3xl border border-casino-border bg-[#0f1422] overflow-hidden shadow-xl">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#121826] text-gray-400 font-bold border-b border-casino-border">
                  <tr>
                    <th className="p-4">Time</th>
                    <th className="p-4">Player</th>
                    <th className="p-4">Game</th>
                    <th className="p-4">Serial / Idempotency Key</th>
                    <th className="p-4">Bet</th>
                    <th className="p-4">Win</th>
                    <th className="p-4">Balance After</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-casino-border/60 text-gray-300">
                  {rounds.length ? (
                    rounds.map((r) => (
                      <tr key={r.id} className="hover:bg-white/5 transition-colors">
                        <td className="p-4 text-gray-500 text-[11px] whitespace-nowrap">
                          {new Date(r.createdAt).toLocaleTimeString()}
                        </td>
                        <td className="p-4 font-bold text-white">
                          {r.user?.username || r.memberAccount}
                        </td>
                        <td className="p-4 font-semibold text-amber-300">{r.gameName || r.gameUid}</td>
                        <td className="p-4 font-mono text-[10px] text-gray-400 truncate max-w-[140px]">
                          {r.serialNumber}
                        </td>
                        <td className="p-4 text-rose-400 font-bold">₹{r.betAmount}</td>
                        <td className="p-4 text-emerald-400 font-bold">₹{r.winAmount}</td>
                        <td className="p-4 font-black text-amber-400">₹{r.creditAmount}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={7} className="p-8 text-center text-gray-500">
                        No round records found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ================= TAB 4: SITE & WEBHOOK SETTINGS ================= */}
        {activeTab === "settings" && (
          <form onSubmit={handleSaveSettings} className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left Column: Branding & Webhooks */}
              <div className="lg:col-span-8 space-y-6">
                {/* Branding Section */}
                <div className="p-6 rounded-3xl bg-[#0f1422] border border-casino-border space-y-4 shadow-xl">
                  <div className="flex items-center gap-2">
                    <Palette className="w-5 h-5 text-amber-400" />
                    <h3 className="text-sm font-black uppercase tracking-wider text-white">
                      Brand & Site Identity
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-400">
                        Site Name
                      </label>
                      <input
                        type="text"
                        required
                        value={siteName}
                        onChange={(e) => setSiteName(e.target.value)}
                        placeholder="e.g. ROYAL CASINO"
                        className="w-full px-4 py-2.5 bg-[#080c14] border border-casino-border focus:border-amber-500 rounded-xl text-sm font-bold text-white focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-400">
                        Site Subtitle / Tagline
                      </label>
                      <input
                        type="text"
                        value={siteSubtitle}
                        onChange={(e) => setSiteSubtitle(e.target.value)}
                        placeholder="e.g. Premier GGR Gaming Platform"
                        className="w-full px-4 py-2.5 bg-[#080c14] border border-casino-border focus:border-amber-500 rounded-xl text-sm font-semibold text-white focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Custom Logo Image URL (Optional)
                    </label>
                    <input
                      type="url"
                      value={logoUrl}
                      onChange={(e) => setLogoUrl(e.target.value)}
                      placeholder="https://your-domain.com/logo.png"
                      className="w-full px-4 py-2.5 bg-[#080c14] border border-casino-border focus:border-amber-500 rounded-xl text-xs font-semibold text-white focus:outline-none"
                    />
                    <p className="text-[11px] text-gray-500">
                      Leave empty to use the default animated glowing gold badge.
                    </p>
                  </div>

                  {/* Theme Accent Picker */}
                  <div className="space-y-2 pt-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Theme Accent Palette
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                      {[
                        { id: "gold", name: "Gold Royale", color: "#f59e0b" },
                        { id: "emerald", name: "Neon Emerald", color: "#10b981" },
                        { id: "ruby", name: "Cyber Ruby", color: "#ef4444" },
                        { id: "purple", name: "Royal Purple", color: "#8b5cf6" },
                        { id: "blue", name: "Ocean Sapphire", color: "#3b82f6" },
                      ].map((t) => (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => setThemeColor(t.id)}
                          className={`flex items-center gap-2 p-2.5 rounded-xl border text-xs font-bold transition-all ${
                            themeColor === t.id
                              ? "bg-white/10 border-white shadow-lg text-white"
                              : "bg-[#080c14] border-casino-border text-gray-400 hover:text-gray-200"
                          }`}
                        >
                          <span
                            className="w-3.5 h-3.5 rounded-full shrink-0 shadow-sm"
                            style={{ backgroundColor: t.color }}
                          />
                          <span className="truncate">{t.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Webhook & Callback Configuration */}
                <div className="p-6 rounded-3xl bg-[#0f1422] border border-casino-border space-y-4 shadow-xl">
                  <div className="flex items-center gap-2">
                    <Link2 className="w-5 h-5 text-emerald-400" />
                    <h3 className="text-sm font-black uppercase tracking-wider text-white">
                      NexxAPI Settlement Webhook & URLs
                    </h3>
                  </div>

                  <div className="space-y-3">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-400">
                        Default Settlement Callback URL (Must be HTTPS)
                      </label>
                      <input
                        type="url"
                        required
                        value={callbackUrl}
                        onChange={(e) => setCallbackUrl(e.target.value)}
                        placeholder="https://your-domain.com/api/callback"
                        className="w-full px-4 py-2.5 bg-[#080c14] border border-casino-border focus:border-emerald-500 rounded-xl text-xs font-mono font-bold text-emerald-300 focus:outline-none"
                      />
                      <p className="text-[11px] text-gray-500">
                        NexxAPI posts round settlements (bets, wins, credit amounts) directly to this HTTPS endpoint.
                      </p>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-400">
                        Player Return URL (Exit Game)
                      </label>
                      <input
                        type="url"
                        required
                        value={returnUrl}
                        onChange={(e) => setReturnUrl(e.target.value)}
                        placeholder="https://your-domain.com/lobby"
                        className="w-full px-4 py-2.5 bg-[#080c14] border border-casino-border focus:border-emerald-500 rounded-xl text-xs font-mono font-bold text-gray-300 focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-400">
                        Platform Currency
                      </label>
                      <input
                        type="text"
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value.toUpperCase())}
                        placeholder="INR"
                        className="w-32 px-4 py-2 bg-[#080c14] border border-casino-border focus:border-amber-500 rounded-xl text-xs font-black text-amber-400 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Live Branding Preview & Save */}
              <div className="lg:col-span-4 space-y-6">
                <div className="p-6 rounded-3xl bg-[#0f1422] border border-casino-border space-y-4 shadow-xl">
                  <h3 className="text-sm font-black uppercase tracking-wider text-amber-300">
                    Live Navbar Preview
                  </h3>
                  <p className="text-xs text-gray-400">
                    See how your updated branding appears to public players.
                  </p>

                  <div className="p-4 rounded-2xl bg-[#080c14] border border-casino-border space-y-3">
                    <div className="flex items-center gap-3">
                      {logoUrl ? (
                        <img
                          src={logoUrl}
                          alt="Custom Logo"
                          className="w-10 h-10 object-contain rounded-lg"
                          onError={(e) => ((e.target as HTMLElement).style.display = "none")}
                        />
                      ) : (
                        <div
                          className="w-10 h-10 rounded-xl p-[2px] shadow-lg flex items-center justify-center"
                          style={{
                            background:
                              themeColor === "emerald"
                                ? "linear-gradient(135deg, #10b981, #34d399)"
                                : themeColor === "ruby"
                                ? "linear-gradient(135deg, #ef4444, #f87171)"
                                : themeColor === "purple"
                                ? "linear-gradient(135deg, #8b5cf6, #c084fc)"
                                : themeColor === "blue"
                                ? "linear-gradient(135deg, #3b82f6, #60a5fa)"
                                : "linear-gradient(135deg, #f59e0b, #fbbf24)",
                          }}
                        >
                          <div className="w-full h-full bg-[#0d121c] rounded-[10px] flex items-center justify-center font-black text-sm">
                            🔥
                          </div>
                        </div>
                      )}

                      <div>
                        <div className="text-sm font-extrabold text-white">{siteName}</div>
                        <p className="text-[10px] text-gray-400 uppercase font-medium">{siteSubtitle}</p>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-casino-border/60 flex items-center justify-between text-[11px]">
                      <span className="text-gray-500">Theme:</span>
                      <span className="font-bold text-white uppercase">{themeColor}</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={savingSettings}
                    className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-black font-black text-sm uppercase tracking-wider shadow-emerald-glow flex items-center justify-center gap-2 transition-all"
                  >
                    {settingsSaved ? (
                      <>
                        <Check className="w-5 h-5 stroke-[3]" />
                        <span>Settings Saved!</span>
                      </>
                    ) : savingSettings ? (
                      <span>Saving to SQLite...</span>
                    ) : (
                      <>
                        <Save className="w-4 h-4" />
                        <span>Save Site Settings</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </form>
        )}

        {/* ================= TAB 5: NEXXAPI DIAGNOSTICS ================= */}
        {activeTab === "diagnostics" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="p-6 rounded-3xl bg-[#0f1422] border border-casino-border space-y-4 shadow-xl">
              <h3 className="text-sm font-black uppercase tracking-wider text-white">
                Integration & API Status
              </h3>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-2 border-b border-casino-border/50">
                  <span className="text-gray-400">NexxAPI Endpoint</span>
                  <span className="font-mono text-gray-200">https://api.nexxapi.tech/api/v1</span>
                </div>
                <div className="flex justify-between py-2 border-b border-casino-border/50">
                  <span className="text-gray-400">Encryption Method</span>
                  <span className="font-mono text-emerald-400 font-bold">AES-256-ECB (PKCS7)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-casino-border/50">
                  <span className="text-gray-400">Detected Public Server IP</span>
                  <span className="font-mono text-amber-400 font-bold">
                    {stats?.whoami?.your_ip || "Checking..."}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-casino-border/50">
                  <span className="text-gray-400">IP Whitelist Mode</span>
                  <span className="text-gray-300">
                    {stats?.whoami?.whitelisted ? "✅ Whitelisted" : "ℹ️ Open / Any Server"}
                  </span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-400">Database Engine</span>
                  <span className="font-mono text-purple-400 font-bold">SQLite (dev.db via Prisma)</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-[#0f1422] border border-casino-border space-y-4 shadow-xl">
              <h3 className="text-sm font-black uppercase tracking-wider text-amber-300">
                GGR Billing & Accounting Rules
              </h3>

              <div className="space-y-3 text-xs text-gray-400 leading-relaxed">
                <p>
                  <strong>Gross Gaming Revenue (GGR)</strong> is calculated on every round settlement as:
                  <br />
                  <code className="text-amber-400 font-bold">GGR = Total Bets − Total Wins</code>
                </p>
                <p>
                  Your prepaid credit on NexxAPI is deducted as players place bets. When players win a round, the net
                  difference is credited back.
                </p>
                <p>
                  When moving to production, submit your production server's IP address to your account manager to lock
                  down your API token.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Create New Player Modal */}
      {createPlayerOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="w-full max-w-md bg-[#0f1422] border border-casino-border rounded-3xl p-6 sm:p-8 shadow-2xl space-y-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <UserPlus className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-black text-white">Create New Player</h3>
                  <p className="text-xs text-gray-400">Add an assigned player account to database</p>
                </div>
              </div>
              <button
                onClick={() => setCreatePlayerOpen(false)}
                className="p-1.5 rounded-lg text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {createPlayerError && (
              <div className="p-3 rounded-xl bg-rose-950/60 border border-rose-500/40 text-xs text-rose-300 font-semibold">
                {createPlayerError}
              </div>
            )}

            <form onSubmit={handleCreatePlayer} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  Player Username / ID
                </label>
                <input
                  type="text"
                  required
                  value={newUsername}
                  onChange={(e) => setNewUsername(e.target.value)}
                  placeholder="e.g. player_vip1"
                  className="w-full px-4 py-2.5 bg-[#080c14] border border-casino-border rounded-xl text-sm font-bold text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  Password
                </label>
                <input
                  type="text"
                  required
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="e.g. pass1234"
                  className="w-full px-4 py-2.5 bg-[#080c14] border border-casino-border rounded-xl text-sm font-semibold text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  Initial Wallet Balance (INR)
                </label>
                <input
                  type="number"
                  min="0"
                  value={newInitialBalance}
                  onChange={(e) => setNewInitialBalance(Number(e.target.value))}
                  className="w-full px-4 py-2.5 bg-[#080c14] border border-casino-border rounded-xl text-sm font-bold text-emerald-400 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  Email (Optional)
                </label>
                <input
                  type="email"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  placeholder="player@example.com"
                  className="w-full px-4 py-2.5 bg-[#080c14] border border-casino-border rounded-xl text-xs font-semibold text-white focus:outline-none"
                />
              </div>

              <div className="flex items-center justify-between pt-1">
                <span className="text-xs font-bold text-gray-300">Grant Admin Privileges?</span>
                <button
                  type="button"
                  onClick={() => setNewIsAdmin(!newIsAdmin)}
                  className={`w-12 h-6 rounded-full transition-colors relative ${
                    newIsAdmin ? "bg-purple-600" : "bg-gray-800"
                  }`}
                >
                  <span
                    className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${
                      newIsAdmin ? "right-1" : "left-1"
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center gap-3 pt-3">
                <button
                  type="submit"
                  disabled={creatingPlayer}
                  className="flex-1 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-black font-black text-xs uppercase tracking-wider shadow-emerald-glow transition-all"
                >
                  {creatingPlayer ? "Creating..." : "Create Player"}
                </button>
                <button
                  type="button"
                  onClick={() => setCreatePlayerOpen(false)}
                  className="px-4 py-3 rounded-xl bg-casino-card border border-casino-border text-gray-400 hover:text-white text-xs font-bold"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Adjust Player Balance Modal */}
      {selectedPlayer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="w-full max-w-md bg-[#0f1422] border border-casino-border rounded-3xl p-6 shadow-2xl space-y-5">
            <h3 className="text-base font-black text-white">
              Adjust Balance for <span className="text-amber-400">{selectedPlayer.username}</span>
            </h3>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setAdjustAction("credit")}
                className={`flex-1 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
                  adjustAction === "credit"
                    ? "bg-emerald-500 text-black shadow-emerald-glow"
                    : "bg-casino-card border border-casino-border text-gray-400"
                }`}
              >
                + Credit (Deposit)
              </button>
              <button
                onClick={() => setAdjustAction("debit")}
                className={`flex-1 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
                  adjustAction === "debit"
                    ? "bg-rose-500 text-white shadow-lg"
                    : "bg-casino-card border border-casino-border text-gray-400"
                }`}
              >
                - Debit (Deduct)
              </button>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Amount (INR)</label>
              <input
                type="number"
                value={adjustAmount}
                onChange={(e) => setAdjustAmount(Number(e.target.value))}
                className="w-full px-4 py-2.5 bg-[#080c14] border border-casino-border rounded-xl text-lg font-black text-white focus:outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Note / Reason</label>
              <input
                type="text"
                value={adjustNote}
                onChange={(e) => setAdjustNote(e.target.value)}
                placeholder="e.g. Manual UPI deposit verification"
                className="w-full px-4 py-2.5 bg-[#080c14] border border-casino-border rounded-xl text-xs font-semibold text-white focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={handleAdjustBalance}
                disabled={adjustLoading}
                className="flex-1 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-black text-xs uppercase tracking-wider shadow-gold-glow"
              >
                {adjustLoading ? "Updating..." : "Apply Adjustment"}
              </button>
              <button
                onClick={() => setSelectedPlayer(null)}
                className="px-4 py-3 rounded-xl bg-casino-card border border-casino-border text-gray-400 hover:text-white text-xs font-bold"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
