import React from 'react';
import ddcLogo from '@assets/img_ddc_logo.svg';
import searchIcon from '@assets/img_search.svg';
export default function Header() {
  return ( <header className="bg-white shadow-sm border-b"> <div className="flex justify-between items-center py-4"> <div className="flex items-center"> <img src={ddcLogo} alt="DDC Logo" className="h-8 w-auto" /> </div> <div className="flex items-center space-x-4"> <button className="p-2 rounded-md hover:bg-gray-100"> <img src={searchIcon} alt="Search" className="h-5 w-5" /> </button> </div> </div> </header> );
}
