// src/components/InsightsSection.jsx
import React from 'react';

const insights = [
  {
    title: 'Scaling to Millions',
    summary: 'How we helped Company X handle 10M monthly users seamlessly.',
    image: 'https://via.placeholder.com/120',
  },
  {
    title: 'Design Systems',
    summary: 'Building a unified brand experience at scale.',
    image: 'https://via.placeholder.com/120',
  },
];

export default function InsightsSection() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {insights.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col sm:flex-row sm:space-x-6 items-center"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-24 h-24 rounded-md mb-4 sm:mb-0"
            />
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
