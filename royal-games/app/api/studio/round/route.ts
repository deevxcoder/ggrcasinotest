import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { verifySessionToken } from "@/lib/auth";
import { dispatchWebhookCallback } from "@/lib/webhook";
import crypto from "crypto";

export const dynamic = "force-dynamic";

// Standard Deck Cards for Andar Bahar
const SUITS = ["♠", "♥", "♦", "♣"];
const RANKS = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

function generateShuffledDeck() {
  const deck: any[] = [];
  for (const suit of SUITS) {
    const color = suit === "♥" || suit === "♦" ? "red" : "black";
    for (const rank of RANKS) {
      deck.push({ rank, suit, color, display: `${rank}${suit}` });
    }
  }
  for (let i = deck.length - 1; i > 0; i--) {
    const j = crypto.randomInt(0, i + 1);
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { sessionId, sessionToken, gameUid, action } = body;

    if (!sessionId || !sessionToken) {
      return NextResponse.json({ error: "Missing session authentication" }, { status: 401 });
    }

    const sessionPayload = verifySessionToken(sessionToken);
    if (!sessionPayload || sessionPayload.sessionId !== sessionId) {
      return NextResponse.json({ error: "Invalid or expired session token" }, { status: 401 });
    }

    // Fetch live session from DB
    const session = await db.gameSession.findUnique({
      where: { sessionId },
      include: { operator: true },
    });

    if (!session || session.status !== "ACTIVE") {
      return NextResponse.json({ error: "Session is not active" }, { status: 403 });
    }

    const operator = session.operator;

    // ===============================================
    // 1. COIN FLIP ROYALE
    // ===============================================
    if (gameUid === "royal_coinflip") {
      const { betAmount = 50, choice = "heads" } = body;
      const numBet = Number(betAmount);

      if (numBet <= 0 || isNaN(numBet)) {
        return NextResponse.json({ error: "Invalid bet amount" }, { status: 400 });
      }

      if (session.balance < numBet) {
        return NextResponse.json({ error: "Insufficient player balance" }, { status: 400 });
      }

      const rng = crypto.randomInt(0, 100);
      const coinResult = rng < 50 ? "heads" : "tails";
      const won = coinResult === choice;
      const multiplier = 1.96;
      const winAmount = won ? Number((numBet * multiplier).toFixed(2)) : 0;
      const newPlayerBalance = Number((session.balance - numBet + winAmount).toFixed(2));

      // Calculate Operator GGR fee deduction (e.g. 10% fee on net turnover/hold)
      const houseMargin = numBet - winAmount;
      const ggrFee = houseMargin > 0 ? Number(((houseMargin * operator.ggrRate) / 100).toFixed(2)) : 0;

      const serialNumber = `SN-ROYAL-CF-${Date.now()}-${crypto.randomBytes(3).toString("hex")}`;
      const roundId = `R-CF-${Date.now()}`;

      // Update session balance in DB
      await db.gameSession.update({
        where: { id: session.id },
        data: { balance: newPlayerBalance },
      });

      // Deduct operator prepaid GGR credit
      if (ggrFee > 0) {
        await db.operator.update({
          where: { id: operator.id },
          data: { balance: Math.max(0, operator.balance - ggrFee) },
        });
      }

      // Record Game Round
      await db.gameRound.create({
        data: {
          serialNumber,
          sessionId: session.id,
          operatorId: operator.id,
          userId: session.userId,
          gameUid: "royal_coinflip",
          gameName: "Coin Flip Royale",
          gameRound: roundId,
          betAmount: numBet,
          winAmount,
          creditAmount: newPlayerBalance,
          ggrFeeDeducted: ggrFee,
          rawPayload: JSON.stringify({ choice, coinResult, won }),
        },
      });

      // Dispatch Webhook Callback to Client Casino
      dispatchWebhookCallback(operator.id, session.id, session.callbackUrl, {
        game_id: 88801,
        game_uid: "royal_coinflip",
        game_round: roundId,
        member_account: session.userId,
        bet_amount: numBet,
        win_amount: winAmount,
        credit_amount: newPlayerBalance,
        serial_number: serialNumber,
        game_name: "Coin Flip Royale",
        timestamp: Math.floor(Date.now() / 1000),
      }).catch((e) => console.error("Webhook dispatch async err:", e));

      return NextResponse.json({
        success: true,
        coinResult,
        won,
        winAmount,
        newBalance: newPlayerBalance,
        serialNumber,
      });
    }

    // ===============================================
    // 2. ANDAR BAHAR LIVE
    // ===============================================
    if (gameUid === "royal_andarbahar") {
      const { betAmount = 50, betSide = "andar" } = body;
      const numBet = Number(betAmount);

      if (numBet <= 0 || isNaN(numBet)) {
        return NextResponse.json({ error: "Invalid bet amount" }, { status: 400 });
      }

      if (session.balance < numBet) {
        return NextResponse.json({ error: "Insufficient player balance" }, { status: 400 });
      }

      const deck = generateShuffledDeck();
      const jokerCard = deck.pop()!;
      const dealtAndar: any[] = [];
      const dealtBahar: any[] = [];
      let winningSide: "andar" | "bahar" = "andar";
      let matchedCard: any = null;

      let currentTurn: "andar" | "bahar" = "andar";
      while (deck.length > 0) {
        const card = deck.pop()!;
        if (currentTurn === "andar") {
          dealtAndar.push(card);
          if (card.rank === jokerCard.rank) {
            winningSide = "andar";
            matchedCard = card;
            break;
          }
          currentTurn = "bahar";
        } else {
          dealtBahar.push(card);
          if (card.rank === jokerCard.rank) {
            winningSide = "bahar";
            matchedCard = card;
            break;
          }
          currentTurn = "andar";
        }
      }

      const won = betSide === winningSide;
      const multiplier = winningSide === "andar" ? 1.90 : 2.00;
      const winAmount = won ? Number((numBet * multiplier).toFixed(2)) : 0;
      const newPlayerBalance = Number((session.balance - numBet + winAmount).toFixed(2));

      const houseMargin = numBet - winAmount;
      const ggrFee = houseMargin > 0 ? Number(((houseMargin * operator.ggrRate) / 100).toFixed(2)) : 0;
      const serialNumber = `SN-ROYAL-AB-${Date.now()}-${crypto.randomBytes(3).toString("hex")}`;
      const roundId = `R-AB-${Date.now()}`;

      await db.gameSession.update({
        where: { id: session.id },
        data: { balance: newPlayerBalance },
      });

      if (ggrFee > 0) {
        await db.operator.update({
          where: { id: operator.id },
          data: { balance: Math.max(0, operator.balance - ggrFee) },
        });
      }

      await db.gameRound.create({
        data: {
          serialNumber,
          sessionId: session.id,
          operatorId: operator.id,
          userId: session.userId,
          gameUid: "royal_andarbahar",
          gameName: "Andar Bahar Live",
          gameRound: roundId,
          betAmount: numBet,
          winAmount,
          creditAmount: newPlayerBalance,
          ggrFeeDeducted: ggrFee,
          rawPayload: JSON.stringify({ joker: jokerCard.display, winningSide, betSide, won }),
        },
      });

      dispatchWebhookCallback(operator.id, session.id, session.callbackUrl, {
        game_id: 88802,
        game_uid: "royal_andarbahar",
        game_round: roundId,
        member_account: session.userId,
        bet_amount: numBet,
        win_amount: winAmount,
        credit_amount: newPlayerBalance,
        serial_number: serialNumber,
        game_name: "Andar Bahar Live",
        timestamp: Math.floor(Date.now() / 1000),
      }).catch((e) => console.error("Webhook dispatch async err:", e));

      return NextResponse.json({
        success: true,
        jokerCard,
        dealtAndar,
        dealtBahar,
        winningSide,
        matchedCard,
        won,
        winAmount,
        newBalance: newPlayerBalance,
        serialNumber,
      });
    }

    // ===============================================
    // 3. CHICKEN ROAD CROSS & CASHOUT
    // ===============================================
    if (gameUid === "royal_chickencross") {
      const CHICKEN_MULTIPLIERS = [1.25, 1.60, 2.20, 3.40, 5.80, 11.0, 25.0, 60.0];

      if (action === "start") {
        const { betAmount = 20 } = body;
        const numBet = Number(betAmount);

        if (numBet <= 0 || session.balance < numBet) {
          return NextResponse.json({ error: "Insufficient balance" }, { status: 400 });
        }

        const newPlayerBalance = Number((session.balance - numBet).toFixed(2));
        await db.gameSession.update({
          where: { id: session.id },
          data: { balance: newPlayerBalance },
        });

        return NextResponse.json({
          success: true,
          currentLane: 0,
          currentMultiplier: 1.0,
          multipliers: CHICKEN_MULTIPLIERS,
          newBalance: newPlayerBalance,
        });
      }

      if (action === "step") {
        const { currentLane = 0, betAmount = 20 } = body;
        const numBet = Number(betAmount);
        const crashed = Math.random() < 0.18; // 18% crash probability per lane

        if (crashed) {
          const serialNumber = `SN-ROYAL-CRC-${Date.now()}-${crypto.randomBytes(3).toString("hex")}`;
          const roundId = `R-CRC-${Date.now()}`;

          await db.gameRound.create({
            data: {
              serialNumber,
              sessionId: session.id,
              operatorId: operator.id,
              userId: session.userId,
              gameUid: "royal_chickencross",
              gameName: "Chicken Road Cross",
              gameRound: roundId,
              betAmount: numBet,
              winAmount: 0,
              creditAmount: session.balance,
              ggrFeeDeducted: Number(((numBet * operator.ggrRate) / 100).toFixed(2)),
            },
          });

          dispatchWebhookCallback(operator.id, session.id, session.callbackUrl, {
            game_id: 88803,
            game_uid: "royal_chickencross",
            game_round: roundId,
            member_account: session.userId,
            bet_amount: numBet,
            win_amount: 0,
            credit_amount: session.balance,
            serial_number: serialNumber,
            game_name: "Chicken Road Cross",
            timestamp: Math.floor(Date.now() / 1000),
          }).catch((e) => console.error(e));

          return NextResponse.json({ success: true, crashed: true, currentLane: currentLane + 1 });
        }

        const nextLane = currentLane + 1;
        const nextMultiplier = CHICKEN_MULTIPLIERS[Math.min(nextLane - 1, CHICKEN_MULTIPLIERS.length - 1)];

        return NextResponse.json({
          success: true,
          crashed: false,
          currentLane: nextLane,
          currentMultiplier: nextMultiplier,
        });
      }

      if (action === "cashout") {
        const { currentMultiplier = 1.0, betAmount = 20, currentLane = 1 } = body;
        const numBet = Number(betAmount);
        const mult = Number(currentMultiplier);
        const winAmount = Number((numBet * mult).toFixed(2));
        const newPlayerBalance = Number((session.balance + winAmount).toFixed(2));

        const serialNumber = `SN-ROYAL-CRC-${Date.now()}-${crypto.randomBytes(3).toString("hex")}`;
        const roundId = `R-CRC-${Date.now()}`;

        await db.gameSession.update({
          where: { id: session.id },
          data: { balance: newPlayerBalance },
        });

        await db.gameRound.create({
          data: {
            serialNumber,
            sessionId: session.id,
            operatorId: operator.id,
            userId: session.userId,
            gameUid: "royal_chickencross",
            gameName: "Chicken Road Cross",
            gameRound: roundId,
            betAmount: numBet,
            winAmount,
            creditAmount: newPlayerBalance,
          },
        });

        dispatchWebhookCallback(operator.id, session.id, session.callbackUrl, {
          game_id: 88803,
          game_uid: "royal_chickencross",
          game_round: roundId,
          member_account: session.userId,
          bet_amount: numBet,
          win_amount: winAmount,
          credit_amount: newPlayerBalance,
          serial_number: serialNumber,
          game_name: "Chicken Road Cross",
          timestamp: Math.floor(Date.now() / 1000),
        }).catch((e) => console.error(e));

        return NextResponse.json({
          success: true,
          cashedOut: true,
          winAmount,
          newBalance: newPlayerBalance,
        });
      }
    }

    return NextResponse.json({ error: "Unknown action" }, { status: 400 });
  } catch (error: any) {
    console.error("Studio round error:", error);
    return NextResponse.json({ error: error.message || "Failed to process round" }, { status: 500 });
  }
}
