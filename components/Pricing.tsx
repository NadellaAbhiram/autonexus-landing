'use client';

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "₹1,200",
      period: "/month",
      description: "Perfect for SMB stores",
      features: [
        "50 product descriptions",
        "Basic competitor monitoring",
        "3 marketing content pieces",
        "Email support",
        "Unlimited revisions"
      ],
      buttonText: "Get Started",
      buttonColor: "bg-gray-200 text-gray-900 hover:bg-gray-300"
    },
    {
      name: "Growth",
      price: "₹3,500",
      period: "/month",
      description: "For growing stores",
      features: [
        "200+ product descriptions",
        "Weekly competitor reports",
        "50+ marketing content pieces",
        "Supplier research included",
        "Priority support",
        "Unlimited revisions"
      ],
      buttonText: "Get Started",
      buttonColor: "bg-purple-600 text-white hover:bg-purple-700",
      highlight: true
    },
    {
      name: "Scale",
      price: "₹6,000",
      period: "/month",
      description: "For established businesses",
      features: [
        "Unlimited descriptions",
        "Advanced competitor intelligence",
        "Unlimited marketing content",
        "Advanced supplier research",
        "24/7 priority support",
        "Dedicated account manager",
        "Custom workflows"
      ],
      buttonText: "Get Started",
      buttonColor: "bg-gray-200 text-gray-900 hover:bg-gray-300"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Simple Pricing</h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          No setup fees. No contracts. Cancel anytime. 30-day money-back guarantee.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-lg border-2 ${
                plan.highlight
                  ? 'border-purple-600 shadow-xl transform scale-105'
                  : 'border-gray-200'
              }`}
            >
              {plan.highlight && <div className="text-purple-600 font-bold mb-2">MOST POPULAR</div>}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-gray-600 mb-4">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-600">{plan.period}</span>
              </div>
              <a
                href={`/api/checkout?plan=${plan.name.toLowerCase()}`}
                className={`w-full py-3 rounded-lg font-semibold text-center block mb-6 transition ${plan.buttonColor}`}
              >
                {plan.buttonText}
              </a>
              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex gap-3 text-gray-700">
                    <span className="text-purple-600 font-bold">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
