import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsBoxFill } from "react-icons/bs";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoPlay } from "react-icons/io5";
import { IoMdArrowRoundForward } from "react-icons/io";

const HeroBanner = () => {
  return (
    <>
      <section className="pt-[125px] pb-[55px] bg-[#D8E5E5] mx-[16px] rounded-2xl">
        <div className="container mx-auto px-[16px]">
          <div className="flex flex-col lg:flex-row gap-[40px] justify-between lg:px-10 items-center lg:items-start">
            {/* left side */}
            <div className="w-full lg:w-auto space-y-[16px] py-[40px] px-[20px] lg:px-[40px]">
              <span className="flex items-center gap-[8px] text-gray-700">
                <BsBoxFill className="text-[#1E8A8A]" />
                <h2 className="text-[18px] font-semibold uppercase">
                  Get to Know Us
                </h2>
              </span>

              {/* Main Heading */}
              <h1 className="text-[48px] lg:text-[84px] font-medium text-gray-900 leading-[1.1]">
                Driving
                <br />
                Excellence
                <br />
                Through
                <br />
                <span className="inline-block relative group">
                  <Link href="">
                    <Image
                      src="/images/title-img.webp"
                      alt="Title decoration"
                      width={148}
                      height={68}
                      className=" hidden sm:block rounded-xl absolute -top-[76px] -right-[56px] z-1 group-hover:brightness-70"
                    />
                    <IoPlay className=" hidden sm:block absolute z-[10000] text-[24px] -top-[48px] right-[4px] text-white group-hover:scale-125 transition duration-300" />
                  </Link>
                  Evolution &amp;
                </span>
                <br />
                Trust.
              </h1>

              <div className="flex flex-col sm:flex-row gap-[20px] items-start sm:items-center mt-[40px]">
                <div className="h-[55px] w-[170px] bg-[#1E8A8A] rounded-[40px] group flex items-center justify-center gap-[12px] py-[5px] pl-[25px] pr-[5px]">
                  <h3 className="text-[16px] font-semibold text-white">
                    Learn More
                  </h3>
                  <div className="h-[38px] w-[38px] flex items-center justify-center rounded-full bg-black">
                    <IoMdArrowRoundForward className="text-white text-[20px] -rotate-30 group-hover:rotate-5 transition-transform duration-300" />
                  </div>
                </div>

                <div className="flex gap-[8px] items-center">
                  <BiSolidPhoneCall className="w-[26px] h-[26px]" />
                  <span className="slide-right relative cursor-pointer text-[24px] font-semibold">
                    1-888-452-1505
                    <span className="line absolute bottom-0 left-0 h-[2px] bg-black w-0"></span>
                  </span>
                </div>
              </div>
            </div>

            {/* right side */}
            <div className="w-full lg:w-[704px] h-[500px] lg:h-[653px] flex justify-center lg:justify-end relative">
              <div className="w-full max-w-[507px] h-full relative overflow-hidden z-100">
                <Image
                  src="/images/hero-img.webp"
                  alt="Hero-image"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />

                <div className="hidden lg:block absolute animate-scroll-vertical -right-[100px]">
                  <h1 className="text-[72px] font-extrabold text-white opacity-40 transform -rotate-90 origin-center whitespace-nowrap mb-[280px]">
                    Bexor //
                  </h1>
                  <h1 className="text-[72px] font-extrabold text-white opacity-40 transform -rotate-90 origin-center whitespace-nowrap mb-[280px]">
                    Bexor //
                  </h1>
                  <h1 className="text-[72px] font-extrabold text-white opacity-40 transform -rotate-90 origin-center whitespace-nowrap mb-[280px]">
                    Bexor //
                  </h1>
                  <h1 className="text-[72px] font-extrabold text-white opacity-40 transform -rotate-90 origin-center whitespace-nowrap mb-[280px]">
                    Bexor //
                  </h1>
                </div>

                <div className="h-[180px] w-[170px] lg:h-[209px] lg:w-[198px] absolute left-[20px] bottom-[20px] flex justify-center items-center bg-white/10 backdrop-blur-sm rounded-xl">
                  <Image
                    src="/images/bar-growth.webp"
                    alt="bar-image"
                    width={158}
                    height={169}
                  />
                </div>
              </div>

              <div className="hidden lg:block absolute left-[8px] transform -rotate-90 bottom-[240px] z-1000">
                <h2 className="text-[24px] font-semibold text-gray-800 mb-[2px]">
                  Karan Singh Negi
                </h2>
                <h2 className="text-[14px] font-medium text-gray-600">
                  CEO & Founder
                </h2>
                <span className="absolute flex items-center justify-center -left-[12px] top-[20px]">
                  <span className="absolute w-[8px] h-[8px] bg-[#1E8A8A] animate-pulse rounded-full"></span>
                  <span className="absolute w-[10px] h-[10px] bg-[#1E8A8A] opacity-50 animate-ping rounded-full"></span>
                </span>
              </div>

              <div
                className="hidden lg:block w-full bg-white h-[50%] absolute bottom-0 rounded-tl-full "
              ></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroBanner;
