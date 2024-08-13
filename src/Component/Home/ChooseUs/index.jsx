/* eslint-disable react-refresh/only-export-components */
// eslint-disable-next-line no-unused-vars
import React from "react";

import icon1 from "../../../assets/Home/ChooseUs/Icon-1.png";
import icon2 from "../../../assets/Home/ChooseUs/Icon-2.png";
import icon3 from "../../../assets/Home/ChooseUs/Icon-3.png";
import { AiOutlineLike } from "react-icons/ai";

import SelcetImage1 from "../../../assets/Home/ChooseUs/SelectImage-1.jpg";
import SelcetImage2 from "../../../assets/Home/ChooseUs/SelectImage-2.jpg";

import SelcetImage3 from "../../../assets/Home/ChooseUs/SelectImage-3.jpg";

const IconeData = [
  {
    id: 1,
    icon: icon1,
    title: "Fun and Enjoyment",
  },
  {
    id: 2,
    icon: icon2,
    title: "Flexible Pricing",
  },
  {
    id: 3,
    icon: icon3,
    title: "Professional Trainer",
  },
];

function index() {
  return (
    <div className="w-full flex md:flex-row flex-col container pt-10">
      {/* Left Side */}
      <div className="md:w-[60%] space-y-5">
        <h3 className="text-red-700 text-xl font-bold">Why Choose Us</h3>
        <h1 className="capitalize md:text-4xl text-3xl md:w-3/4">
          unleash your true sporting potential with our exceptional sports Arena
        </h1>
        <h1 className="text-gray-300 md:w-3/4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard.
        </h1>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 py-10 md:w-[80%] sm:w-fit">
          {IconeData.map((data) => (
            <div className="" key={data.id}>
              <div className="bg-red-200 flex justify-center py-3 rounded-tr-3xl">
                <img
                  src={data.icon}
                  alt={data.title}
                  className="hover:scale-110 transition-all duration-200 "
                />
              </div>
              <h4 className="text-center md:text-sm mt-2 font-semibold text-xl"> {data.title} </h4>
            </div>
          ))}
        </div>

        <div className="flex md:flex-row f md:gap-10 gap-3 pb-7 md:w-[80%]">
          <button className="bg-orange-600 md:w-1/2 w-fit lg:text-base text-sm  px-6 py-3 text-white hover:bg-white hover:text-orange-600 transition-all duration-300">
            Find Out More
          </button>
          <button className="text-orange-500 md:w-1/2 w-fit lg:text-base text-sm  md:px-2 px-6 py-3 bg-white hover:bg-orange-600 hover:text-white transition-all duration-300 ">
            Become A Member
          </button>
        </div>
      </div>
      {/* Right Side */}
      <div className="md:w-[40%] py-20 bg-gradient-to-t from-red-700/70 to-blue-950 h-full rounded-tl-3xl">
        <div className="w-full flex h-full ">
          <div className="w-[70%] h-full relative -left-5">
            <div className="">
              <img
                src={SelcetImage1}
                alt="RugbyImage"
                className="object-cover"
              />
            </div>
            <div className="md:block hidden ">
              <div className="bg-white h-full text-black flex flex-row mt-5 px-2 py-4 gap-2  ">
                <div className="flex items-center">
                  <AiOutlineLike className="text-blue-800 text-4xl" />
                </div>
                <div className="space-y-1 ">
                  <h1 className="font-bold text-lg ">
                    We are ready to serve you.
                  </h1>
                  <p className="text-gray-500">
                    Dui rutrum erat taciti mattis leo pede in ac libero
                    adipiscing condimentum.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[30%] h-full flex flex-col gap-5">
            <div className="h-[30%]">
              <img src={SelcetImage2} alt="BasketBall" />
            </div>
            <div className="h-[70%] right-20">
              <img
                src={SelcetImage3}
                alt="RugbyImage2"
                className="object-cover h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
