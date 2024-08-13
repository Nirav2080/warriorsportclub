/* eslint-disable no-unused-vars */
import React from "react";
import Counter from "../../Common/Counter/Counter";
import bgImage from "../../../assets/Home/Hero/HeroBGBackground.png";
import runImage from "../../../assets/Home/Hero/running.png";

const countersData = [{ countTo: 100, duration: 1000 }];

const HeroSection = () => {
  return (
    <main className="max-h-screen w-full  mx-auto  flex items-center container lg:pt-40 pt-56">
      <div className="flex flex-col lg:flex-row items-center w-full gap-10">
        {/* Left Side */}
        <div className="lg:w-1/2 w-full text-center lg:text-left">
          <HeaderContent />
          <Description />
          <GetStartedButton />
        </div>

        {/* Right Side */}
        <div className="relative w-full lg:w-1/2 h-80 lg:h-auto bg-gradient-to-tr from-red-700/70 to-blue-950 rounded-tr-[50px] md:rounded-tr-[100px] flex items-center justify-center">
          <HeroImages />
        </div>
      </div>
    </main>
  );
};

const HeaderContent = () => (
  <div className="uppercase font-bold">
    <span className="md:text-4xl text-2xl">Be the </span>
    <br />
    <span className="md:text-5xl text-3xl text-red-600">best ATHLETE</span>
    <div className="md:text-5xl text-2xl">
      <span className="text-xl">THAT</span>
      <span>You can be</span>
    </div>
  </div>
);

const Description = () => (
  <p className="mt-5 text-sm md:text-base">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry&apos;s standard dummy text ever since the
    1500s, when an unknown printer took.
  </p>
);

const GetStartedButton = () => (
  <div>
    <button
      className="mt-4 w-fit border border-white py-2 px-4 md:px-6 text-sm md:text-base hover:bg-orange-600 hover:text-white transition-all duration-300 hover:border-orange-500 md:mb-0 mb-14"
      type="button"
    >
      Get Started
    </button>
  </div>
);

const HeroImages = () => (
  <div className="relative flex items-center justify-center h-full w-full">
    <img
      src={bgImage}
      alt="Background Image for Hero Section"
      className="z-10 max-h-full"
    />
    <CounterComponent />
  </div>
);

const CounterComponent = () => (
  <div className="bg-white -top-12 md:-top-16 h-28 w-28 md:h-36 md:w-36 absolute right-5 md:right-10">
    {countersData.map((data, index) => (
      <div
        className="flex text-[#5700ff] flex-col justify-center items-center h-full"
        key={index}
      >
        <div>
          <img src={runImage} alt="Running Icon" />
        </div>
        <div className="flex items-center">
          <Counter countTo={data.countTo} duration={data.duration} />
          <span className="text-2xl md:text-3xl"> K+</span>
        </div>
        <div className="text-xs md:text-base">Member</div>
      </div>
    ))}
  </div>
);

export default HeroSection;
