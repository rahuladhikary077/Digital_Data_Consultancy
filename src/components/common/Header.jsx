import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import DropdownMenu from '../DropdownMenu';
import MobileNavDrawer from './MobileNavDrawer';

const NAV_MENU = [
  {
    id: 'about',
    label: 'About',
    hasDropdown: true,
    items: [
      { label: 'Company Overview', to: '/company-overview' },
      { label: 'Career', to: '/career' },
    ],
  },
  {
    id: 'services',
    label: 'Services',
    hasDropdown: true,
    items: [
      { label: 'Data Analytics', to: '/services/data-analytics' },
      { label: 'Machine Learning', to: '/services/machine-learning' },
      { label: 'Data Governance', to: '/services/data-governance' },
    ],
  },
  {
    id: 'industries',
    label: 'Industries',
    hasDropdown: true,
    items: [
      { label: 'Manufacturing', to: '/industries/manufacturing' },
      { label: 'Healthcare', to: '/industries/healthcare' },
    ],
  },
  {
    id: 'resources',
    label: 'Resources',
    hasDropdown: true,
    items: [
      { label: 'Blogs', to: '/resources/blogs' },
      { label: 'Case Studies', to: '/resources/case-studies' },
    ],
  },
  {
    id: 'contact',
    label: 'Contact',
    hasDropdown: false,
    to: '/contact',
  },
];

const MenuIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const CloseIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const headerRef = useRef(null);

  const handleDropdownToggle = (dropdownId) => {
    setOpenDropdown(openDropdown === dropdownId ? null : dropdownId);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  return (
    <header className="bg-[#02101F] text-white sticky top-0 z-50" ref={headerRef}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link to="/" className="flex-shrink-0">
            <img
              src="/images/img_ddc_logo_white_a700.svg"
              alt="Digital Data Consultancy"
              className="h-8 sm:h-10 md:h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_MENU.map((item) => (
              <div key={item.id} className="relative">
                {item.hasDropdown ? (
                  <button
                    onClick={() => handleDropdownToggle(item.id)}
                    aria-haspopup="true"
                    aria-expanded={openDropdown === item.id}
                    className="flex items-center text-white hover:text-gray-300 px-3 py-2 text-sm font-medium transition-colors duration-200"
                  >
                    {item.label}
                    <svg
                      className="ml-1 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                ) : (
                  <NavLink
                    to={item.to}
                    className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium transition-colors duration-200"
                  >
                    {item.label}
                  </NavLink>
                )}
                {item.hasDropdown && openDropdown === item.id && (
                  <DropdownMenu
                    items={item.items}
                    isOpen={openDropdown === item.id}
                    onClose={() => setOpenDropdown(null)}
                  />
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-gray-300 p-2 rounded-md"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNavDrawer
        menuItems={NAV_MENU}
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
};

export default Header;
