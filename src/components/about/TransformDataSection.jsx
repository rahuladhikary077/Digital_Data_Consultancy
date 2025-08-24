import React from 'react';
import { Link } from 'react-router-dom';

const TransformDataSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <img 
              src="/images/about/data-professional.jpg" 
              alt="Data Professional" 
              className="w-full h-auto rounded-lg shadow-lg"
              onError={(e) => {
                e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDUwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjI1MCIgeT0iMjAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOUI5QjlCIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCI+RGF0YSBQcm9mZXNzaW9uYWw8L3RleHQ+Cjwvc3ZnPg==';
              }}
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Transform Data into Value, Differentiation, and Revenue.
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Our team of experienced data professionals help you with addressing any data challenges across business functions, technology platforms and domains. Our services can be customised for each client.
            </p>
            <Link 
              to="/contact"
              className="inline-block px-8 py-3 bg-transparent border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200"
            >
              Talk to Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformDataSection;
