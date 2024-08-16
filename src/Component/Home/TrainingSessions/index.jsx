/* eslint-disable no-unused-vars */
import React from "react";
import Banner1 from "../../../assets/Home/TrainingSessions/banner-1.jpg";
import Image1 from "../../../assets/Home/TrainingSessions/Image1.jpg";
import Image2 from "../../../assets/Home/TrainingSessions/Image2.jpg";
import Image3 from "../../../assets/Home/TrainingSessions/Image3.jpg";
import Image4 from "../../../assets/Home/TrainingSessions/Image4.jpg";
import { FaRegCheckSquare } from "react-icons/fa";
import { motion } from "framer-motion";
const fadeVariants = {
  initial: {
    opacity: 0,
    x: -200,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.6,
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
      delay: 0.6,
      ease: "easeIn",
      duration: 0.8,
    },
  },
};

function index() {
  return (
    <div
      className="w-full h-full flex items-center  bg-fixed bg-cover py-10 bg-center overflow-hidden bg-gradient-to-tr from-red-700/70 to-blue-950 "
      style={{
        backgroundImage: `linear-gradient(to right, rgba(220, 38, 38, 0.7), rgba(30, 64, 175, 0.95)), url(${Banner1})`,
      }}
    >
      <div className="container lg:flex gap-10">
        {/* Image Section */}
          <motion.div
          variants={fadeVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className="flex gap-5 lg::w-1/2"
        >
          <div className="flex flex-col gap-5">
            <img src={Image1} alt="" />
            <img src={Image2} alt="" />
          </div>
          <div className="flex flex-col gap-5">
            <img src={Image3} alt="" />
            <img src={Image4} alt="" />
          </div>
        </motion.div>
        {/* Right Side */}
        <motion.div
          variants={titleVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className="lg:w-1/2 space-y-5 lg:mt-0 mt-4">
          <h1 className="text-3xl font-bold">Training Sessions</h1>
          <h3>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took.
          </h3>
          {/* First Plan */}
          <div className="flex gap-2">
            <div className="mt-1">
              <FaRegCheckSquare className="text-3xl" />
            </div>
            <div className="">
              <h4 className="font-bold text-2xl">Free weekly course</h4>
              <p className="text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been.
              </p>
            </div>
          </div>
          {/* Second Plan */}
          <div className="flex gap-2">
            <div className="mt-1">
              <FaRegCheckSquare className="text-3xl" />
            </div>
            <div className="">
              <h4 className="font-bold text-2xl">
                Discount up to 50% for merch
              </h4>
              <p className="text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been.
              </p>
            </div>
          </div>
          {/* Third Plan */}
          <div className="flex gap-2">
            <div className="mt-1">
              <FaRegCheckSquare className="text-3xl" />
            </div>
            <div className="">
              <h4 className="font-bold text-2xl">24/7 Premium Support</h4>
              <p className="text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been.
              </p>
            </div>
          </div>

          <div className="">
            <button className="bg-orange-700  lg:text-base text-sm w-fit px-6 py-3 text-white hover:bg-white hover:text-orange-600 transition-all duration-300">
              Join Our Club
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default index;
