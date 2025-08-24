// src/components/Partners.jsx
import React from 'react';

const partners = [
  { name: 'Partner 1', logo: '/images/img_logo.svg' },
  { name: 'Partner 2', logo: '/images/img_logo_black_900_01.svg' },
  { name: 'Partner 3', logo: '/images/img_placeholder_logo.svg' },
  { name: 'Partner 4', logo: '/images/img_placeholder_logo_black_900_01.svg' },
  { name: 'Partner 5', logo: '/images/img_logo.svg' },
];

export default function Partners() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-center text-gray-600 mb-12">
          Trusted by the world's leading companies
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
          {partners.map((partner, idx) => (
            <div key={idx} className="p-4">
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-10 max-w-full filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
