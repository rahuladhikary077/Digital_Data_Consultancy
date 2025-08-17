import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './src/components/common/Header.jsx';
import Footer from './src/components/common/Footer.jsx';

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
