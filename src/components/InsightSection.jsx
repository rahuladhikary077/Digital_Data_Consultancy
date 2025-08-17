// src/components/InsightsSection.jsx
import React, { useState } from 'react';

const allInsights = [
  {
    title: 'Scaling to Millions',
    summary: 'How we helped Company X handle 10M monthly users seamlessly.',
    image: '/images/img_engineering.svg',
  },
  {
    title: 'Design Systems',
    summary: 'Building a unified brand experience at scale.',
    image: '/images/img_group.svg',
  },
  {
    title: 'Data-Driven Decisions',
    summary: 'Transforming raw data into actionable business intelligence.',
    image: '/images/img_governance.svg',
  },
  {
    title: 'Cloud Migration',
    summary: 'Seamless transition to cloud infrastructure with zero downtime.',
    image: '/images/img_vector.svg',
  },
  {
    title: 'AI Integration',
    summary: 'Implementing machine learning solutions for business growth.',
    image: '/images/img_placeholder_image.png',
  },
  {
    title: 'Security First',
    summary: 'Building robust security frameworks for enterprise applications.',
    image: '/images/img_placeholder_image_1.png',
  }
];

export default function InsightsSection() {
  const [showAll, setShowAll] = useState(false);
  const displayedInsights = showAll ? allInsights : allInsights.slice(0, 2);

  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
          Our Insights
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {displayedInsights.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 sm:h-56 object-cover"
              />
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">{item.summary}</p>
              </div>
            </div>
          ))}
        </div>

        {allInsights.length > 2 && (
          <div className="text-center mt-8 sm:mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {showAll ? 'Show Less' : 'View All Insights'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
