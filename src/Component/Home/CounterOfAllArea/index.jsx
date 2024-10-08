// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import { GoTrophy } from "react-icons/go";
import { IoManOutline } from "react-icons/io5";
import { LuMedal } from "react-icons/lu";
import Counter from "../../Common/Counter/Counter";
import { motion } from "framer-motion";
const HeadingVariants = {
  initial: {
    opacity: 0,
    x: 200,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
      ease: "easeIn",
      duration: 0.6,
    },
  },
};

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

const MainData = [
  {
    id: 1,
    icon: <FaRegThumbsUp className="w-16 h-16 text-orange-600" />,
    number: "5K",
    descriptions: "Members Active",
  },
  {
    id: 2,
    icon: <LuMedal className="w-16 h-16  text-orange-600 " />,
    number: "20",
    descriptions: "Games Cover",
  },
  {
    id: 3,
    icon: <IoManOutline className=" w-16 h-16 text-orange-600" />,
    number: "120",
    descriptions: "Professional Coach",
  },
  {
    id: 4,
    icon: <GoTrophy className="w-16 h-16 text-orange-600" />,
    number: "13",
    descriptions: "Years of Experience",
  },
];

const countersData = [
  {
    id: 1,
    countTo: 5000,
    duration: 1000,
  },
  {
    id: 2,
    countTo: 20,
    duration: 1000,
  },
  {
    id: 3,
    countTo: 120,
    duration: 1000,
  },
  {
    id: 4,
    countTo: 13,
    duration: 1000,
  },
];

function Index() {
  return (
    <main className="container my-28 overflow-hidden">
      <motion.div
        variants={HeadingVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        className=""
      >
        <h1 className="text-center md:text-4xl text-2xl text-orange-600 font-bold capitalize">
          our sports arena in just numbers
        </h1>
        <p className="text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </motion.div>

      <motion.div
        variants={fadeVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        className="grid grid-cols-2 lg:grid-cols-4 my-10 lg:gap-0 gap-4"
      >
        {MainData.map((data) => {
          const counter = countersData.find(
            (counter) => counter.id === data.id
          );
          return (
            <div
              className="flex md:gap-10 gap-5 lg:justify-center items-center w-full mx-auto border-r-4 md:px-3 pr-3"
              key={data.id}
            >
              <h1>{data.icon}</h1>
              <div>
                <h1 className="md:text-xl text-lg font-semibold md:font-bold flex gap-2">
                  <Counter
                    countTo={counter.countTo}
                    duration={counter.duration}
                  />{" "}
                  +
                </h1>
                <h4 className="md:text-lg text-sm">{data.descriptions}</h4>
              </div>
            </div>
          );
        })}
      </motion.div>
    </main>
  );
}

export default Index;
