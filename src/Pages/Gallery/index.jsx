import { Link } from "react-router-dom";
import Basketball from "../../assets/Home/Gallery/BasketBall-2.jpg";
import Cricket from "../../assets/Home/Gallery/Cricket.jpg";
import Fighter from "../../assets/Home/Gallery/Fighter.jpg";
import Hockey from "../../assets/Home/Gallery/Hockey.jpg";
import Judo from "../../assets/Home/Gallery/Judo.jpg";
import Rugby from "../../assets/Home/Gallery/Rugby.jpg";
import Running from "../../assets/Home/Gallery/Running.jpg";
import Tennis from "../../assets/Home/Gallery/Tennis.jpg";

import { motion } from "framer-motion";

const titleVariants = {
  initial: {
    opacity: 0,
    y: 200,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.6,
      ease: "easeIn",
      duration: 0.8,
    },
  },
};

const HeadingVariants = {
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

const iconVariants = {
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
    title: "Rugby",
    image: Rugby,
  },
  {
    id: 4,
    title: "Judo",
    image: Judo,
  },
  {
    id: 5,
    title: "Basketball",
    image: Basketball,
  },
  {
    id: 6,
    title: "Cricket",
    image: Cricket,
  },
  {
    id: 7,
    title: "Running",
    image: Running,
  },
  {
    id: 8,
    title: "Tennis",
    image: Tennis,
  },
];
const Gallery = () => {
  return (
    <main className="pt-28 overflow-hidden">
      <motion.div
        variants={HeadingVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        className="md:text-6xl text-3xl text-center text-orange-600 font-bold"
      >
        GALLERY
      </motion.div>

      {/* first div */}
      <div className="flex flex-col items-center md:flex-row bg-[linear-gradient(223deg,_#262261_60%,_#e63825_100%)] w-[90%] mx-auto rounded-tr-[100px] justify-around mt-10">
        <motion.div
          variants={fadeVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className="flex flex-col px-10 py-6 md:w-1/2 w-full content-center "
        >
          <h1 className="text-5xl font-bold ">Our Gallery</h1>
          <p className="w-full mt-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s.
          </p>
        </motion.div>
        <motion.div
          variants={HeadingVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className="flex items-center justify-center h-auto w-1/2"
        >
          <img
            className="md:w-96 md:h-96 w-60  "
            src="https://template-kit.evonicmedia.com/layout43/wp-content/uploads/2023/11/floorball-female-player-isolated-white-action-motion-concept.png"
            alt=""
          />
        </motion.div>
      </div>

      {/* second div */}
      <div className="flex flex-col justify-center mt-24 lg:w-[50%] w-[70%] mx-auto">
        <motion.div
          variants={titleVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className="md:text-5xl text-3xl text-orange-600 md:text-center w-full"
        >
          Incredible Memories In Athletic Aim
        </motion.div>
        <p className="flex text-[#60565c] mt-5 justify-between ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text ever
          since the 1500s, when an unknown printer took.
        </p>
        <Link
          to="/gallery"
          className="flex mt-10 bg-orange-600 justify-center self-center px-16 py-3 hover:bg-white hover:text-black duration-200 md:w-[50%]"
        >
          Find Out More
        </Link>
      </div>

      <div className="w-[75%] h-full mx-auto  grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 mt-20 justify-items-center">
        {ImageData.map((data,index) => (
          <motion.div
                variants={iconVariants}
                initial="initial"
                whileInView="animate"
                custom={index}
                viewport={{
                  once: true,
                }}
            className = "relative group overflow-hidden" key = {data.id}>
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-orange-500/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <h3 className="absolute inset-0 flex items-center justify-center font-bold text-white text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {data.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </main>
  );
};

export default Gallery;
