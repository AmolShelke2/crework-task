import React, { useState } from "react";
import logo from "../assets/crework-logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-[#181616] lg:bg-transparent py-4">
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
              className="text-[#BDBCBC] hover:text-gray-500 focus:outline-none focus:text-gray-500">
              {menuOpen ? (
                <AiOutlineClose size={25} />
              ) : (
                <AiOutlineMenu size={25} />
              )}
            </button>
          </div>

          {/* menu links */}
          <ul
            className={`${
              menuOpen
                ? "flex gap-6 py-2 absolute top-16 bg-[#181616] w-full left-0 z-10 my-2"
                : "hidden"
            } lg:flex flex-col items-center lg:flex-row lg:items-center lg:gap-8`}>
            <li className="font-normal leading-6 text-xl cursor-pointer text-[#BDBCBC] hover:text-white">
              30 Days of PM
            </li>
            <li className="font-normal leading-6 text-xl cursor-pointer text-[#BDBCBC] hover:text-white">
              Newsletter
            </li>
            <li className="font-normal leading-6 text-xl cursor-pointer text-[#BDBCBC] hover:text-white">
              Builders Cohort
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
