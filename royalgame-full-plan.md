# 👑 ROYAL GAMES & GGR ECOSYSTEM - MASTER ARCHITECTURE & FULL PLAN
**File Name**: `royalgame-full-plan.md`  
**Purpose**: Master blueprint and contextual reference for the 3 distinct multi-tier iGaming projects.

---

## 🏛️ 3-Tier Ecosystem Overview

```
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                1. [royalgame] - GAME STUDIO (RGS)                                │
│  - Remote Gaming Server (RGS) hosting all native HTML5 games, animations, sounds, & physics.     │
│  - Provably Fair RNG Math Engine (Coin Flip, Andar Bahar, Chicken Road Cross, Aviator, Mines).    │
│  - Fullscreen Play Session endpoints: /play/[sessionId]                                          │
└───────────────────────────────────────────────┬──────────────────────────────────────────────────┘
                                                │ (Studio Game Engine API)
                                                ▼
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                            2. [royalggr] - B2B GGR PROVIDER & AGGREGATOR                         │
│  - Operator Developer Portal (Login / Register / 2FA).                                           │
│  - API Key & Secret Generator (API_TOKEN & SECRET_KEY) + IP Whitelist Firewall.                  │
│  - Prepaid GGR Wallet & Recharge (UPI / USDT Crypto / Ledger).                                   │
│  - GGR Billing Engine (Auto-deducts 8%-12% revenue share on player bets).                       │
│  - B2B REST API Gateway (/api/v1/launch, /api/v1/games, /api/v1/ggr-balance, /api/v1/whoami).   │
│  - Interactive API Documentation (cURL, Node.js, PHP, Python SDKs).                              │
│  - Real-time Webhook Dispatcher & Callback Queue with Retry Inspector.                           │
│  - Multi-Provider Aggregator Relay (aggregates Royal Studio + Pragmatic + PGSoft + Spribe).      │
└───────────────────────────────────────────────┬──────────────────────────────────────────────────┘
                                                │ (B2B /api/v1 REST API + Webhooks)
                                                ▼
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                               3. [ggcasino] - B2C CLIENT CASINO WEBSITE                          │
│  - Player-facing Casino Lobby, Registration, Login, and Player Wallet (UPI / Crypto Deposits).  │
│  - Game Catalog with Category Filters (Slots, Live Casino, Crash, Originals).                    │
│  - Admin Backoffice (Provider Visibility Toggles, Settlement Ledger, User Management).          │
│  - Connects to [royalggr] API using NEXX_API_URL and NEXX_TOKEN in .env.local.                    │
│  - Receives balance updates via /api/callback webhook.                                          │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 📁 1. `royalgame` — Gaming Studio (Remote Gaming Server / RGS)

### Role & Responsibilities:
Hosts all interactive games, physics engines, card decks, multiplier curves, sound synthesizers, and Provably Fair RNG mathematics.

### Key Components:
- **Game Suite**:
  1. 🪙 **Coin Flip Royale** (`royal_coinflip`): 3D coin physics, streak multipliers (1.96x – 100x).
  2. 🎴 **Andar Bahar Live** (`royal_andarbahar`): Luxury Indian felt table, Joker opening card, sequential dealing (1.90x / 2.00x).
  3. 🐔 **Chicken Road Cross** (`royal_chickencross`): Multi-lane traffic stepper crash game with cashout (up to 250x).
  4. ✈️ **Aviator Royale Crash** (`royal_aviator`): Ascending curve multiplier crash game (up to 1000x).
  5. 💣 **Mines Gold** (`royal_mines`): 5x5 grid cashout game.
  6. 🎡 **European Roulette** (`royal_roulette`): 37-pocket spinning wheel.
- **Player Session Screen**: `/play/[sessionId]` (Receives session token, renders responsive mobile/desktop iframe view, live balance counter, and exit button).
- **Studio Round API**: Resolves game rounds and notifies `royalggr` engine.

---

## 📁 2. `royalggr` — B2B GGR Provider & Developer Platform

### Role & Responsibilities:
The central business and distribution platform where external casino operators, developers, and white-label clients sign up, recharge prepaid GGR credits, generate API tokens, read API documentation, and integrate your games into their platforms.

### Key Components:
1. **Operator Developer Portal**:
   - `/portal/login`: Operator sign in and registration with welcome demo balance.
   - `/portal/dashboard`: Live KPIs (Prepaid GGR Balance, GGR Rate, Total Turnover, Webhook Deliveries).
   - `/portal/apikeys`: Generate live and test `API_TOKEN`s, manage secret keys, and configure IP whitelist firewall.
   - `/portal/wallet`: Recharge prepaid GGR wallet (UPI / USDT Crypto) with transaction ledger history.
   - `/portal/webhooks`: Real-time HTTP callback delivery log inspector with payload viewer and 1-click retry.
   - `/portal/docs`: Interactive API documentation with copy-paste code snippets in cURL, Node.js, PHP, and Python.

2. **B2B REST API Gateway (`/api/v1/*`)**:
   - `POST /api/v1/launch`: Generates authenticated game session launch URL.
   - `GET /api/v1/games`: Returns active games catalog.
   - `GET /api/v1/ggr-balance`: Returns operator's remaining prepaid credit.
   - `GET /api/v1/whoami`: Verifies operator IP and whitelist status.

3. **GGR Settlement & Webhook Engine**:
   - Deducts operator GGR fee (e.g. 10% hold revenue share) upon round completion.
   - Dispatches idempotent HTTP POST callbacks to client casino `callbackUrl` with `serial_number`.

4. **Multi-Provider Aggregation Relay**:
   - Combines native Royal Games with upstream master aggregators (*NexxAPI, Slotegrator, SoftGamings, SoftSwiss*) to supply 5,000+ top brand games (Pragmatic, PGSoft, Spribe, JILI) through your single unified API.

---

## 📁 3. `ggcasino` — B2C Casino Client Website

### Role & Responsibilities:
The player-facing casino platform where end-users register, deposit funds, browse the lobby, and play games.

### Key Components:
- **Player Authentication & Wallet**: Login, Register, Deposit (UPI / Crypto), Balance Management.
- **Casino Lobby**: Featured games, Category filters (Crash, Slots, Live Casino, Royal Originals), Provider filters.
- **Game Launcher Modal**: Seamlessly embeds game session URLs received from `royalggr`.
- **Settlement Webhook (`/api/callback`)**: Authoritatively credits player winnings and debits bets based on cryptographically signed callback serial numbers.
- **Admin Control Backoffice (`/admin`)**:
  - Provider visibility manager (choose which providers appear in the lobby).
  - Settlement ledger & transaction audit trail.
  - User and wallet management.

### Client Configuration (`.env.local`):
```env
NEXX_API_URL=http://localhost:3001/api/v1    # (Points to royalggr B2B engine)
NEXX_TOKEN=roy_live_79b49f0e7f96cb36a53ab... # (Your royalggr operator API token)
```

---

## 🔗 Project Linking & Workflow Summary

```
Player on [ggcasino] clicks "Play Coin Flip"
       │
       ▼
[ggcasino] calls [royalggr]  -->  POST /api/v1/launch
       │
       ▼
[royalggr] validates token, checks GGR credit, and returns [royalgame] play URL:
https://studio.royalgame.com/play/sess_12345?token=jwt...
       │
       ▼
Player plays game inside [ggcasino] iframe
       │
       ▼
[royalgame] finishes round --> Notifies [royalggr]
       │
       ▼
[royalggr] deducts GGR revenue share (10%) & sends Webhook POST to [ggcasino] /api/callback
       │
       ▼
[ggcasino] updates player database balance in real-time!
```

---
*Created for Royal Games & GGR Ecosystem Master Architecture.*
