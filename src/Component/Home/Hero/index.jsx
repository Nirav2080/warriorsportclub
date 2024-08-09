/* eslint-disable no-unused-vars */
import React from "react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

import slider1 from "../../../assets/Slider-1.jpg";
import slider2 from "../../../assets/Slider-2.jpg";

import slider3 from "../../../assets/Slider-3.jpg";
import slider4 from "../../../assets/Slider-4.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SwiperData = [
  {
    id: 1,
    img: slider1,
    alt: "Slider 1",
    heading: "Our main Facilities",
    text: "Discover our exceptional facilities and services at Warrior Sports Club.",
  },
  {
    id: 2,
    img: slider2,
    alt: "Slider 2",
    heading: "Our main Facilities",
    text: "Discover our exceptional facilities and services at Warrior Sports Club.",
  },
  {
    id: 3,
    img: slider3,
    alt: "Slider 1",
    heading: "Premier Basketball Courts",
    text: "Shoot some hoops on our professionally designed courts, perfect for both casual games and competitive tournaments.",
  },
  {
    id: 4,
    img: slider4,
    alt: "Slider 1",
    heading: "Premier Basketball Courts",
    text: "Shoot some hoops on our professionally designed courts, perfect for both casual games and competitive tournaments.",
  },
];

import bgImage from "../../../assets/HeroBackground.webp";
function index() {
  return (
    <div className="">
      <div className="flex justify-center py-10 overflow-hidden">
        <Swiper
          className="h-auto md:h-full "
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          loop={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          slidesPerView={1}
          slidesPerGroup={1}
          modules={[Navigation, Pagination, A11y, Autoplay]}
          autoplay={{ delay: 300000 }}
        >
          {SwiperData?.map((data, index) => (
            <SwiperSlide
              className="w-full flex justify-center relative"
              key={index}
            >
              <img
                src={data.img}
                alt={data.alt}
                loading="lazy"
                className="h-screen w-full object-cover z-10"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 z-20 bg-black bg-opacity-60 flex items-center justify-center">
                {/* Text Overlay */}
                <div className="text-center p-10 font-bold text-white">
                  <h2 className="text-4xl font-bold mb-4">{data.heading}</h2>
                  <p className="text-lg">{data.text}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Custom Arrow */}
        <div className="swiper-button-prev-custom absolute left-0 top-[70%] transform  bg-white text-black p-2 md:text-3xl text-xl rounded-full cursor-pointer z-10">
          <MdKeyboardArrowLeft />
        </div>
        <div className="swiper-button-next-custom absolute right-0 top-[70%] transform  bg-white text-black p-2 md:text-3xl text-xl rounded-full cursor-pointer z-10">
          <MdKeyboardArrowRight />
        </div>
      </div>
    </div>
  );
}

export default index;
