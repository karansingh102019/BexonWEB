import { expertiseCards } from '@/data/data';
import React from 'react';
import { BsBox } from 'react-icons/bs';
import ExpertiseCard from './card';


const BusinessExpertise = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <BsBox className="w-5 h-5 text-teal-600" />
            <span className="text-[14px] font-bold tracking-widest uppercase text-medium text-[#1e8a8a]">
              CHOOSE THE BEST
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] xl:text-6xl font-medium text-gray-900">
            Empowering Business
            <br />
            with Expertise.
          </h2>
        </div>

        {/* Cards - Horizontal Layout */}
        <div className="flex flex-col sm:flex-row gap-10 w-full items-center justify-center">
          {expertiseCards.map((card, index) => (
            <ExpertiseCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessExpertise;