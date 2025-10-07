"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaAngleDown } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdArrowRoundForward } from "react-icons/io";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

// Sample NavItems - replace with your actual data
const NavItems = ["Home", "About", "Services", "Portfolio", "Blog", "Contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="h-[80px] px-[24px] flex items-center justify-between bg-transparent relative z-50 border-b border-dashed border-gray-400">
        {/* Logo */}
        <Image src="/images/logo.webp" alt="Logo" width={136} height={38} />

        <ul className="hidden lg:flex items-center gap-8">
          {NavItems.map((items, index) => (
            <li
              key={index}
              className="flex gap-2 items-center text-[16px] font-medium group hover:text-[#1E8A8A] cursor-pointer"
            >
              {items}
              <FaAngleDown className="text-[14px] group-hover:rotate-180 transition-transform duration-300" />
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <div className="h-[48px] w-[48px] flex items-center justify-center rounded-full bg-gray-100  transition-all duration-300 cursor-pointer">
            <IoSearchOutline className="text-[20px]" />
          </div>
          <div className="h-[48px] w-[150px] bg-[#1E8A8A] rounded-3xl group flex items-center justify-center gap-3 py-[5px] pl-[25px] pr-[5px] cursor-pointer  transition-all duration-300">
            <h3 className="text-[16px] font-semibold text-white">Let's Talk</h3>
            <div className="h-[38px] w-[38px] flex items-center justify-center rounded-full bg-black  transition-all duration-300">
              <IoMdArrowRoundForward className="text-white  text-[20px] -rotate-30 group-hover:rotate-0 transition-transform duration-300" />
            </div>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-3xl text-gray-900 hover:text-[#1E8A8A] transition-colors z-50"
        >
          {isOpen ? <IoClose /> : <HiMenuAlt3 />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-[280px] bg-white shadow-2xl z-40 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="pt-24 px-8">
          {/* Mobile Nav Items */}
          <ul className="flex flex-col gap-6 mb-8">
            {NavItems.map((items, index) => (
              <li
                key={index}
                className="flex gap-2 items-center text-[18px] font-medium hover:text-[#1E8A8A] cursor-pointer border-b border-gray-200 pb-4"
              >
                {items}
                <FaAngleDown className="text-[14px]" />
              </li>
            ))}
          </ul>

          {/* Mobile Actions */}
          <div className="flex flex-col gap-4">
            <div className="h-[48px] w-full flex items-center justify-center rounded-full bg-gray-200 hover:bg-[#1E8A8A] hover:text-white transition-all duration-300 cursor-pointer">
              <IoSearchOutline className="text-[20px]" />
            </div>
            <div className="h-[48px] w-full bg-[#1E8A8A] rounded-3xl flex items-center justify-center gap-3 py-[5px] px-[20px] cursor-pointer hover:bg-[#156d6d] transition-all duration-300">
              <h3 className="text-[16px] font-semibold text-white">
                Let's Talk
              </h3>
              <div className="h-[38px] w-[38px] flex items-center justify-center rounded-full bg-black">
                <IoMdArrowRoundForward className="text-white text-[20px]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
        />
      )}
    </>
  );
};

export default Navbar;