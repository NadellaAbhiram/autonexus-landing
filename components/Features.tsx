'use client';

export default function Features() {
  const features = [
    {
      title: "Product Descriptions",
      description: "SEO-optimized, benefit-focused descriptions written daily",
      emoji: "✍️"
    },
    {
      title: "Competitor Monitoring",
      description: "Daily price changes, new products, promotions tracked",
      emoji: "👀"
    },
    {
      title: "Marketing Content",
      description: "Email campaigns, social posts, ad copy created continuously",
      emoji: "📢"
    },
    {
      title: "Supplier Research",
      description: "Trending products & suppliers analyzed weekly",
      emoji: "🔗"
    },
    {
      title: "Quality Assured",
      description: "Every piece reviewed before you see it",
      emoji: "✅"
    },
    {
      title: "Unlimited Revisions",
      description: "Not happy? We adjust until you are",
      emoji: "🔄"
    }
  ];

  return (
    <section id="features" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">What You Get</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition">
              <div className="text-4xl mb-4">{feature.emoji}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
