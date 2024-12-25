import Stripe from 'stripe';
import { NextRequest, NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2024-11-20.acacia'
});

export async function POST(req: NextRequest) {
  try {
    const { priceId, customerEmail } = await req.json();

    if (!priceId) {
      return NextResponse.json({ error: "Price ID is required" }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded",
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      customer_email: customerEmail,
      mode: "payment",
      payment_method_types: ["card"],
      redirect_on_completion: "never",
    });

    return NextResponse.json({ clientSecret: session.client_secret }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: err.statusCode || 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const session_id = req.nextUrl.searchParams.get("session_id");

    if (!session_id) {
      return NextResponse.json({ error: "Session ID is required" }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.retrieve(session_id);

    return NextResponse.json(
      {
        status: session.status,
        customer_email: session.customer_details?.email,
      },
      { status: 200 }
    );
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: err.statusCode || 500 });
  }
}
