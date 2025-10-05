"use client";
import Image from "next/image";
import { GoPackage } from "react-icons/go";
import { FiArrowUpRight } from "react-icons/fi";
import { FcDownRight } from "react-icons/fc";
const CompanyAboutSection = () => {
  return (
    <section className="bg-[#d8e5e5]  mx-[16px] rounded-2xl py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        
          <div className="relative">
            {/* Image */}
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about.webp"
                width={720}
                height={500}
                alt="Business meeting"
                className="w-full h-[500px] lg:h-[720px] object-cover"
              />
            </div>

            <div className="absolute bottom-8 left-8 bg-white rounded-2xl shadow-xl p-6 w-72 bg-white/60 backdrop-blur-sm rounded-xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Business Progress
              </h3>
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700 font-medium">Revenue</span>
                  <span className="text-gray-900 font-bold">82%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-teal-600 h-2 rounded-full"
                    style={{ width: "82%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700 font-medium">
                    Satisfaction
                  </span>
                  <span className="text-gray-900 font-bold">90%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-teal-600 h-2 rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side*/}
          <div className="lg:pl-8">
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <GoPackage className="w-5 h-5 text-teal-600" />
                <span className="text-sm font-bold tracking-widest uppercase text-teal-600">
                  GET TO KNOW US
                </span>
              </div>

              <h2 className="text-[48px] sm:text-5xl lg:text-[48px] font-medium text-gray-900 leading-tight">
                Driving Innovation and Excellence for Sustainable Corporate
                Success Worldwide.
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-[24px] font-semibold text-gray-900 mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-600 mb-6 text-[16px]">
                  our mission is empower businesses through innovate best
                  solution, exceptional service.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <FcDownRight />
                    <span className="text-gray-700">
                      Innovation & Excellence
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FcDownRight />
                    <span className="text-gray-700">Exceptional Customer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FcDownRight />
                    <span className="text-gray-700">Business Growth</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-[24px] font-semibold text-gray-900 mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-600 mb-6 text-[16px]">
                  Our vision is to become a global leader in providing
                  transformative business solutions.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <FcDownRight />
                    <span className="text-gray-700">Global Leadership</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FcDownRight />
                    <span className="text-gray-700">Transformative Impact</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FcDownRight />
                    <span className="text-gray-700">Sustainable Success</span>
                  </li>
                </ul>
              </div>
            </div>
            <button className="w-full group bg-teal-600  text-white text-[16px] font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-3 ">
              Learn More About Us
              <div className="h-[30px] w-[30px] flex items-center justify-center rounded-full bg-black">
                <FiArrowUpRight className="w-5 h-5 group-hover:rotate-50 transition-transform duration-300" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyAboutSection;
