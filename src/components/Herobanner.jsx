// src/components/HeroBanner.jsx
import React from 'react';

export default function HeroBanner() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 py-20 sm:py-32 flex flex-col-reverse lg:flex-row items-center">
        {/* Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Empower Your Business
          </h1>
          <p className="text-base sm:text-lg text-gray-700">
            Build faster, scale smarter, and stay ahead with our end-to-end solutions.
          </p>
          <button className="inline-block px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
            Get Started
          </button>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
          <img
            src="https://via.placeholder.com/600x400"
            alt="Hero illustration"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
