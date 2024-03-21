import React from "react";
import logo from "../assets/crework-logo.png";
import dribble from "../assets/dribbble.png";
import behance from "../assets/behance.png";
import linkedin from "../assets/linkedin.png";
import facebook from "../assets/facebook.png";
import vector from "../assets/vector.png";

const Footer = () => {
  return (
    <footer className="bg-[#181616] w-full h-[314px]">
      <div className="w-[1244px] h-[198px] mx-auto">
        <div className="w-full h-[90px] flex justify-between items-start text-left pt-24">
          <div>
            {/* logo */}
            <img src={logo} alt="crework-logo" height={49} width={157} />
          </div>

          {/* links */}
          <div className="flex gap-[150px] items-start">
            <ul className="flex flex-col gap-6">
              <li className="font-normal leading-6 text-xl cursor-pointer text-[#ADADAD] hover:text-white">
                Newsletter
              </li>
              <li className="font-normal leading-6 text-xl cursor-pointer text-[#ADADAD] hover:text-white">
                Builders Cohort
              </li>
            </ul>
            <ul className="flex flex-col gap-6">
              <li className="font-normal leading-6 text-xl cursor-pointer text-[#ADADAD] hover:text-white">
                30 Days of PM
              </li>
              <li className="font-normal leading-6 text-xl cursor-pointer text-[#ADADAD] hover:text-white">
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
      <p className="text-center text-[16px] font-normal leading-6 text-[#ADADAD]">
        Copyright © 2024 Crework
      </p>
    </footer>
  );
};

export default Footer;
