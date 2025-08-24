import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MobileNavDrawer = ({ menuItems, isOpen, onClose }) => {
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleSubmenu = (submenuId) => {
    setOpenSubmenu(openSubmenu === submenuId ? null : submenuId);
  };

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-75 md:hidden" onClick={onClose}>
      <div
        className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#02101F] text-white p-6 transform transition-transform duration-300 ease-out"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Menu</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-300 p-2 rounded-md"
            aria-label="Close menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav>
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.id} className="border-b border-gray-700">
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => toggleSubmenu(item.id)}
                      className="w-full flex justify-between items-center py-4 text-left text-white hover:text-gray-300 transition-colors duration-200"
                      aria-expanded={openSubmenu === item.id}
                      aria-controls={`submenu-${item.id}`}
                    >
                      <span className="text-lg">{item.label}</span>
                      <svg
                        className={`h-5 w-5 transform transition-transform duration-200 ${openSubmenu === item.id ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {openSubmenu === item.id && (
                      <ul id={`submenu-${item.id}`} className="pl-4 pb-2">
                        {item.items.map((subItem) => (
                          <li key={subItem.label}>
                            <Link
                              to={subItem.to}
                              className="block py-3 text-gray-300 hover:text-white transition-colors duration-200"
                              onClick={onClose}
                            >
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.to}
                    className="block py-4 text-white hover:text-gray-300 transition-colors duration-200"
                    onClick={onClose}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileNavDrawer;
