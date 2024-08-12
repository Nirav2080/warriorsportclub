/* eslint-disable no-unused-vars */
import React from "react";
import Counter from "../../Common/Counter/Counter";
import bgImage from "../../../assets/Home/Hero/HeroBGBackground.png";
import runImage from "../../../assets/Home/Hero/running.png";

const countersData = [{ countTo: 100, duration: 1000 }];

function index() {
  return (
    <main className="h-screen w-full container ">
      <div className="flex items-center h-full w-full  lg:flex-row flex-col gap-10">
        {/* Left Side */}
        <div className="lg:w-1/2">
          <div className="uppercase font-bold">
            <span className="md:text-4xl text-xl">Be the </span>
            <br />
            <span className="md:text-5xl text-4xl text-red-600">
              best ATHLETE
            </span>
            <div className="md:text-5xl ">
              <span className="text-xl">THAT</span>
              <span>You can be</span>
            </div>
          </div>
          <div className="mt-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took.
          </div>
          {/* Button */}
          <div className="">
            <button
              className="mt-4 w-fit border border-white py-2 px-6 hover:bg-orange-600 hover:text-white transition-all duration-300 hover:border-orange-500"
              type="button"
            >
              Get Started
            </button>
          </div>
        </div>
        {/* Right Side */}
        <div className="h-1/2 relative lg:w-1/2 w-full bg-gradient-to-tr from-red-700/70 to-blue-950 rounded-tr-[100px]">
         
          <div className="relative">
            <div className="absolute flex justify-center w-full h-[280px]">
              <img
                src={bgImage}
                alt="bg-Image-For-HeroSection"
                className=" z-10  "
              />
            </div>
            <div className="bg-white -top-16 h-36 w-36 absolute right-10">
              {countersData.map((data, index) => (
                <div
                  className="flex text-[#5700ff] flex-col justify-center items-center h-full"
                  key={index}
                >
                  <div className="">
                    <img src={runImage} alt="" />
                  </div>
                  <div className="flex items-center">
                    <Counter countTo={data.countTo} duration={data.duration} />
                    <span className="text-3xl"> K+</span>
                  </div>
                  <div className="">Member</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default index;
