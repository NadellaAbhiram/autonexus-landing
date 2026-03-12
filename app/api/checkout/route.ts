import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const plan = req.nextUrl.searchParams.get('plan');

    const planMap: Record<string, string> = {
      starter: process.env.NEXT_PUBLIC_RAZORPAY_STARTER_PLAN_ID || '',
      growth: process.env.NEXT_PUBLIC_RAZORPAY_GROWTH_PLAN_ID || '',
      scale: process.env.NEXT_PUBLIC_RAZORPAY_SCALE_PLAN_ID || '',
    };

    const planId = planMap[plan || 'starter'];

    if (!planId) {
      return NextResponse.json({ error: 'Invalid plan' }, { status: 400 });
    }

    // Create a Razorpay subscription server-side
    // Trim to remove any accidental newlines/spaces from env vars
    const keyId = (process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || '').trim();
    const keySecret = (process.env.RAZORPAY_KEY_SECRET || '').trim();
    const planIdTrimmed = planId.trim();
    const credentials = Buffer.from(`${keyId}:${keySecret}`).toString('base64');

    const subscriptionResponse = await fetch('https://api.razorpay.com/v1/subscriptions', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${credentials}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        plan_id: planIdTrimmed,
        total_count: 12,
        quantity: 1,
      }),
    });

    const subscription = await subscriptionResponse.json();

    if (!subscriptionResponse.ok || !subscription.id) {
      console.error('Razorpay subscription error:', subscription);
      return NextResponse.json({ error: 'Failed to create subscription' }, { status: 500 });
    }

    return NextResponse.json({
      subscriptionId: subscription.id,
      keyId: keyId,
    });
  } catch (error) {
    console.error('Checkout error:', error);
    return NextResponse.json(
      { error: 'Checkout failed' },
      { status: 500 }
    );
  }
}
