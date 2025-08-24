import React from 'react';
import linkedinIcon from '/images/img_icon_linkedin.svg';
import facebookIcon from '/images/img_icon_facebook.svg';
import instagramIcon from '/images/img_icon_instagram.svg';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {' '}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-8 md:gap-8">
          <div className="col-span-1 md:col-span-2 text-center md:text-left">
            <img
              src="/images/img_ddc_logo_white_a700.svg"
              alt="DDC Logo White"
              className="h-10 w-auto mb-4 mx-auto md:mx-0"
            />
            <p className="text-gray-300 text-sm">
              Digital Data Consultancy - Transforming data into actionable insights
            </p>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Data Engineering
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Data Governance
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Analytics
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="#" className="text-gray-300 hover:text-white">
                <img src={linkedinIcon} alt="LinkedIn" className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <img src={facebookIcon} alt="Facebook" className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <img src={instagramIcon} alt="Instagram" className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Digital Data Consultancy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
