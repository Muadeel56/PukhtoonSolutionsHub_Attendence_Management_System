import React from "react";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <header className="static top-0 left-0 w-full z-20 bg-gradient-to-r from-gray-700 to-red-800 text-white h-10 md:h-32 opacity-70 flex items-center">
      <div className="container flex justify-between items-center mx-4 md:mx-10">
        <Link href="/">
          <Image src="/logo-transparent.png" width={200} height={200} alt="logo" className="md:w-200 md:h-32" />
        </Link>
        <nav className="flex space-x-4 md:space-x-8">
          <Link href="/login" className="text-white text-xl hover:text-gray-200 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
              />
            </svg>{" "}
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
