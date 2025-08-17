import React from "react";
import { Link } from "react-router-dom";

const MobileNavDrawer = ({ menuItems, isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 z-50 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="bg-[#02101F] w-64 h-full p-6 flex flex-col">
        <button
          onClick={onClose}
          className="text-white mb-6 text-right self-end hover:text-gray-300"
        >
          ✕
        </button>

        <nav className="space-y-4">
          {menuItems.map((item) => (
            <div key={item.id}>
              {item.hasDropdown ? (
                <div>
                  <p className="text-white font-medium">{item.label}</p>
                  <div className="ml-4 space-y-2">
                    {item.items.map((subItem, index) => (
                      <Link
                        key={index}
                        to={subItem.to}
                        className="block text-gray-300 hover:text-white transition"
                        onClick={onClose}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  to={item.to}
                  className="block text-white font-medium hover:text-gray-300"
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MobileNavDrawer;
