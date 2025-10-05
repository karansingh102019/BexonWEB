import React from "react";
import { IconType } from "react-icons";
import { IoMdArrowRoundForward } from "react-icons/io";

interface ExpertiseCardProps {
  icon: IconType;
  title: string;
  description: string;
}

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <div className="bg-white w-[306px] h-[378px] rounded-xl py-[40px] px-[28px] group hover:bg-[#1e8a8a] transition-all duration-600 ease-in-out">
      <div>
        <div className="w-16 h-16 mb-6 flex items-center justify-center group-hover:animate-bounce">
          <Icon className="w-[88px] h-[88px] text-teal-600 stroke-[1.0] group-hover:text-white" />
        </div>

        <h3 className="text-[24px] font-semibold text-gray-900 mb-4 group-hover:text-white">
          {title}
        </h3>

        <p className="text-gray-600 text-[16px] font-sm leading-relaxed mb-8 group-hover:text-white">
          {description}
        </p>

        <div className="h-[48px] w-[150px] rounded-3xl group flex items-center justify-center gap-3  ">
          <h3 className="text-[18px] font-semibold text-black group-hover:text-white">Read More</h3>
          <div className="h-[30px] w-[30px] flex items-center justify-center rounded-full bg-black">
            <IoMdArrowRoundForward className="text-white text-[20px] -rotate-30 group-hover:text-white group-hover:rotate-5 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseCard;
