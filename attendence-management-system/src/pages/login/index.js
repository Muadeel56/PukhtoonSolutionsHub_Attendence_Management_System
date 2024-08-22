import Link from "next/link";
import React, { useState } from "react";

function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="absolute top-0 left-0 z-10 flex flex-col h-screen w-screen items-center justify-center  bg-black bg-opacity-50">
      <div className="container w-full max-w-md">
        <form
          onSubmit={handleSubmit}
          className="bg-white bg-opacity-30 backdrop-blur-md dark:bg-gray-200 dark:bg-opacity-30 dark:text-gray-100 border-gradient rounded-lg shadow-2xl px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4 flex justify-center">
            <h1 className="text-3xl font-bold text-gray-100">Login</h1>
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-100 text-sm font-bold mb-2"
            >
              Username
            </label>
            <input
              placeholder="Enter your email/username"
              name="email"
              onChange={handleChange}
              type="email"
              required
              className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 focus:border-indigo-700 text-gray-100 dark:text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
              value={credentials.email}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-100 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              placeholder="*******"
              onChange={handleChange}
              name="password"
              required
              type="password"
              className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 focus:border-indigo-700 text-gray-700 dark:text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
              value={credentials.password}
            />
          </div>
          <div className="flex justify-center mt-6">
            <Link href={"/dashboard"}>
              <button
                type="submit"
                className="border text-gray-300 font-bold dark:border-gray-400 border-gray-900 rounded p-2 hover:bg-gradient-to-r from-gray-800 to-red-700 hover:text-gray-300"
              >
                Log in
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
