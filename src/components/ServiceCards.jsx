// src/components/ServiceCards.jsx
import React from 'react';

const services = [
  {
    title: 'Data Engineering',
    description: 'We build robust and scalable data pipelines to handle all your data needs.',
    icon: '/images/img_engineering.svg',
  },
  {
    title: 'Data Governance',
    description: 'Ensure data quality, security, and compliance with our expert guidance.',
    icon: '/images/img_governance.svg',
  },
  {
    title: 'Business Intelligence',
    description: 'Turn your data into actionable insights with our advanced analytics solutions.',
    icon: '/images/img_vector.svg',
  },
];

export default function ServiceCards() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          Combining Data into Business Success
        </h2>
        <p className="text-center text-gray-600 mb-12">
          We offer a range of services to help you achieve your data-driven goals.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-lg shadow-lg p-8 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={service.icon}
                alt={`${service.title} icon`}
                className="h-20 w-20 mx-auto mb-6"
              />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
