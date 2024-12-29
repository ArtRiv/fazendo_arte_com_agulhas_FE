import { NextRequest, NextResponse } from 'next/server'
import dotenv from 'dotenv';

dotenv.config();

const FROM_CEP = process.env.FROM_CEP;
const SUPERFRETE_API_KEY = process.env.SUPERFRETE_API_KEY;

if (!FROM_CEP || !SUPERFRETE_API_KEY) {
  throw new Error('Environment variables FROM_CEP or SUPERFRETE_API_KEY are not defined');
}

export async function POST (req: NextRequest) {
  try {
    const { user_CEP } = await req.json()

    if (!user_CEP) {
      return NextResponse.json(
        { error: 'A CEP must be given!' },
        { status: 400 }
      )
    }

    const options = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${SUPERFRETE_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: {
          postal_code: FROM_CEP
        },
        to: {
          postal_code: user_CEP
        },
        services: '1,2',
        options: {
          own_hand: false,
          receipt: false,
          insurance_value: 0,
          use_insurance_value: false
        },
        package: {
          height: 10,
          width: 24,
          length: 15,
          weight: 0.2
        }
      })
    }

    const res = await fetch('https://sandbox.superfrete.com/api/v0/calculator', options);

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message || 'Error fetching data from Superfrete API');
    }
    
    const data = await res.json();
    return NextResponse.json(data, { status: 200 });

  } catch (err: any) {
    return NextResponse.json(
      { error: err.message },
      { status: err.statusCode || 500 }
    )
  }
}
