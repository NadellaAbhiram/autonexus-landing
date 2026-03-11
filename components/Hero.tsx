'use client';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          AI-Powered E-Commerce Content & Research
        </h1>
        <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-2xl mx-auto">
          Let AI write your product descriptions, research competitors, and create marketing content. 24/7.
        </p>
        <p className="text-lg text-purple-200 mb-12">
          So you can focus on scaling your store.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="#pricing" className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
            View Pricing
          </a>
          <a href="https://calendly.com/autonexus/demo" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700">
            Book Demo
          </a>
        </div>
      </div>
    </section>
  );
}
