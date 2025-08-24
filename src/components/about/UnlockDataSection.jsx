import React from 'react';

const UnlockDataSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Unlock <span className="bg-blue-600 text-white px-4 py-1 rounded">Data</span>
          </h2>
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Unleash Infinite Potential
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Our experiences come from the old world of managing structured, on premise, data warehouses.
            </p>
            <p>
              We believe, in the new digital world of cloud based, unstructured data the key challenges are still the same. The volume and the speed of data being generated in today's business has opened up new dimensions of insights which makes informed decisions easier.
            </p>
            <p>
              The journey of DDC started in 2019 with a dream to bring quality data consultancy services to the industry which suffered a lot from mediocrity. With a combined experience of over a century in data, the leadership team had a common vision of approaching customer's problems as their own.
            </p>
            <p>
              Our success has come from excellence in quality and resilience in delivery. Our services teams now span across the globe with offices and resources based across three continents.
            </p>
          </div>
          <div className="relative">
            <img 
              src="/images/about/team-collaboration.jpg" 
              alt="Team Collaboration" 
              className="w-full h-auto rounded-lg shadow-lg"
              onError={(e) => {
                e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDUwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjI1MCIgeT0iMjAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOUI5QjlCIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCI+Q29sbGFib3JhdGlvbiBJbWFnZTwvdGV4dD4KPC9zdmc+';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnlockDataSection;
