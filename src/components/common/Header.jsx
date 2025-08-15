import React from 'react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img 
              src="/images/img_ddc_logo.svg" 
              alt="DDC Logo" 
              className="h-8 w-auto"
            />
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-md hover:bg-gray-100">
              <img 
                src="/images/img_search.svg" 
                alt="Search" 
                className="h-5 w-5"
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
