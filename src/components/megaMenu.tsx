"use client";

import React, { useState } from "react";
const homepages = [
  {
    id: 1,
    title: "Homepage - 01",
    image: "/images/homepage-01.jpg",
    isNew: false,
  },
  {
    id: 2,
    title: "Homepage - 02",
    image: "/images/homepage-02.jpg",
    isNew: false,
  },
  {
    id: 3,
    title: "Homepage - 03",
    image: "/images/homepage-03.jpg",
    isNew: false,
  },
  {
    id: 4,
    title: "Homepage - 04",
    image: "/images/homepage-04.jpg",
    isNew: false,
  },
  {
    id: 5,
    title: "Homepage - 05",
    image: "/images/homepage-05.jpg",
    isNew: false,
  },
  {
    id: 6,
    title: "Homepage - 06",
    image: "/images/homepage-06.jpg",
    isNew: false,
  },
  {
    id: 7,
    title: "Homepage - 07",
    image: "/images/homepage-07.jpg",
    isNew: false,
  },
  {
    id: 8,
    title: "Homepage - 08",
    image: "/images/homepage-08.jpg",
    isNew: true,
  },
  {
    id: 9,
    title: "Homepage - 09",
    image: "/images/homepage-09.jpg",
    isNew: true,
  },
  {
    id: 10,
    title: "Homepage - 10",
    image: "/images/homepage-10.jpg",
    isNew: true,
  },
];

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MegaMenu = ({ isOpen, onClose }: MegaMenuProps) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />

      {/* Mega Menu */}
      <div className="absolute top-full left-0 right-0 bg-white shadow-2xl z-50 py-12 px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {homepages.map((homepage) => (
              <div
                key={homepage.id}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredId(homepage.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="relative bg-gray-50 rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-[#1E8A8A] transition-all duration-300 ease-in-out">
                  {/* New Badge */}
                  {homepage.isNew && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        New
                      </span>
                    </div>
                  )}

                  {/* Image Container */}
                  <div className="relative aspect-[4/5] overflow-hidden">
                    {/* Replace with actual images */}
                    <div className="w-full h-full bg-gradient-to-br from-[#0f2829] via-[#1E8A8A] to-[#0f2829] p-4">
                      <div className="w-full h-full bg-white/10 rounded-lg"></div>
                    </div>
                    
                    {/* Hover Overlay */}
                    <div
                      className={`absolute inset-0 bg-[#1E8A8A] bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 ease-in-out ${
                        hoveredId === homepage.id ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </div>

                  {/* Scale effect on hover */}
                  <div className="absolute inset-0 transform group-hover:scale-105 transition-transform duration-300 ease-in-out" />
                </div>

                {/* Title */}
                <h3 className="text-center mt-4 text-base font-medium text-gray-800 group-hover:text-[#1E8A8A] transition-colors duration-300">
                  {homepage.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MegaMenu;