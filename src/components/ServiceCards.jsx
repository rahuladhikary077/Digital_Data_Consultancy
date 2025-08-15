// src/components/ServiceCards.jsx
import React from 'react';

const services = [
  { title: 'Custom Development', description: 'Bespoke solutions tailored to your needs.' },
  { title: 'UI/UX Design',        description: 'Intuitive interfaces that delight users.' },
  { title: 'Cloud Hosting',       description: 'Reliable, scalable cloud infrastructure.' },
  { title: 'Analytics & SEO',     description: 'Data-driven growth and visibility.' },
];

export default function ServiceCards() {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 text-center mb-8">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-medium mb-2 text-gray-900">{svc.title}</h3>
              <p className="text-gray-600">{svc.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
