import React, { useState } from 'react';
import Navbar from './Navbar';
import BackgroundVideo from './BackgroundVideo';
import MySidebar from './MySidebar';

function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="relative flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1 flex-col md:flex-row">
        <MySidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className={`flex-1 relative transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
          <BackgroundVideo />
          <main className="z-10 ">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}

export default Layout;
