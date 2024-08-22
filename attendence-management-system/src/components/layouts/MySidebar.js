import React, { useState } from 'react';
import Sidebar from 'react-sidebar';
import Link from 'next/link';

const MySidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const onSetSidebarOpen = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Sidebar
      sidebar={
        <div className="p-6 bg-gradient-to-bl from-gray-800 to-red-700 text-white h-full flex flex-col justify-between">
          <div>
            {/* Logo */}
            <div className="flex items-center mb-8">
              <h2 className="ml-4 text-2xl font-bold">PUKHTOON SOLUTIONS HUB</h2>
            </div>

            {/* Navigation Links */}
            <ul className="space-y-4">
              <li className="hover:bg-red-800 rounded-lg p-2 transition-colors duration-200">
                <Link href="/">Link 1</Link>
              </li>
              <li className="hover:bg-red-800 rounded-lg p-2 transition-colors duration-200">
                <Link href="/login">Link 2</Link>
              </li>
              <li className="hover:bg-red-800 rounded-lg p-2 transition-colors duration-200">
                <Link href="/dashboard">Link 3</Link>
              </li>
            </ul>
          </div>

          {/* Footer */}
          <div className="mt-auto">
            <p className="text-sm">© 2024 Pukhtoon Solutions Hub</p>
          </div>
        </div>
      }
      open={sidebarOpen}
      onSetOpen={onSetSidebarOpen}
      styles={{
        sidebar: {
          background: 'white',
          transition: 'transform 0.3s ease',
          transform: sidebarOpen ? 'translateX(0)' : 'translateX(-100%)',
        }
      }}
    >
      <button
        onClick={onSetSidebarOpen}
        className="fixed top-4 left-4 z-20 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-400 transition-colors duration-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
      </button>
    </Sidebar>
  );
};

export default MySidebar;
