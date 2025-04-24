/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";
import img from "../../../assets/Home/Hero/sports-background-international-sports-day-illustration-graphic-design-for-the-decoration-of-gift-certificates-banners-and-flyer-vector.jpg";

const fadeVariants = {
  initial: { opacity: 0, x: -100 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.2, ease: "easeOut", duration: 0.8 },
  },
};

const titleVariants = {
  initial: { opacity: 0, x: 100 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.2, ease: "easeOut", duration: 0.8 },
  },
};

const HeroSection = () => {
  return (
    <main
      className="relative h-screen w-full bg-cover bg-center flex items-center justify-center px-6 md:px-12"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      {/* Optional overlay for readability */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      <div className="relative z-10 flex flex-col lg:flex-row items-center w-full max-w-7xl gap-10">
        {/* Left Section */}
        <motion.div
          variants={fadeVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="lg:w-1/2 w-full text-center lg:text-left"
        >
          <HeaderContent />
          <Description />
          <GetStartedButton />
        </motion.div>

        {/* Right Section (currently empty, you can add HeroImages later) */}
        <motion.div
          variants={titleVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="lg:w-1/2 w-full"
        >
          {/* <HeroImages /> */}
        </motion.div>
      </div>
    </main>
  );
};

const HeaderContent = () => (
  <div className="uppercase font-extrabold text-white">
    <span className="text-3xl md:text-4xl lg:text-5xl">Be the</span>
    <br />
    <span className="text-4xl md:text-5xl lg:text-6xl text-red-500">
      Best Athlete
    </span>
    <div className="text-2xl md:text-3xl lg:text-4xl">
      <span className="text-orange-300">That </span>
      <span>you can be</span>
    </div>
  </div>
);

const Description = () => (
  <p className="mt-4 text-white text-sm md:text-base lg:text-lg max-w-lg">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry&apos;s standard dummy text ever since the
    1500s.
  </p>
);

const GetStartedButton = () => {
  const navigate = useNavigate();

  return (
    <button
      className="mt-6 border border-white py-2 px-5 text-sm md:text-base text-white hover:bg-orange-600 transition-all duration-300"
      onClick={() => navigate("/")}
    >
      Get Started
    </button>
  );
};

export default HeroSection;
