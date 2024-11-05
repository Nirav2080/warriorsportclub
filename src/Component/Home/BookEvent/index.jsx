/* eslint-disable no-unused-vars */
import React from "react";
import BasketBall from "../../../assets/Home/Event/BasketBall-ManImage.png";
import eventImage from "../../../assets/Home/Event/Event_image.png";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const fadeVariants = {
  initial: {
    opacity: 0,
    x: -200,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
      ease: "easeIn",
      duration: 0.8,
    },
  },
};

function Index() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/admission");
  };

  console.log(handleNavigation);

  return (
    <div className="my-20 md:px-12">
      {/* Event Section */}
      <motion.div
        variants={fadeVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        className="bg-[#262261] mx-auto w-[90%] py-10 px-5 flex flex-col md:flex-row gap-10 mb-20 overflow-hidden"
      >
        {/* Left Side */}
        <div className="flex flex-col md:flex-row md:w-[40%] gap-4 md:items-center">
          {/* Image Part */}
          <div className="bg-gray-200 p-3 w-20 h-20 md:w-28 md:h-28 flex items-center justify-center rounded-full">
            <img src={eventImage} alt="Event-Image" className="w-3/4" />
          </div>
          {/* Text Part */}
          <div className="flex flex-col space-y-2 md:space-y-4">
            <div className="uppercase text-lg md:text-xl">
              <div>Brilliant Sports Club</div>
              <span>Amenities</span>
            </div>
            <button
              className="text-red-200 cursor-pointer"
              onClick={handleNavigation}
            >
              &gt; Book A Tour
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col md:flex-row md:w-[60%] items-center gap-4">
          {/* Image Section */}
          <div className="w-full md:w-1/3 bg-gradient-to-tr from-red-700/70 to-blue-950 rounded-tr-3xl ">
            <img
              src={BasketBall}
              alt="BasketBallImage"
              className="md:h-[250px] w-full object-cover lg:object-top"
            />
          </div>
          {/* Text Section */}
          <div className="border-red-700 border border-l-0 w-full md:w-2/3 p-4 text-lg md:text-base">
            <span className="font-bold">Event :</span>
            <p className="text-gray-300 mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text.
            </p>
          </div>
          {/* Arrow */}
          <div className="bg-red-500 py-2 px-3 relative md:-left-8 cursor-pointer md:block hidden">
            &gt;
          </div>
        </div>
      </motion.div>

      {/* Next Section */}
    </div>
  );
}

export default Index;
