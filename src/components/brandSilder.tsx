"use client";

import { images } from "@/data/data";
import Image from "next/image";
import React from "react";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";

const BrandSlider = () => {
  return (
    <section className="bg-[#ecf0f0] mx-[16px] my-[16px] rounded-2xl">
      <div className="w-full h-[140px] sm:h-[160px] md:h-[180px] flex bg-[#1e8a8a] rounded-2xl px-[16px] sm:px-[24px] md:px-[32px] py-[24px] sm:py-[32px] md:py-[40px]">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          freeMode={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          modules={[Autoplay, FreeMode]}
          className="mySwiper flex flex-row"
        >
          {images.map((item, index) => (
            <SwiperSlide
              key={index}
              className="h-[90px] sm:h-[100px] md:h-[120px] w-[200px] sm:w-[220px] md:w-[250px] mx-[10px] border border-white/20 rounded-2xl"
            >
                
              <div className="relative w-[120px] sm:w-[140px] md:w-[152px] h-[48px] sm:h-[54px] md:h-[60px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Image
                  src={item.logo}
                  alt={`Brand logo ${index + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BrandSlider;