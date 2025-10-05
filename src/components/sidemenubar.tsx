"use client";

import React from "react";
import { FaAngleDown } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import Image from "next/image";

const NavItems = ["Home", "Pages", "Services", "Portfolio", "Blog", "Contact"];

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileSidebar = ({ isOpen, onClose }: MobileSidebarProps) => {
  return (
    <>
      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen w-full z-10000 sm:w-[400px] bg-[#0f2829] shadow-2xl z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Header with Logo and Close Button */}
          <div className="flex items-center justify-between px-8 pt-8 pb-6 border-b border-gray-700">
            <Image src="/images/logo-2.webp" alt="Logo" width={136} height={38} />            
            <button
              onClick={onClose}
              className="text-white text-3xl hover:text-[#1E8A8A] transition-colors duration-300"
            >
              <IoClose />
            </button>
          </div>

          {/* Search Section */}
          <div className="px-8 pt-8 pb-6">
            <h2 className="text-white text-3xl font-bold mb-6">Search Now!</h2>
            <div className="relative">
              <input
                type="text"
                placeholder="Search here..."
                className="w-full h-[56px] bg-white rounded-full px-6 pr-14 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1E8A8A]"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 h-[44px] w-[44px] bg-[#0f2829] rounded-full flex items-center justify-center hover:bg-[#1E8A8A] transition-all duration-300">
                <IoSearchOutline className="text-white text-xl" />
              </button>
            </div>
          </div>

          {/* Mobile Nav Items */}
          <ul className="flex-1 flex flex-col px-8 py-4 overflow-y-auto">
            {NavItems.map((items, index) => (
              <li
                key={index}
                className="flex gap-2 items-center justify-between text-white text-lg font-medium hover:text-[#1E8A8A] cursor-pointer border-b border-gray-700 py-5 transition-colors duration-300"
              >
                <span>{items}</span>
                <FaAngleDown className="text-[16px] transition-transform duration-300 hover:rotate-180" />
              </li>
            ))}
          </ul>

          {/* Mobile Actions */}
          <div className="px-8 py-6 border-t border-gray-700">
            <div className="h-[54px] w-full bg-[#1E8A8A] rounded-full flex items-center justify-center gap-3 px-6 cursor-pointer hover:bg-[#156d6d] transition-all duration-300">
              <h3 className="text-[18px] font-semibold text-white">
               {" Let's Talk"}
              </h3>
              <div className="h-[40px] w-[40px] flex items-center justify-center rounded-full bg-black">
                <IoMdArrowRoundForward className="text-white text-[22px]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black bg-opacity-60 z-30 transition-opacity duration-300 ease-in-out"
        />
      )}
    </>
  );
};

export default MobileSidebar;