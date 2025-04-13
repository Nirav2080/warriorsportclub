/* eslint-disable no-unused-vars */
import React from "react";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import img from "../../../assets/Home/Hero/sports-background-international-sports-day-illustration-graphic-design-for-the-decoration-of-gift-certificates-banners-and-flyer-vector.jpg";
const fadeVariants = {
  initial: {
    opacity: 0,
    x: -200,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3,
      ease: "easeIn",
      duration: 0.8,
    },
  },
};

const titleVariants = {
  initial: {
    opacity: 0,
    x: 200,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3,
      ease: "easeIn",
      duration: 0.8,
    },
  },
};

const countersData = [{ countTo: 100, duration: 1000 }];


  const FooterImg = {
    backgroundImage: `url(${img})`,
    // backgroundPosition: "bottom",
    // backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };

const HeroSection = () => {
  return (
    <main
      className="z-50 h-full w-full flex items-center lg:pt-40 lg:pb-72 pt-56 overflow-hidden"
      style={{ ...FooterImg, backgroundPositionX: "left" }}
    >
        <div className="flex flex-col lg:flex-row items-center w-full gap-10">
          {/* Left Side */}
          <motion.div
            variants={fadeVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className="lg:w-1/2 w-full text-center lg:text-left"
          >
            <HeaderContent />
            <Description />
            <GetStartedButton />
          </motion.div>

          {/* Right Side */}
          <motion.div
            variants={titleVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            // className="relative w-full lg:w-1/2 h-80 lg:h-auto bg-gradient-to-tr from-red-700/70 to-blue-950 rounded-tr-[50px] md:rounded-tr-[100px] flex items-center justify-center"
          >
            {/* <HeroImages /> */}
          </motion.div>
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

const GetStartedButton = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/");
  };
  return (
    <div>
      <button
        className="mt-4 w-fit border border-white py-2 px-4 md:px-6 text-sm md:text-base hover:bg-orange-600 hover:text-white transition-all duration-300 hover:border-orange-500 md:mb-0 mb-14"
        type="button"
        onClick={handleNavigation}
      >
        Get Started
      </button>
    </div>
  );
};
// const HeroImages = () => (
//   <div className="relative flex items-center justify-center h-full w-full">
//     <img
//       src={bgImage}
//       alt="Background Image for Hero Section"
//       className="z-10 max-h-full"
//     />
//     <CounterComponent />
//   </div>
// );

// const CounterComponent = () => (
//   <div className="bg-white -top-12 md:-top-16 h-28 w-28 md:h-36 md:w-36 absolute right-5 md:right-10">
//     {countersData.map((data, index) => (
//       <div
//         className="flex text-[#5700ff] flex-col justify-center items-center h-full"
//         key={index}
//       >
//         <div>
//           <img src={runImage} alt="Running Icon" />
//         </div>
//         <div className="flex items-center">
//           <Counter countTo={data.countTo} duration={data.duration} />
//           <span className="text-2xl md:text-3xl"> K+</span>
//         </div>
//         <div className="text-xs md:text-base">Member</div>
//       </div>
//     ))}
//   </div>
// );

export default HeroSection;
