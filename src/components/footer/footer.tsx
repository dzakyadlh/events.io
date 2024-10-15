import React from 'react';

export const Footer: React.FC = () => {
  return (
    <div className="w-screen flex max-sm:flex-col gap-5 md:gap-[10%] justify-center min-h-[20vh] bg-slate-900 p-10 pb-24 mt-10">
      <div className="flex flex-col">
        <h1 className="font-bold text-xl leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-300">
          Events.io
        </h1>
        <p className="text-gray-300 font-light text-[0.6rem]">
          All rights reserved. Events.io 2024
        </p>
      </div>
      <div className="max-sm:flex max-sm:justify-between">
        <div className="flex flex-col text-white gap-4">
          <p className="font-medium">Features</p>
          <ul>
            <li className="mb-1">
              <a href="#" className="text-gray-400">
                Virtual
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="text-gray-400">
                Pricing
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="text-gray-400">
                Merchant
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="text-gray-400">
                Tickets
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col text-white gap-4">
          <p className="font-medium">Company</p>
          <ul>
            <li className="mb-1">
              <a href="#" className="text-gray-400">
                Jobs
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="text-gray-400">
                API
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="text-gray-400">
                Press
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="text-gray-400">
                Sitemap
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col text-white gap-4">
          <p className="font-medium">Learn</p>
          <ul>
            <li className="mb-1">
              <a href="#" className="text-gray-400">
                Guidebook
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="text-gray-400">
                Inspiration
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="text-gray-400">
                Community
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="text-gray-400">
                Tools
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
