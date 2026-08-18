# 👑 ROYAL GGR B2B Game Provider & Developer Platform
## Master Architecture & Technical Requirements Specification

---

## 🎯 Executive Summary & Architectural Vision

As your Senior Software Architect, I can confirm: **Separating the B2B Provider Engine from the B2C Casino Client is 100% the industry gold standard** (the exact architecture used by *Pragmatic Play, Evolution Gaming, Spribe, and NexxAPI*).

### Why This Separation Is the Winning Move:
1. **Multi-Tenant Scalability**: One single Royal GGR Provider engine can serve **hundreds of external casino clients** simultaneously.
2. **Zero Game Code Leakage**: Client casino sites only get an `iframe` game URL and webhook callbacks; your core RNG, game mechanics, and profit margins remain 100% secure on your private server.
3. **Prepaid GGR Revenue Stream**: You collect 8% to 15% revenue share from all client casinos on autopilot as their players bet.
4. **Independent Scaling**: High-intensity game WebSocket calculations run on the provider server without slowing down client lobby websites.

---

## 🏛️ System Architecture

```
                                    ┌────────────────────────────────────────────────────────┐
                                    │             ROYAL GGR B2B PROVIDER ENGINE             │
                                    │                                                        │
┌─────────────────────────┐         │  ┌────────────────────┐      ┌──────────────────────┐  │
│  External Client Casino │         │  │ Developer Portal   │      │  Games Core Engine   │  │
│   (Our Casino / Others) │         │  │ - API Key Manager  │      │  - Coin Flip Royale  │  │
│                         │         │  │ - Prepaid Wallet   │      │  - Andar Bahar Live  │  │
│  - Player Lobby         │<───────>│  │ - Webhook Logger   │      │  - Chicken Road Cross│  │
│  - Player Balance DB    │         │  │ - Interactive Docs │      │  - Aviator Crash     │  │
│  - Callback Route       │         │  └────────────────────┘      └──────────────────────┘  │
└─────────────────────────┘         │                                                        │
                                    │  ┌────────────────────┐      ┌──────────────────────┐  │
                                    │  │ B2B REST API v1    │      │ Provably Fair RNG    │  │
                                    │  │ - /launch          │      │ - SHA-256 Hashing    │  │
                                    │  │ - /games           │      │ - Nonce & Seeds      │  │
                                    │  │ - /ggr-balance     │      │ - House Edge Config  │  │
                                    │  └────────────────────┘      └──────────────────────┘  │
                                    └────────────────────────────────────────────────────────┘
```

---

## 📦 Project Modules & Requirements

### Module 1: Operator Backoffice & Developer Portal
- **Operator Authentication**: Email/Password login, 2FA, Business details.
- **API Credential Generator**:
  - `API_TOKEN`: Public client identifier (e.g. `roy_live_79b49f0e7f...`).
  - `SECRET_KEY`: Private 256-bit key for HMAC-SHA256 signature verification & payload encryption.
- **IP Whitelist Firewall**: Operators must register their server IP addresses to prevent unauthorized API requests.
- **Prepaid GGR Wallet & Recharge System**:
  - Support automatic/manual deposits (USDT TRC-20, BTC, UPI Gateway, Bank Transfer).
  - Real-time balance deductions as players place bets.
  - Automatic low-balance alerts (< ₹500) and auto-suspension if credit reaches zero.
- **Webhook Delivery Logs & Diagnostic Monitor**:
  - Live inspector for every HTTP callback sent to client servers.
  - Response time, HTTP status code (200, 500, timeout), payload viewer, and **1-click manual retry**.

---

### Module 2: B2B Public API Endpoints (v1)

#### 1. `POST /api/v1/launch`
Generates a secure, temporary game session launch URL.
- **Request Payload**:
```json
{
  "token": "YOUR_API_TOKEN",
  "user_id": "player_12345",
  "balance": 1500.00,
  "game_uid": "royal_coinflip",
  "currency_code": "INR",
  "language": "en",
  "return_url": "https://clientcasino.com/lobby",
  "callback_url": "https://clientcasino.com/api/callback"
}
```
- **Response**:
```json
{
  "code": 0,
  "msg": "Success",
  "data": {
    "url": "https://provider.royalgames.com/play/session_9a8f7b6c5d?token=jwt..."
  }
}
```

