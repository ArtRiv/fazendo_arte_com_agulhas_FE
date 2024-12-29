import Stripe from 'stripe';
import { NextRequest, NextResponse } from "next/server";
import { getStripeCheckoutShippingOptionsFormat } from '@/utils/get-stripe-shipping-options-format';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2024-11-20.acacia'
});

export async function POST(req: NextRequest) {
  try {
    const { price_id, customer_email, shipping_options } = await req.json();

    if (!price_id) {
      return NextResponse.json({ error: "Price ID is required" }, { status: 400 });
    }

    if (!shipping_options || shipping_options.length === 0) {
      return NextResponse.json({ error: "Shipping options are required" }, { status: 400 });
    }

    const formattedShippingOptions = getStripeCheckoutShippingOptionsFormat(shipping_options);

    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded",
      line_items: [
        {
          price: price_id,
          quantity: 1,
        },
      ],
      shipping_options: formattedShippingOptions,
      customer_email: customer_email,
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
