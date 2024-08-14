// eslint-disable-next-line no-unused-vars
import React from "react";
import face1 from "../../../assets/Home/Swiper/face-1.jpg";
import face2 from "../../../assets/Home/Swiper/face-2.jpg";
import face3 from "../../../assets/Home/Swiper/face-3.jpg";
import face4 from "../../../assets/Home/Swiper/face-4.jpg";
import face5 from "../../../assets/Home/Swiper/face-5.jpg";
import { IoMdStar } from "react-icons/io";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const RolesData = [
  {
    id: 1,
    img: face2,
    roles: "Manager",
    name: "Dennis Perez",
    descriptions:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 2,
    img: face3,
    roles: "Book-keeper",
    name: "Jane Smith",
    descriptions:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 3,
    img: face1,
    roles: "Viewer",
    name: "John Doe",
    descriptions:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 4,
    img: face4,
    roles: "Prepare",
    name: "Emily Brown",
    descriptions:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 5,
    img: face5,
    roles: "Employee",
    name: "Michael Johnson",
    descriptions:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

function index() {
  return (
    <div className="container md:mt-0 mt-10  py-10">
      <div className="text-center md:space-y-0 space-y-3">
        <h1 className="text-orange-600 text-2xl md:text-4xl font-bold ">Testimonials</h1>
        <p className="md:w-2/3 mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text ever
          since the 1500s, when an unknown printer took.
        </p>
      </div>

      {/* Card Section  */}
      <div className="md:px-10 h-full mt-10">
        <Swiper
          loop={true}
          className="h-full"
          slidesPerView={3}
          spaceBetween={25}
          centeredSlidesBounds={true}
          modules={[Navigation, Pagination, A11y, Autoplay]}
          autoplay={{ delay: 30000 }}
          breakpoints={{
            1024: {
              slidesPerView: 2, // 2 slides for tablet view
              loop: true,
            },
            768: {
              slidesPerView: 2, // 2 slides for tablet view
              loop: true,
            },
            0: {
              slidesPerView: 1, // 1 slide for mobile view
              loop: true,
            },
          }}
        >
          {RolesData.map((data) => (
            <SwiperSlide
              className="border text-lg border-gray-300 rounded-lg p-5 drop-shadow-2xl shadow-white"
              key={data.id}
            >
              <div className="flex gap-5">
                <div className="flex items-center">
                  <img
                    src={data.img}
                    alt={data.name}
                    className="w-20 bg-center object-cover h-20"
                  />
                </div>
                <div className="flex flex-col w-[70%] space-y-5">
                  <div className="flex">
                    <span>
                      <IoMdStar className="text-yellow-500" />
                    </span>
                    <span>
                      <IoMdStar className="text-yellow-500" />
                    </span>
                    <span>
                      <IoMdStar className="text-yellow-500" />
                    </span>
                    <span>
                      <IoMdStar className="text-yellow-500" />
                    </span>
                    <span>
                      <IoMdStar className="text-yellow-500" />
                    </span>
                  </div>
                  <div className="">
                    <h1 className="md:text-sm text-xs">{data.descriptions} </h1>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-bold">{data.roles} </h3>
                    <span className="text-sm">{data.name} </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default index;
