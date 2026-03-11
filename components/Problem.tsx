'use client';

export default function Problem() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">The Problem</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-4xl mb-4">📝</div>
            <h3 className="text-xl font-bold mb-3">Writing is Slow</h3>
            <p className="text-gray-600">
              Writing 100 product descriptions takes 40+ hours. At $25/hour, that's $1,000+. And they're generic.
            </p>
          </div>
          <div>
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-bold mb-3">Competitors Are Faster</h3>
            <p className="text-gray-600">
              You don't know if competitor A just dropped prices 20% or launched a new product line. Until it's too late.
            </p>
          </div>
          <div>
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold mb-3">No Time for Research</h3>
            <p className="text-gray-600">
              Trends, suppliers, margins analysis, seasonal shifts... who has time? Result: you're always behind.
            </p>
          </div>
        </div>
        <div className="mt-16 bg-purple-100 border-l-4 border-purple-600 p-8 rounded">
          <h3 className="text-2xl font-bold mb-2">The Solution</h3>
          <p className="text-lg text-gray-700">
            AutoNexus is an AI team that works 24/7 on your content, research, and strategy.
            <strong> No hiring. No management. Same quality as a $10K/month agency, at $1,200-6,000/month.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
