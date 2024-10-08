'use client';

import { useState } from 'react';
import Link from 'next/link';
import Button from '../button/button';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence, color } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const router = useRouter();

  const isLoggedIn =
    typeof window !== 'undefined' ? localStorage.getItem('token') : null;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleAccordion = (section: string) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    router.push('/');
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  const toggleMenuVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -10 },
  };

  const handleMouseEnter = (menuItem: string) => {
    setActiveDropdown(menuItem);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className="fixed w-screen md:px-10 px-5 py-5 z-50 box-border">
      <div className="bg-indigo-900 w-full mx-auto px-4 sm:px-6 lg:px-8 rounded-md border-2 border-black shadow-custom-black">
        <div className="w-full flex items-center justify-between h-16">
          <div className="w-full flex items-center">
            <Link
              href="/"
              className="font-bold text-xl leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-300"
            >
              Events.io
            </Link>
            <div className="w-full hidden lg:flex items-center justify-between">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/"
                  className="text-white px-3 py-2 rounded-md text-md font-semibold"
                >
                  Home
                </Link>
                {/* Events Menu */}
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter('events')}
                  onMouseLeave={handleMouseLeave}
                >
                  <motion.div
                    className={`text-white px-3 py-2 rounded-md text-md font-semibold cursor-pointer`}
                  >
                    Events
                  </motion.div>
                  <AnimatePresence>
                    {activeDropdown === 'events' && (
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={dropdownVariants}
                        className="absolute flex gap-5 -left-20 mt-2 w-[60vw] bg-white shadow-custom-black border-black border-2 z-50"
                      >
                        <div className="p-5 bg-indigo-500 w-[40%]">
                          <h5 className="font-bold text-white text-xl mb-2">
                            Events
                          </h5>
                          <p className="text-white text-md">
                            Our events are hosted by reputable companies and
                            experienced speakers who are experts in their fields
                          </p>
                        </div>
                        <div className="flex flex-col p-5 bg-white w-[30%]">
                          <h6 className="text-black font-semibold text-lg mb-2">
                            Sort By
                          </h6>
                          <Link
                            href="#"
                            className="block py-1.5 text-gray-700 hover:text-black hover:font-medium"
                          >
                            New & Noteworthy
                          </Link>
                          <Link
                            href="#"
                            className="block py-1.5 text-gray-700 hover:text-black hover:font-medium"
                          >
                            Popular
                          </Link>
                          <Link
                            href="#"
                            className="block py-1.5 text-gray-700 hover:text-black hover:font-medium"
                          >
                            Free to Join
                          </Link>
                        </div>
                        <div className="flex flex-col p-5 bg-white w-[30%]">
                          <h6 className="text-black font-semibold text-lg mb-2">
                            Categories
                          </h6>
                          <Link
                            href="#"
                            className="block py-1.5 text-gray-700 hover:text-black hover:font-medium"
                          >
                            Art
                          </Link>
                          <Link
                            href="#"
                            className="block py-1.5 text-gray-700 hover:text-black hover:font-medium"
                          >
                            Business
                          </Link>
                          <Link
                            href="#"
                            className="block py-1.5 text-gray-700 hover:text-black hover:font-medium"
                          >
                            Technology
                          </Link>
                          <Link
                            href="#"
                            className="block py-1.5 text-gray-700 hover:text-black hover:font-medium"
                          >
                            Health
                          </Link>
                          <Link
                            href="#"
                            className="block py-1.5 text-gray-700 hover:text-black hover:font-medium"
                          >
                            Self Development
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Community Menu */}
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter('community')}
                  onMouseLeave={handleMouseLeave}
                >
                  <motion.div className="text-white px-3 py-2 rounded-md text-md font-semibold cursor-pointer">
                    Community
                  </motion.div>
                  <AnimatePresence>
                    {activeDropdown === 'community' && (
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={dropdownVariants}
                        className="absolute flex -left-20 mt-2 w-[50vw] bg-white shadow-custom-black border-black border-2 z-50"
                      >
                        <div className="p-5 bg-indigo-500 w-[60%]">
                          <h5 className="font-bold text-white text-xl mb-2">
                            Community
                          </h5>
                          <p className="text-white text-md">
                            Our global community includes speakers, mentors,
                            companies, and more. Join us to connect, learn, and
                            grow your network!
                          </p>
                        </div>
                        <div className="flex flex-col p-5 bg-white w-[40%]">
                          <Link
                            href="#"
                            className="block py-1.5 text-gray-700 hover:text-black hover:font-medium"
                          >
                            Discord
                          </Link>
                          <Link
                            href="#"
                            className="block py-1.5 text-gray-700 hover:text-black hover:font-medium"
                          >
                            Whatsapp
                          </Link>
                          <Link
                            href="#"
                            className="block py-1.5 text-gray-700 hover:text-black hover:font-medium"
                          >
                            Telegram
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* About Us Menu */}
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter('about')}
                  onMouseLeave={handleMouseLeave}
                >
                  <motion.div className="text-white px-3 py-2 rounded-md text-md font-semibold cursor-pointer">
                    About Us
                  </motion.div>
                  <AnimatePresence>
                    {activeDropdown === 'about' && (
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={dropdownVariants}
                        className="absolute flex -left-20 mt-2 w-[50vw] bg-white shadow-custom-black border-black border-2 z-50"
                      >
                        <div className="p-5 bg-indigo-500 w-[40%]">
                          <h5 className="font-bold text-white text-xl mb-2">
                            About Us
                          </h5>
                          <p className="text-white text-md">
                            We are a company offering diverse range of top-notch
                            events designed to enhance your skills in various
                            fields
                          </p>
                        </div>
                        <div className="grid grid-cols-2 gap-2 p-4 bg-white w-[60%]">
                          <Link
                            href="#"
                            className="block py-1.5 text-black border-black border-2 rounded-sm transition-all duration-300 hover:shadow-custom-black p-2"
                          >
                            <h6 className="font-semibold text-lg mb-2">
                              Company
                            </h6>
                            <p className="text-sm">
                              Discover our mission, values, and the story behind
                              our growing community.
                            </p>
                          </Link>
                          <Link
                            href="#"
                            className="block py-1.5 text-black border-black border-2 rounded-sm transition-all duration-300 hover:shadow-custom-black p-2"
                          >
                            <h6 className="font-semibold text-lg mb-2">
                              Features
                            </h6>
                            <p className="text-sm">
                              Explore the key features and benefits we offer to
                              help you succeed.
                            </p>
                          </Link>
                          <Link
                            href="#"
                            className="block py-1.5 text-black border-black border-2 rounded-sm transition-all duration-300 hover:shadow-custom-black p-2"
                          >
                            <h6 className="font-semibold text-lg mb-2">
                              Collaborations
                            </h6>
                            <p className="text-sm">
                              Learn about our partnerships and how you can
                              collaborate with us.
                            </p>
                          </Link>
                          <Link
                            href="#"
                            className="block py-1.5 text-black border-black border-2 rounded-sm transition-all duration-300 hover:shadow-custom-black p-2"
                          >
                            <h6 className="font-semibold text-lg mb-2">
                              Newsletter
                            </h6>
                            <p className="text-sm">
                              Stay up-to-date with our latest news, events, and
                              opportunities.
                            </p>
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
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
          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-indigo-500 focus:outline-none"
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
        <div className="lg:hidden mt-5 rounded-lg">
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={dropdownVariants}
            className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-black border-2 shadow-custom-black rounded-lg"
          >
            <Link
              href="/"
              className="text-black hover:bg-indigo-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <div>
              <div
                onClick={() => toggleAccordion('events')}
                className="cursor-pointer text-black hover:bg-indigo-500 hover:text-white px-3 py-2 rounded-md text-base font-medium"
              >
                Events
              </div>
              {openAccordion === 'events' && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={dropdownVariants}
                  className="flex flex-col bg-white gap-4 pb-4 border-black border-2"
                >
                  <div className="p-4 bg-indigo-500 border-black border-b-2">
                    <h5 className="font-bold text-white text-md mb-2">
                      Events
                    </h5>
                    <p className="text-white text-sm">
                      Our events are hosted by reputable companies and
                      experienced speakers who are experts in their fields
                    </p>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="flex flex-col px-4 bg-white">
                      <h6 className="text-black font-semibold text-md mb-2">
                        Sort By
                      </h6>
                      <Link
                        href="#"
                        className="block py-1 text-gray-700 text-sm hover:text-black hover:font-medium"
                      >
                        New & Noteworthy
                      </Link>
                      <Link
                        href="#"
                        className="block py-1 text-gray-700 text-sm hover:text-black hover:font-medium"
                      >
                        Popular
                      </Link>
                      <Link
                        href="#"
                        className="block py-1 text-gray-700 text-sm hover:text-black hover:font-medium"
                      >
                        Free to Join
                      </Link>
                    </div>
                    <div className="flex flex-col px-4 bg-white">
                      <h6 className="text-black font-semibold text-md mb-2">
                        Categories
                      </h6>
                      <Link
                        href="#"
                        className="block py-1 text-gray-700 text-sm hover:text-black hover:font-medium"
                      >
                        Art
                      </Link>
                      <Link
                        href="#"
                        className="block py-1 text-gray-700 text-sm hover:text-black hover:font-medium"
                      >
                        Business
                      </Link>
                      <Link
                        href="#"
                        className="block py-1 text-gray-700 text-sm hover:text-black hover:font-medium"
                      >
                        Technology
                      </Link>
                      <Link
                        href="#"
                        className="block py-1 text-gray-700 text-sm hover:text-black hover:font-medium"
                      >
                        Health
                      </Link>
                      <Link
                        href="#"
                        className="block py-1 text-gray-700 text-sm hover:text-black hover:font-medium"
                      >
                        Self Development
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            <div>
              <div
                onClick={() => toggleAccordion('community')}
                className="cursor-pointer text-black hover:bg-indigo-500 hover:text-white px-3 py-2 rounded-md text-base font-medium"
              >
                Community
              </div>
              {openAccordion === 'community' && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={dropdownVariants}
                  className="flex flex-col bg-white border-black border-2"
                >
                  <div className="p-4 bg-indigo-500 border-black border-b-2">
                    <h5 className="font-bold text-white text-md mb-2">
                      Community
                    </h5>
                    <p className="text-white text-sm">
                      Our global community includes speakers, mentors,
                      companies, and more. Join us to connect, learn, and grow
                      your network!
                    </p>
                  </div>
                  <div className="flex flex-col p-4 bg-white">
                    <Link
                      href="#"
                      className="block py-1 text-gray-700 text-sm hover:text-black hover:font-medium"
                    >
                      Discord
                    </Link>
                    <Link
                      href="#"
                      className="block py-1 text-gray-700 text-sm hover:text-black hover:font-medium"
                    >
                      Whatsapp
                    </Link>
                    <Link
                      href="#"
                      className="block py-1 text-gray-700 text-sm hover:text-black hover:font-medium"
                    >
                      Telegram
                    </Link>
                  </div>
                </motion.div>
              )}
            </div>

            <div>
              <div
                onClick={() => toggleAccordion('about')}
                className="cursor-pointer text-black hover:bg-indigo-500 hover:text-white px-3 py-2 rounded-md text-base font-medium"
              >
                About Us
              </div>
              {openAccordion === 'about' && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={dropdownVariants}
                  className="flex flex-col bg-white border-black border-2"
                >
                  <div className="p-5 bg-indigo-500 border-black border-b-2">
                    <h5 className="font-bold text-white text-md mb-2">
                      About Us
                    </h5>
                    <p className="text-white text-sm">
                      We are a company offering diverse range of top-notch
                      events designed to enhance your skills in various fields
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-2 p-4 bg-white">
                    <Link
                      href="#"
                      className="block py-1 text-black border-black border-2 rounded-sm transition-all duration-300 hover:shadow-custom-black p-2"
                    >
                      <h6 className="font-semibold text-md mb-2">Company</h6>
                      <p className="text-sm">
                        Discover our mission, values, and the story behind our
                        growing community.
                      </p>
                    </Link>
                    <Link
                      href="#"
                      className="block py-1 text-black border-black border-2 rounded-sm transition-all duration-300 hover:shadow-custom-black p-2"
                    >
                      <h6 className="font-semibold text-md mb-2">Features</h6>
                      <p className="text-sm">
                        Explore the key features and benefits we offer to help
                        you succeed.
                      </p>
                    </Link>
                    <Link
                      href="#"
                      className="block py-1 text-black border-black border-2 rounded-sm transition-all duration-300 hover:shadow-custom-black p-2"
                    >
                      <h6 className="font-semibold text-md mb-2">
                        Collaborations
                      </h6>
                      <p className="text-sm">
                        Learn about our partnerships and how you can collaborate
                        with us.
                      </p>
                    </Link>
                    <Link
                      href="#"
                      className="block py-1 text-black border-black border-2 rounded-sm transition-all duration-300 hover:shadow-custom-black p-2"
                    >
                      <h6 className="font-semibold text-md mb-2">Newsletter</h6>
                      <p className="text-sm">
                        Stay up-to-date with our latest news, events, and
                        opportunities.
                      </p>
                    </Link>
                  </div>
                </motion.div>
              )}
            </div>

            <Link
              href="/login"
              className="text-black hover:bg-indigo-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="text-black hover:bg-indigo-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Sign Up
            </Link>
          </motion.div>
        </div>
      )}
    </nav>
  );
}
