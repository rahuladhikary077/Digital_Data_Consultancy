// src/components/CTASection.jsx
import React from 'react';

export default function CTASection() {
  return (
    <section className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-16 flex flex-col sm:flex-row items-center justify-between">
        <h2 className="text-2xl sm:text-3xl font-semibold">Ready to elevate your project?</h2>
        <button className="mt-6 sm:mt-0 px-6 py-3 bg-white text-blue-600 rounded hover:bg-gray-100 transition">
          Contact Us
        </button>
      </div>
    </section>
  );
}
