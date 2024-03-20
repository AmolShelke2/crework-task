import React, { useState } from "react";
import logo from "../assets/crework-logo.png";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-transparent py-4">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* navbar section container */}
        <div className="flex justify-between items-center">
          {/* app logo */}
          <div className="flex items-center justify-center">
            <img src={logo} alt="logo" height={39} width={159} />
          </div>

          {/* hamburger icon */}
          <div className="block lg:hidden">
            <button
              onClick={handleMenuToggle}
              className="text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* menu links */}
          <ul
            className={`${
              menuOpen
                ? "block absolute top-16 bg-black w-full left-0 z-10"
                : "hidden"
            } lg:flex lg:flex-row lg:items-center lg:gap-8 text-[#BDBCBC]`}>
            <li className="font-normal leading-6 text-xl">30 Days of PM</li>
            <li className="font-normal leading-6 text-xl">Newsletter</li>
            <li className="font-normal leading-6 text-xl">Builders Cohort</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
