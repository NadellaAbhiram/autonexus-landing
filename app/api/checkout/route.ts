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

    // Return Razorpay checkout script
    return NextResponse.json({
      planId,
      keyId: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
    });
  } catch (error) {
    console.error('Checkout error:', error);
    return NextResponse.json(
      { error: 'Checkout failed' },
      { status: 500 }
    );
  }
}
