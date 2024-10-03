'use client'; // Enables client-side interactivity

import { useState } from 'react';
import Link from 'next/link';
import Button from '../button/button';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const isLoggedIn = localStorage.getItem('token');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    router.push('/');
  };

  return (
    <nav className="fixed w-screen mid:px-10 px-5 py-5 z-50">
      <div className="bg-indigo-500 w-full mx-auto px-4 sm:px-6 lg:px-8 rounded-md border-2 border-indigo-300">
        <div className="w-full flex items-center justify-between h-16">
          <div className="w-full flex items-center">
            <Link
              href="/"
              className="font-bold text-xl leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-300"
            >
              Events.io
            </Link>
            <div className="w-full hidden md:flex items-center justify-between">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/"
                  className="text-white hover:text-black px-3 py-2 rounded-md text-sm font-semibold"
                >
                  Home
                </Link>
                <Link
                  href="/events"
                  className="text-white hover:text-black px-3 py-2 rounded-md text-sm font-semibold"
                >
                  Events
                </Link>
                <Link
                  href="/about"
                  className="text-white hover:text-black px-3 py-2 rounded-md text-sm font-semibold"
                >
                  About
                </Link>
              </div>
              {isLoggedIn ? (
                <div className="ml-auto flex items-baseline justify-self-end space-x-4">
                  <Button onClick={handleLogout} children="Logout" />
                </div>
              ) : (
                <div className="ml-auto flex items-baseline justify-self-end space-x-4">
                  <Button
                    onClick={() => {
                      router.push('/login');
                    }}
                    children="Login"
                  />
                  <Button
                    onClick={() => {
                      router.push('/signup');
                    }}
                    children="Sign Up"
                  />
                </div>
              )}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </Link>
            <Link
              href="/blog"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </Link>
            <Link
              href="/login"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
