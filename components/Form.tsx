'use client';

import { useState } from 'react';

export default function Form() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const data = {
      store_name: formData.get('store_name'),
      owner_email: formData.get('owner_email'),
      niche: formData.get('niche'),
      package: formData.get('package'),
    };

    try {
      const res = await fetch('/api/form-submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error('Submission failed');
      setSuccess(true);
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Ready to Get Started?</h2>
        <p className="text-center text-gray-600 mb-12">
          Fill out the form below and we'll set you up in 24 hours.
        </p>
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg border border-gray-200">
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2">Store Name *</label>
            <input
              type="text"
              name="store_name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="e.g., MyStore.com"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2">Email *</label>
            <input
              type="email"
              name="owner_email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="you@example.com"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2">Store Niche *</label>
            <select
              name="niche"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            >
              <option value="">Select your niche...</option>
              <option value="Fashion">Fashion</option>
              <option value="Home">Home</option>
              <option value="Electronics">Electronics</option>
              <option value="Health">Health</option>
              <option value="Beauty">Beauty</option>
              <option value="Pet">Pet</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2">Which plan interests you?</label>
            <select
              name="package"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            >
              <option value="Starter">Starter - ₹1,200/month</option>
              <option value="Growth">Growth - ₹3,500/month</option>
              <option value="Scale">Scale - ₹6,000/month</option>
            </select>
          </div>

          {success && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
              ✓ Thanks! We'll be in touch within 4 hours.
            </div>
          )}
          {error && (
            <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              {error}
            </div>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 disabled:opacity-50"
          >
            {loading ? 'Submitting...' : 'Get Started'}
          </button>
        </form>
      </div>
    </section>
  );
}
