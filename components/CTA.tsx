'use client';

export default function CTA() {
  return (
    <section className="bg-purple-600 text-white py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Still Have Questions?</h2>
        <p className="text-lg mb-8 opacity-90">
          Book a 15-minute demo to see AutoNexus in action.
        </p>
        <a
          href="https://calendly.com/autonexus/demo"
          className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100"
        >
          Book a Demo
        </a>
      </div>
    </section>
  );
}
