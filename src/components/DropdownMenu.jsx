import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const DropdownMenu = ({ items, isOpen, onClose }) => {
  const menuRef = useRef(null);
  const firstItemRef = useRef(null);

  useEffect(() => {
    if (isOpen && firstItemRef.current) {
      firstItemRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!isOpen) return;

      const focusableElements = menuRef.current?.querySelectorAll('a[href]');
      if (!focusableElements || focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.key === 'Tab') {
        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }

      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={menuRef}
      role="menu"
      className={`absolute z-20 mt-2 w-56 rounded-md shadow-xl bg-[#0a1929] border border-gray-700 transition-all duration-200 ease-out transform ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
      }`}
    >
      <div className="py-1" role="none">
        {items.map((item, index) => (
          <Link
            key={item.label}
            to={item.to}
            role="menuitem"
            ref={index === 0 ? firstItemRef : null}
            className="block px-4 py-3 text-sm text-gray-200 hover:bg-[#1a2332] hover:text-white transition-colors duration-150 focus:outline-none focus:bg-[#1a2332] focus:text-white"
            onClick={onClose}
            tabIndex={isOpen ? 0 : -1}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DropdownMenu;
