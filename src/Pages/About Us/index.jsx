import { AiOutlineLike } from "react-icons/ai";

import icon1 from "../../assets/Home/ChooseUs/Icon-1.png";
import icon2 from "../../assets/Home/ChooseUs/Icon-2.png";
import icon3 from "../../assets/Home/ChooseUs/Icon-3.png";

import SelcetImage1 from "../../assets/Home/ChooseUs/SelectImage-1.jpg";
import SelcetImage2 from "../../assets/Home/ChooseUs/SelectImage-2.jpg";

import SelcetImage3 from "../../assets/Home/ChooseUs/SelectImage-3.jpg";
import { motion } from "framer-motion";

import image1 from "../../assets/Home/TopTrainers/Image1.jpg";
import image2 from "../../assets/Home/TopTrainers/Image2.jpg";
import image3 from "../../assets/Home/TopTrainers/Image3.jpg";
import image4 from "../../assets/Home/TopTrainers/Image4.jpg";
// import SetImage1 from '../../assets/Home/'
import SetImage1 from "../../assets/Home/Event/SetImage1.jpg";
import SetImage2 from "../../assets/Home/Event/SetImage2.jpg";
import SetImage3 from "../../assets/Home/Event/SetImage3.jpg";

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

const fadeVariants2 = {
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

const IconeData = [
  {
    id: 1,
    icon: icon1,
    title: "Fun and Enjoyment",
  },
  {
    id: 2,
    icon: icon2,
    title: "Flexible Pricing",
  },
  {
    id: 3,
    icon: icon3,
    title: "Professional Trainer",
  },
];

const TopTrainers = [
  {
    id: 1,
    name: "Ben Nebert",
    image: image1,
    experience: "Baseball Trainer",
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

const AboutUs = () => {
  return (
    <main className=" pt-28 overflow-hidden">
      <motion.div
        variants={HeadingVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        className="md:text-6xl text-3xl text-center text-orange-600 font-bold"
      >
        ABOUT US
      </motion.div>

      {/*First Div*/}

      <motion.div
        variants={fadeVariants2}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        className="flex mx-auto bg-[linear-gradient(223deg,_#262261_60%,_#e63825_100%)] w-[90%] rounded-tr-[90px] overflow-hidden justify-center mt-10"
      >
        <div className="flex flex-wrap">
          <img
            src="https://template-kit.evonicmedia.com/layout43/wp-content/uploads/2023/11/about-us-image-1-1.png"
            className="md:h-96 h-64 hover:scale-125  transition-all duration-700"
          />
        </div>
      </motion.div>

      {/*Second Div*/}

      <div className="flex flex-col text-center  m-auto w-[90%]">
        <motion.div
          variants={HeadingVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className="text-4xl mt-28 text-orange-600"
        >
          Stay connected. Stay active. Play hard.
        </motion.div>
        <p className="mt-5 text-gray-400">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text ever
          since the 1500s, when an unknown printer took. Lorem Ipsum is simply
          dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry’s standard dummy text ever since the 1500s, when an
          unknown printer took.
        </p>
        <div className="flex md:flex-row flex-col gap-5 mt-10 justify-center">
          <button className="bg-orange-600 px-16 py-3 hover:bg-white hover:text-black duration-200">
            Find Out More
          </button>
          <button className="bg-white px-12 py-3 text-black hover:bg-orange-600 hover:text-white duration-200">
            Become A member
          </button>
        </div>
      </div>

      {/*Third Div*/}

      <div className="flex w-full md:flex-row flex-col text-center md:h-72   md:px-16 px-8 my-28 gap-10">
        <div className="md:w-1/2 bg-white rounded-md text-black">
          <motion.div
            variants={titleVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className="text-4xl font-bold px-4 mt-5"
          >
            Our Vision About Future
          </motion.div>
          <p className="p-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="md:w-1/2 bg-white h-full rounded-md text-black">
          <motion.div
            variants={titleVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className="text-3xl font-bold px-4 mt-5"
          >
            Best Place to Play and Create Fun
          </motion.div>
          <p className="p-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>

      {/*Four Div*/}

      <div className="w-full flex md:flex-row flex-col container pt-10 overflow-hidden">
        {/* Left Side */}
        <motion.div
          variants={fadeVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className="md:w-[60%] space-y-5"
        >
          <h3 className="text-orange-600 text-xl font-bold">Why Choose Us</h3>
          <h1 className="capitalize md:text-4xl text-3xl md:w-3/4">
            unleash your true sporting potential with our exceptional sports
            Arena
          </h1>
          <h1 className="text-gray-300 md:w-3/4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard.
          </h1>

          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 py-10 md:w-[80%] sm:w-fit">
            {IconeData.map((data, index) => (
              <motion.div
                variants={iconVariants}
                initial="initial"
                whileInView="animate"
                custom={index}
                viewport={{
                  once: true,
                }}
                className=""
                key={data.id}
              >
                <div className="bg-red-200 flex justify-center py-3 rounded-tr-3xl">
                  <img
                    src={data.icon}
                    alt={data.title}
                    className="hover:scale-110 transition-all duration-200 "
                  />
                </div>
                <h4 className="text-center md:text-sm mt-2 font-semibold text-xl">
                  {" "}
                  {data.title}{" "}
                </h4>
              </motion.div>
            ))}
          </div>

          <div className="flex md:flex-row f md:gap-10 gap-3 pb-7 md:w-[80%]">
            <button className="bg-orange-600 md:w-1/2 w-fit lg:text-base text-sm  px-6 py-3 text-white hover:bg-white hover:text-orange-600 transition-all duration-300">
              Find Out More
            </button>
            <button className="text-orange-500 md:w-1/2 w-fit lg:text-base text-sm  md:px-2 px-6 py-3 bg-white hover:bg-orange-600 hover:text-white transition-all duration-300 ">
              Become A Member
            </button>
          </div>
        </motion.div>
        {/* Right Side */}
        <motion.div
          variants={HeadingVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className="md:w-[40%] py-20 bg-gradient-to-t from-red-700/70 to-blue-950 h-full rounded-tl-3xl"
        >
          <div className="w-full flex h-full ">
            <div className="w-[70%] h-full relative -left-5">
              <div className="">
                <img
                  src={SelcetImage1}
                  alt="RugbyImage"
                  className="object-cover"
                />
              </div>
              <div className="md:block hidden ">
                <div className="bg-white h-full text-black flex flex-row mt-5 px-2 py-4 gap-2  ">
                  <div className="flex items-center">
                    <AiOutlineLike className="text-blue-800 text-4xl" />
                  </div>
                  <div className="space-y-1 ">
                    <h1 className="font-bold text-lg ">
                      We are ready to serve you.
                    </h1>
                    <p className="text-gray-500">
                      Dui rutrum erat taciti mattis leo pede in ac libero
                      adipiscing condimentum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[30%] h-full flex flex-col gap-5">
              <div className="h-[30%]">
                <img src={SelcetImage2} alt="BasketBall" />
              </div>
              <div className="h-[70%] right-20">
                <img
                  src={SelcetImage3}
                  alt="RugbyImage2"
                  className="object-cover h-full"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      {/* Six div */}
      <div className=" px-9 my-20 mt-32 w-[100%] overflow-hidden">
        <div className="flex flex-col  lg:flex-row gap-10 mt-10">
          <motion.div
            variants={fadeVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className="flex w-full lg:w-1/2 text-center gap-5 md:h-[350px] "
          >
            <div className="flex flex-col gap-5 w-[30%] h-full">
              <img
                src={SetImage1}
                alt="SetImage1"
                className="h-full object-cover rounded-lg"
              />
              <img
                src={SetImage2}
                alt="SetImage2"
                className="h-full object-cover rounded-lg"
              />
            </div>
            <div className="md:w-[100%] w-[65%] h-full">
              <img
                src={SetImage3}
                alt="SetImage3"
                className="h-full object-cover rounded-lg"
              />
            </div>
          </motion.div>

          <motion.div
            variants={HeadingVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className="flex flex-col justify-center lg:w-1/2 space-y-4"
          >
            <div className="text-3xl md:text-5xl font-bold">
              Stay connected. Stay active. Play hard.
            </div>
            <p className="text-gray-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took. Lorem
              Ipsum is simply dummy text of the printing.
            </p>
            <div className="flex flex-col md:flex-row gap-5">
              <button className="bg-orange-600 w-full md:w-1/2 px-6 py-3 text-white hover:bg-white hover:text-orange-600 transition-all duration-300">
                Find Out More
              </button>
              <button className="text-orange-500 w-full md:w-1/2 px-6 py-3 bg-white hover:bg-orange-600 hover:text-white transition-all duration-300">
                Become A Member
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      {/*seven Div*/}

      <div className="container mb-20 overflow-hidden">
        <motion.div
          variants={HeadingVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className="text-center space-y-4"
        >
          <h1 className="md:text-4xl text-2xl font-bold text-orange-600 ">
            Our Top Trainers
          </h1>
          <h3 className="md:w-3/4 w-full mx-auto md:text-lg ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took.
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-4 grid-cols-2 gap-10 mt-10">
          {TopTrainers.map((data, index) => (
              <motion.div
                variants={iconVariants}
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
                <p>{data.experience}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};
export default AboutUs;
