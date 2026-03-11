export function getRazorpayCheckoutOptions(plan: string) {
  const plans: Record<string, { amount: number; planId: string }> = {
    starter: {
      amount: 120000, // ₹1,200 in paise
      planId: process.env.NEXT_PUBLIC_RAZORPAY_STARTER_PLAN_ID || '',
    },
    growth: {
      amount: 350000, // ₹3,500 in paise
      planId: process.env.NEXT_PUBLIC_RAZORPAY_GROWTH_PLAN_ID || '',
    },
    scale: {
      amount: 600000, // ₹6,000 in paise
      planId: process.env.NEXT_PUBLIC_RAZORPAY_SCALE_PLAN_ID || '',
    },
  };
  return plans[plan] || plans.starter;
}
