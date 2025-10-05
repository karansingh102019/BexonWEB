import { solutions } from "@/data/data";
import Image from "next/image";
import React from "react";
import { BsBoxFill } from "react-icons/bs";
import { FcDownRight } from "react-icons/fc";
import { IoMdArrowRoundForward } from "react-icons/io";

export default function Solutions() {
  return (
    <section className=" bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-teal-700 font-medium mb-4">
            <BsBoxFill className="text-[#1E8A8A]" />
            <span className="uppercase text-[14px] font-bold tracking-wider">
              OUR SOLUTIONS
            </span>
          </div>
          <h1 className="text-[48px] md:text-5xl font-medium text-gray-900 leading-tight">
            Tailor Business Solutions
            <br />
            for Corporates.
          </h1>
        </div>

        {/* Solutions Grid */}
        <div className="space-y-8 mb-12">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className=" relative bg-white rounded-2xl p-8 shadow-sm group hover:bg-[#009689] hover:shadow-md transition-shadow duration-300 "
            >
              <Image
                src={solution.imagesURL}
                alt="Hover"
                width={150}
                height={150}
                className=" opacity-0  group-hover:opacity-100 transition-opacity duration-900 ease-in-out absolute -top-15 left-[38%] w-[280px] h-[280px] z-100 object-cover rounded-lg shadow-xl"
              ></Image>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                {/* Icon */}
                <div className="flex gap-5">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-[#e6f2f2] group-hover:bg-[#b6d9d9] rounded-full flex items-center justify-center">
                      {solution.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <div className="md:w-2/3">
                    <h3 className="text-[24px] font-semibold text-gray-900 group-hover:text-white">
                      {solution.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <div className="md:w-1/3">
                  <p className="text-gray-600 text-[16px] font-medium leading-relaxed group-hover:text-white">
                    {solution.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Services Button */}
        <div className="flex justify-center mt-20">
          <div className="h-[55px] w-[170px] bg-[#1E8A8A] rounded-[40px] group flex items-center justify-center gap-[12px] py-[5px] pl-[25px] pr-[5px]">
            <h3 className="text-[16px] font-semibold text-white">Learn More</h3>
            <div className="h-[38px] w-[38px] flex items-center justify-center rounded-full bg-black">
              <IoMdArrowRoundForward className="text-white text-[20px] -rotate-30 group-hover:rotate-5 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
