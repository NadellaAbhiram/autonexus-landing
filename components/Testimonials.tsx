'use client';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "AutoNexus saved us 30 hours per week on content creation.",
      author: "Sarah J.",
      store: "Fashion E-Store"
    },
    {
      quote: "We finally know what our competitors are doing in real-time.",
      author: "Mike D.",
      store: "Electronics Hub"
    },
    {
      quote: "The quality is indistinguishable from a hired agency. At half the cost.",
      author: "Priya M.",
      store: "Wellness Products"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">What Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-white p-8 rounded-lg border border-gray-200">
              <p className="text-gray-700 mb-4 italic">&quot;{testimonial.quote}&quot;</p>
              <div>
                <p className="font-bold">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.store}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
