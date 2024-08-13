/* eslint-disable no-unused-vars */
import React from "react";
import Fighter from "../../../assets/Home/Gallery/Fighter.jpg";
import Hockey from "../../../assets/Home/Gallery/Hockey.jpg";

import BasketBall1 from "../../../assets/Home/Gallery/BasketBall-1.jpg";

import BasketBall2 from "../../../assets/Home/Gallery/BasketBall-2.jpg";

import Rugby from "../../../assets/Home/Gallery/Rugby.jpg";
import Judo from "../../../assets/Home/Gallery/Judo.jpg";

const ImageData = [
  {
    id: 1,
    title: "Fighter",
    image: Fighter,
  },
  {
    id: 2,
    title: "Hockey",
    image: Hockey,
  },
  {
    id: 3,
    title: "BasketBall",
    image: BasketBall1,
  },
  {
    id: 4,
    title: "BasketBall",
    image: BasketBall2,
  },
  {
    id: 5,
    title: "Rugby",
    image: Rugby,
  },
  {
    id: 6,
    title: "Judo",
    image: Judo,
  },
];

function index() {
  return (
    <div className="container md:flex md:gap-10 gap-5 my-20">
      <div className="md:w-1/3 space-y-8">
        <h1 className="text-3xl font-bold">
          Incredible memories in athletic aim
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s. Lorem Ipsum is simply
          dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry’s.
        </p>
        <button className="bg-orange-600  lg:text-base text-sm w-fit px-6 py-3 text-white hover:bg-white hover:text-orange-600 transition-all duration-300">
          Join Our Club
        </button>
      </div>

      <div className="md:w-2/3 grid md:grid-cols-3 grid-cols-2 md:grid-rows-2 grid-rows-3 gap-6 md:mt-0 mt-5">
        {ImageData.map((data) => (
          <div className="relative group overflow-hidden" key={data.id}>
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-orange-500/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            {/* <h3 className="absolute inset-x-0 flex items-center justify-center  bottom-0  text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {data.title}
            </h3> */}
            <h3 className="absolute inset-0 flex items-center justify-center font-bold text-white text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {data.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default index;
