import React from 'react';

const ContactInfo = () => {
  return (
    <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
      <div>
        <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Call Center</h3>
        <p className="text-sm sm:text-base mb-4 sm:mb-6">
          <a href="tel:+442080902929" className="hover:text-blue-600 transition">
            +44 (0) 208 090 2929
          </a>
        </p>

        <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Email</h3>
        <p className="text-sm sm:text-base">
          <a
            href="mailto:info@digitaldataconsultancy.com"
            className="underline hover:text-blue-600 transition"
          >
            info@digitaldataconsultancy.com
          </a>
        </p>
      </div>

      <div>
        <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Registered Address</h3>
        <address className="not-italic text-sm sm:text-base">
          Digital Data Consultancy Limited
          <br />
          20-22 Wenlock Road,
          <br />
          London, N1 7GU
        </address>
      </div>
    </div>
  );
};

export default ContactInfo;
