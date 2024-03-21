import React from "react";
import logo from "../assets/crework-logo.png";
import dribble from "../assets/dribbble.png";
import behance from "../assets/behance.png";
import linkedin from "../assets/linkedin.png";
import facebook from "../assets/facebook.png";
import vector from "../assets/vector.png";

const Footer = () => {
  return (
    <footer className="bg-[#181616] w-full h-[350px]">
      <div className="w-full lg:w-[1244px] lg:h-[198px] mx-auto">
        <div
          className="w-full h-full lg:h-[90px] flex flex-col lg:flex-row gap-8 lg:gap-2
         items-center lg:justify-between lg:items-start text-left lg:pt-24">
          <div>
            {/* logo */}
            <img src={logo} alt="crework-logo" height={49} width={157} />
          </div>

          {/* links */}
          <div className="flex gap-5 lg:gap-[150px] items-center text-center lg:items-start lg:text-left">
            <ul className="flex flex-col gap-6">
              <li className="font-normal leading-6 text-sm lg:text-xl cursor-pointer text-[#ADADAD] hover:text-white">
                Newsletter
              </li>
              <li className="font-normal leading-6 text-sm lg:text-xl cursor-pointer text-[#ADADAD] hover:text-white">
                Builders Cohort
              </li>
            </ul>
            <ul className="flex flex-col gap-6">
              <li className="font-normal leading-6 text-sm lg:text-xl cursor-pointer text-[#ADADAD] hover:text-white">
                30 Days of PM
              </li>
              <li className="font-normal leading-6 text-sm lg:text-xl cursor-pointer text-[#ADADAD] hover:text-white">
                Transition to PM role
              </li>
            </ul>
          </div>

          {/* socials */}
          <div className="flex gap-5 items-center">
            <img src={dribble} alt="dribble" />
            <img src={behance} alt="behance" />
            <img src={linkedin} alt="linkedin" />
            <img src={facebook} alt="facebook" />
          </div>
        </div>
      </div>
      {/* vector */}
      <div className="flex items-center justify-center my-8">
        <img src={vector} alt="vector" width={580} />
      </div>
      <p className="text-center text-[16px] font-normal leading-6 text-[#ADADAD] my-2">
        Copyright © 2024 Crework
      </p>
    </footer>
  );
};

export default Footer;
