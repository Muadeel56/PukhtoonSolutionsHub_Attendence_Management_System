import React from 'react';
import Layout from '@/components/layouts/Layout';
import Link from 'next/link';

export default function Home() {
  return (
      <div className="absolute top-0 left-0 z-10 flex flex-col h-screen w-screen items-center justify-center  bg-black bg-opacity-50">
        <div className="text-center flex flex-col mt-72 space-y-8">
        <h1 className="text-white text-2xl">SOFTWARE DEVELOPMENT & IT SOLUTION COMPANY</h1>
        <Link href={"/login"}>
          <button className="bg-gradient-to-tr from-black to-red-800 text-white p-2 rounded-lg">Get Started</button></Link>
      </div>
      </div>
  );
}
