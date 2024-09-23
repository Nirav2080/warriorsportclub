import Image5 from "../../assets/Home/Event/Badminton.png";
import Image6 from "../../assets/Home/Event/Basketball.png";
import Image3 from "../../assets/Home/Event/Football_icon.png";
import Image4 from "../../assets/Home/Event/Skating.png";
import Image7 from "../../assets/Home/Event/Table-Tennis.png";
import Image1 from "../../assets/Home/Event/Taekwondo.png";
import Image2 from "../../assets/Home/Event/Tennis.png";
import Cricket from "../../assets/Services/Cricket2.webp";
import Kabbadi from "../../assets/Services/Kabaddi.jpeg";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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

// const iconVariants = {
//   initial: {
//     opacity: 0,
//     y: 200,
//   },
//   animate: (index) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: 0.3 * index,
//       ease: "linear",
//       duration: 1,
//     },
//   }),
// };

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

const GamesData = [
  {
    id: 1,
    name: "Taekwondo",
    img: Image1,
  },

  {
    id: 2,
    name: "Tennis",
    img: Image2,
  },
  {
    id: 3,
    name: "Football",
    img: Image3,
  },
  {
    id: 4,
    name: "Skating",
    img: Image4,
  },
  {
    id: 5,
    name: "Badminton",
    img: Image5,
  },
  {
    id: 6,
    name: "Basketball",
    img: Image6,
  },

  {
    id: 7,
    name: "Table Tennis",
    img: Image7,
  },
];

const Service = () => {
  return (
    <main className="py-28 overflow-hidden">
      <motion.div
        variants={HeadingVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        className="md:text-6xl text-4xl text-center text-orange-600 font-bold  mb-10"
      >
        Our Services
      </motion.div>

      {/* first div */}
      <div className="bg-[linear-gradient(223deg,_#262261_60%,_#e63825_100%)] h-auto w-[90%] items-center md:text-start mx-auto rounded-tr-[100px] flex flex-col md:flex-row justify-around">
        <motion.div
          variants={fadeVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className=" py-6 px-6  md:pr-20 md:w-1/2 content-center md:px-5"
        >
          <h1 className="md:text-4xl font-bold text-2xl ">
            Best Place to play and create fun
          </h1>
          <p className="w-full mt-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took a galley.
          </p>
        </motion.div>
        <motion.div
          variants={HeadingVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className="flex items-center"
        >
          <img
            className="md:w-[380px] md:h-[350px] w-auto h-60"
            src="https://template-kit.evonicmedia.com/layout43/wp-content/uploads/2023/11/header-image-1-1.png"
            alt=""
          />
        </motion.div>
      </div>

      {/* second div */}
      <div className="flex justify-center flex-col items-center space-y-2 mt-20">
        <motion.div
          variants={HeadingVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className="md:text-5xl text-3xl mb-5 text-orange-600"
        >
          Sports Categories
        </motion.div>

        <motion.div
          variants={titleVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className="md:w-1/2 text-center"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text ever
          since the 1500s, when an unknown printer took.
        </motion.div>
      </div>

      {/* First Div */}
      <div className="md:w-2/3 mx-auto my-20 md:px-0 px-3">
        {/* Heading */}
        <div className="text-center my-10 text-orange-600 text-xl font-bold">
          SPORTS COACHING
        </div>
        {/* Below section */}
        <div className="flex  justify-center  md:gap-6 gap-2 mx-auto">
          <div className="">
            <img
              src={Kabbadi}
              alt="Kabbadi Image"
              className="md:w-[300px] md:h-[250px] w-[200px] h-[220px] object-cover"
            />
          </div>
          {/* Content section */}
          <div className="text-xs md:text-base w-1/2">
            <p className="">
              Warriors Sports Club is a premier sports coaching academy
              dedicated to nurturing athletic talent and fostering a
              champion&apos;s mindset. Our experienced coaches provide
              comprehensive training programs across various sports, focusing on
              skill development, physical conditioning, and mental toughness.
            </p>
            <button className=" mt-4">
              <Link
                to="/contact"
                className="border-white  border px-6 py-2 hover:bg-orange-600 duration-300 transition-all hover:border-orange-600 rounded-xl"
              >
                Enquire
              </Link>
            </button>
          </div>
        </div>
      </div>

      {/* Second Div */}
      <div className="md:w-2/3 mx-auto my-20 md:px-0 px-3">
        {/* Heading */}

        <div className="text-center my-10 uppercase text-orange-600 text-xl font-bold">
          residential personal coaching
        </div>
        {/* Below section */}
        <div className="flex  justify-center  md:gap-6 gap-2 mx-auto">
          <div className="">
            <img
              src={Cricket}
              alt="Cricket Image"
              className="md:w-[300px] md:h-[250px] w-[200px] h-[220px] object-cover"
            />
          </div>
          {/* Content section */}
          <div className="text-xs md:text-base w-1/2">
            <p>
              Warriors Sports Club&apos;s residential personal coaching program
              offers athletes an unparalleled immersive training experience,
              combining expert guidance with state-of-the-art facilities for
              accelerated skill development. Our round-the-clock approach
              ensures personalized attention and a distraction-free environment,
              empowering athletes to unlock their full potential and embody the
              warrior spirit in their chosen sport. Co
            </p>
            <button className=" mt-4">
              <Link
                to="/contact"
                className="border-white  border px-6 py-2 hover:bg-orange-600 duration-300 transition-all hover:border-orange-600 rounded-xl"
              >
                Enquire
              </Link>
            </button>
          </div>
        </div>
      </div>

      {/* Third div */}
      <motion.div
        variants={HeadingVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        className="flex justify-center flex-col items-center space-y-2  container mt-10 overflow-hidden"
      >
        <h3 className="text-xl font-bold text-orange-600">Our Academy</h3>
        <h1 className="md:text-5xl text-3xl">Games Categories</h1>
        <p className="md:w-3/4  text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text ever
          since the 1500s, when an unknown printer took.
        </p>
      </motion.div>
      <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap container my-10 gap-10 ">
        {GamesData.map((data, index) => (
          <motion.div
            variants={fadeVariants}
            initial="initial"
            whileInView="animate"
            custom={index}
            viewport={{
              once: true,
            }}
            key={data.id}
            // className="relative p-4 bg-gradient-to-tr from-red-700/70 to-blue-950 rounded-tr-2xl flex items-center justify-center"
            className="icon-game-category "
          >
            <img
              src={data.img}
              alt=""
              className=" h-28 hover:scale-110 transition-all duration-300 my-5"
            />
            {/* <h3 className="absolute text-3xl rotate-[270deg] origin-bottom-left transform text-white font-bold bottom-4 left-10 opacity-50">
              {data.name}
            </h3> */}
            <h3 className="text-xl md:text-2xl font-bold text-orange-600">
              {data.name}
            </h3>
          </motion.div>
        ))}
      </div>
    </main>
  );
};

export default Service;
