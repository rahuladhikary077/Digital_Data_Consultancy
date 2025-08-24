import React from 'react';
import LeadershipSlider from '@components/common/LeadershipSlider';

export default function CompanyOverviewPage() {
  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">Company Overview</h1>
        <p className="mt-4 text-xl text-gray-600">
          Digital Data Consultancy is dedicated to providing innovative data solutions that empower
          businesses to thrive in the digital age.
        </p>
      </div>
      
      {/* Leadership Team Section */}
      <LeadershipSlider />
    </div>
  );
}
