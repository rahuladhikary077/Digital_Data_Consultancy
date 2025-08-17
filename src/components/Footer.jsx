import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#02101F] text-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        {/* Company / Branding */}
        <div>
          <img src="/images/img_ddc_logo_white_a700.svg" alt="Digital Data Consultancy" className="h-9 mb-4" />
          <p className="text-sm text-gray-300">
            We help organisations leverage data and AI to build resilient, scalable solutions.
          </p>
          <p className="mt-4 text-xs text-gray-400">© {new Date().getFullYear()} Digital Data Consultancy Ltd</p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-gray-300">
            <li><Link to="/company-overview" className="hover:text-white">Company Overview</Link></li>
            <li><Link to="/career" className="hover:text-white">Career</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Contact info (updated) */}
        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>

          <p className="text-gray-300">
            <strong>Call Center:</strong>{" "}
            <a href="tel:+442080902929" className="underline hover:text-white">+44 (0) 208 090 2929</a>
          </p>

          <p className="text-gray-300 mt-2">
            <strong>Email:</strong>{" "}
            <a href="mailto:info@digitaldataconsultancy.com" className="underline hover:text-white">info@digitaldataconsultancy.com</a>
          </p>

          <address className="not-italic text-gray-300 mt-3 text-sm">
            Digital Data Consultancy Limited<br />
            20-22 Wenlock Road,<br />
            London, N1 7GU
          </address>

          <div className="flex gap-4 mt-4">
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-gray-300 hover:text-white">
              LinkedIn
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="text-gray-300 hover:text-white">
              X
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="text-gray-300 hover:text-white">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
