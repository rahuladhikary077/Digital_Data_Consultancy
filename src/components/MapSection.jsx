import React from 'react';

const MapSection = () => {
  return (
    <div className="w-full">
      <h3 className="text-lg sm:text-xl font-semibold mb-4">Our Location</h3>
      <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.88679557363!2d-0.101598684229!3d51.528558179639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b2e8b8b3b3b%3A0x4c4f4f4f4f4f4f4f!2s20-22%20Wenlock%20Rd%2C%20London%20N1%207GU%2C%20UK!5e0!3m2!1sen!2sus!4v1234567890123"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Digital Data Consultancy Location"
          className="w-full h-full min-h-[200px] sm:min-h-[250px] lg:min-h-[300px]"
        />
      </div>
    </div>
  );
};

export default MapSection;
