import React from "react";
import { LiaCertificateSolid } from "react-icons/lia";
import { FaAngleRight } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import Navbar from "./navbar";

const Header = () => {
  return (
    <>
      <header className="h-auto md:h-[65px] mx-[16px] ">
        <div className="flex flex-col md:flex-row justify-between h-auto md:h-[51px] px-[24px] mb-[15px] bg-[#1E8A8A] rounded-b-2xl">
          <div className="flex gap-1 justify-center items-center py-[13px] text-white">
            <LiaCertificateSolid className="text-[22px]" />
            <h3 className="text-[14px] md:text-[16px]">
              Recognized for Excellence{" "}
              <span className="font-semibold text-white">Join us Now</span>{" "}
            </h3>
            <FaAngleRight />
          </div>

          <div className="flex flex-col md:flex-row gap-3 md:gap-3 justify-center items-center pb-[13px] md:pb-0">
            <div className="hidden md:flex gap-2 text-[16px] text-white justify-center items-center h-[24px] px-[15px] md:border-l border-dashed border-white/50">
              <IoLocationOutline />
              <h3>Find a Location!</h3>
            </div>
            <div className="flex gap-2 text-[16px] text-white justify-center items-center h-[24px] px-[15px] md:border-l border-dashed border-white/50">
              <LuPhoneCall />
              <h3>808-909-1313</h3>
            </div>
            <div className="flex gap-2 text-[16px] text-white justify-center items-center h-[24px] pl-[15px] md:border-l border-dashed border-white/50">
              <div className="w-[22px] h-[22px] flex items-center justify-center rounded-full bg-white/20 hover:bg-white hover:-translate-y-1 transition-transform duration-300 cursor-pointer">
                <FaFacebookF className="text-[#1E8A8A] text-[14px]" />
              </div>
              <div className="w-[22px] h-[22px] flex items-center justify-center rounded-full bg-white/20 hover:bg-white hover:-translate-y-1 transition-transform duration-300 cursor-pointer">
                <FaXTwitter className="text-[#1E8A8A] text-[14px]" />
              </div>
              <div className="w-[22px] h-[22px] flex items-center justify-center rounded-full bg-white/20 hover:bg-white hover:-translate-y-1 transition-transform duration-300 cursor-pointer">
                <FiInstagram className="text-[#1E8A8A] text-[14px]" />
              </div>
              <div className="w-[22px] h-[22px] flex items-center justify-center rounded-full bg-white/20 hover:bg-white hover:-translate-y-1 transition-transform duration-300 cursor-pointer">
                <FaLinkedinIn className="text-[#1E8A8A] text-[14px]" />
              </div>
            </div>
          </div>
        </div>
        <Navbar/>
      </header>
    </>
  );
};

export default Header;