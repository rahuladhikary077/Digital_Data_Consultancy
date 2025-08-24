import React from 'react';

const GlobalOfficesSection = () => {
  const offices = [
    {
      country: "USA",
      address: "1775, Alcovy Woods Lane Lawrenceville, 30045, USA."
    },
    {
      country: "UK", 
      address: "Omega House, 6 Buckingham Palace, Bellfield Road West, High Wycombe, HP13 5HW, United Kingdom."
    },
    {
      country: "India",
      address: "102, Esteem Emerald, Punjagutta, Hyderabad, Telangana, India - 500082."
    },
    {
      country: "Bangladesh",
      address: "House #2/G, Uttor Adabor, Ring Road, Mohammadpur, Dhaka - 1207, Bangladesh."
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Global offices, resources, and follow-the-sun delivery
            </h2>
            
            <div className="space-y-6">
              {offices.map((office, index) => (
                <div key={index}>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{office.country}:</h3>
                  <p className="text-gray-700 leading-relaxed">{office.address}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gray-100 rounded-lg p-8 h-96 flex items-center justify-center">
              <img 
                src="/images/about/world-map.png" 
                alt="Global Offices Map"
                className="max-w-full h-auto"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div class="text-center text-gray-500"><svg class="mx-auto h-24 w-24 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2V7zm8 4l4 4m0-4l-4 4"></path></svg><p class="text-lg font-medium">World Map</p><p class="text-sm">Global Office Locations</p></div>';
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalOfficesSection;
