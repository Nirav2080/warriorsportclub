// eslint-disable-next-line no-unused-vars
import React from "react";
import image1 from "../../../assets/Home/TopTrainers/1.jpg";
import image2 from "../../../assets/Home/TopTrainers/Image2.jpg";
import image3 from "../../../assets/Home/TopTrainers/Image3.jpg";
import image4 from "../../../assets/Home/TopTrainers/Image4.jpg";

import { motion } from "framer-motion";
const fadeVariants = {
  initial: {
    opacity: 0,
    y: 200,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 * index,
      ease: "linear",
      duration: 1,
    },
  }),
};

const HeadVariants = {
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
const TopTrainers = [
  {
    id: 1,
    name: "JACKY GAYKAWAD",
    image: image1,
    degree: "Black belt 1st dan",
    title: "International player",
    experience: "4 years of experience of coaching",
  },
  {
    id: 2,
    name: "Ben Nebert",
    image: image2,
    experience: "Baseball Trainer",
  },
  {
    id: 3,
    name: "Ben Nebert",
    image: image3,
    experience: "Baseball Trainer",
  },
  {
    id: 4,
    name: "Ben Nebert",
    image: image4,
    experience: "Baseball Trainer",
  },
];

function index() {
  return (
    <div className="container mb-20 overflow-hidden">
      <motion.div
        variants={HeadVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        className="text-center space-y-4"
      >
        <h1 className="md:text-4xl text-2xl font-bold text-orange-600 ">
          Our Top Coaches
        </h1>
        <h3 className="md:w-3/4 w-full mx-auto md:text-lg ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text ever
          since the 1500s, when an unknown printer took.
        </h3>
      </motion.div>

      <div className="grid md:grid-cols-4 grid-cols-2 gap-10 mt-10">
        {TopTrainers.map((data, index) => (
          <motion.div
            variants={fadeVariants}
            initial="initial"
            whileInView="animate"
            custom={index}
            viewport={{
              once: true,
            }}
            className="space-y-5"
            key={data.id}
          >
            <img src={data.image} alt={data.name} />
            <div className="text-center">
              <h3 className="font-bold text-2xl">{data.name}</h3>
              <p>{data.degree}</p>
              <p>{data.title}</p>
              <p>{data.experience}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default index;
