import Image4 from "../../../assets/Home/Event/Baseball.png";
import Image2 from "../../../assets/Home/Event/Football.png";
import Image1 from "../../../assets/Home/Event/Marathone.png";
import Image3 from "../../../assets/Home/Event/Rugebi.png";

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


const GamesData = [
  {
    id: 1,
    name: "Marathon",
    img: Image1,
  },
  {
    id: 2,
    name: "Football",
    img: Image2,
  },
  {
    id: 3,
    name: "Rugby",
    img: Image3,
  },
  {
    id: 4,
    name: "Baseball",
    img: Image4,
  },
];

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
      duration: 1 ,
    },
  }),
};

function Index() {
  return (
    <main className="overflow-hidden ">
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

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10 container my-10">
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
            className="relative p-4 bg-gradient-to-tr from-red-700/70 to-blue-950 rounded-tr-2xl flex items-center justify-center"
          >
            <img
              src={data.img}
              alt={data.name}
              className="w-full h-56 object-contain hover:scale-110 transition-all duration-300"
            />
            <h3 className="absolute text-3xl rotate-[270deg] origin-bottom-left transform text-white font-bold bottom-4 left-10 opacity-50">
              {data.name}
            </h3>
          </motion.div>
        ))}
      </div>
    </main>
  );
}

export default Index;
