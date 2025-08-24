import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
          About Digital Data Consultancy
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          We are a team of passionate data experts dedicated to helping businesses unlock the power
          of their data. Our mission is to provide clear, actionable insights that drive growth and
          innovation. We specialize in data analytics, machine learning, and data governance to
          ensure your data is managed effectively.
        </p>
        <div className="mt-8">
          <h2 className="text-2xl font-bold">Explore More:</h2>
          <ul className="mt-4">
            <li>
              <Link to="/about/company-overview" className="text-blue-500 hover:underline">
                Company Overview
              </Link>
            </li>
            <li>
              <Link to="/about/career" className="text-blue-500 hover:underline">
                Career
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