#### 2. `GET /api/v1/games`
Returns the catalog of active games with thumbnails, provider info, and categories.

#### 3. `GET /api/v1/ggr-balance`
Returns the operator's current prepaid balance.

#### 4. `GET /api/v1/whoami`
Returns operator server IP detection and whitelist status.

---

### Module 3: Webhook Settlement Protocol
When a player finishes a round on the provider engine, the provider immediately sends an HTTP POST to the client's `callback_url`:

```json
{
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
}
```
- **Idempotency Guarantee**: If the client server is slow or fails, the provider retries up to 5 times with exponential backoff (`serial_number` ensures zero duplicate payouts).

---

### Module 4: Native Games Suite

| Game | UID | Type | Max Multiplier | House Edge |
| :--- | :--- | :--- | :--- | :--- |
| **Coin Flip Royale** | `royal_coinflip` | Instant Win | 1.96x – 100x | 2.0% |
| **Andar Bahar Live** | `royal_andarbahar` | Indian Table | 2.00x | 2.5% |
| **Chicken Road Cross**| `royal_chickencross`| Crash Stepper | 250.00x | 3.0% |
| **Aviator Crash** | `royal_aviator` | Crash Multiplier| 1000.00x | 3.0% |
| **Roulette Royale** | `royal_roulette` | European Table | 36.00x | 2.7% |
| **Mines Gold** | `royal_mines` | Grid Stepper | 1000.00x | 2.0% |

---

## 🛠️ Recommended Tech Stack for Provider Project

- **Framework**: Next.js 14+ (App Router) or Fastify / NestJS Node.js Backend.
- **Database**: PostgreSQL (Supabase / AWS RDS) with Prisma ORM.
- **In-Memory Cache & Webhook Queue**: Redis + BullMQ (handles 10,000+ callbacks/sec).
- **Security**: AES-256-ECB / HMAC-SHA256, Cloudflare DDoS Protection & Rate Limiter.
- **Hosting**: Hostinger VPS / AWS EC2 / DigitalOcean Droplet with static Public IP.

---

## 🌐 Top Master Game Aggregators & Upstream Suppliers

To source multiple providers into your B2B platform, here are the top industry aggregators to connect with or benchmark against:

| Aggregator | Website | Focus Markets & Strengths | Top Providers Included |
| :--- | :--- | :--- | :--- |
| **NexxAPI** | `api.nexxapi.tech` | Fast Asian/Indian market integration, lightweight REST API, instant prepaid GGR | Spribe (Aviator), PGSoft, JILI, Smartsoft, Endorphina, RubyPlay, Hacksaw |
| **Slotegrator (APIgrator)** | `slotegrator.pro` | Global enterprise leader with 15,000+ games & 100+ studios in a single contract | Evolution, Pragmatic Play, NetEnt, Microgaming, Amatic, Betsoft, Habanero |
| **SoftGamings** | `softgamings.com` | High-performance unified aggregator with 10,000+ games, live dealers & slots | Evolution Gaming, Play'n GO, Quickspin, Yggdrasil, NetEnt, Pragmatic |
| **SoftSwiss** | `softswiss.com` | Global crypto & fiat gaming engine processing €10B+ monthly turnover | 200+ game studios, BGaming, Pragmatic, Evolution, Spinomenal |
| **BetConstruct** | `betconstruct.com` | All-in-one gaming suite with live casino, slots, sportsbook & virtual games | CreedRoomz, Pragmatic, Fashion TV, Evolution, Ezugi |
| **EvenBet Gaming** | `evenbetgaming.com` | Asian & Indian card game specialist (Teen Patti, Andar Bahar, Poker) | In-house card tables & aggregated studio network |
| **EveryMatrix (CasinoEngine)** | `everymatrix.com` | Tier-1 regulated enterprise engine with 13,000+ certified casino games | All major certified global studios |

---

## 🔄 Client Integration Phase (Connecting to our Casino)

Once the standalone provider is deployed:
1. In our client casino site (`ggrcasino`), we set:
   ```env
   NEXX_API_URL=https://api.your-provider-domain.com/api/v1
   NEXX_TOKEN=your_generated_operator_token
   ```
2. Our client platform immediately streams all provider games with instant balance crediting and zero external vendor dependencies!

