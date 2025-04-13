import { useState } from "react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Fighter from "../../assets/Home/Gallery/1.jpeg";
import Basketball from "../../assets/Home/Gallery/2.jpg";
import Cricket from "../../assets/Home/Gallery/Cricket.jpg";
import Hockey from "../../assets/Home/Gallery/Hockey.jpg";
import Judo from "../../assets/Home/Gallery/Judo.jpg";
import Rugby from "../../assets/Home/Gallery/Rugby.jpg";
import Running from "../../assets/Home/Gallery/Running.jpg";
import Tennis from "../../assets/Home/Gallery/Tennis.jpg";

import { motion } from "framer-motion";

const titleVariants = {
  initial: { opacity: 0, y: 200 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.6, ease: "easeIn", duration: 0.8 },
  },
};

const HeadingVariants = {
  initial: { opacity: 0, x: 200 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.6, ease: "easeIn", duration: 0.8 },
  },
};

const fadeVariants = {
  initial: { opacity: 0, x: -200 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.6, ease: "easeIn", duration: 0.8 },
  },
};

const ImageData = [
  { id: 1, title: "Fighter", image: Fighter },
  { id: 2, title: "Basketball", image: Basketball },
  { id: 3, title: "Hockey", image: Hockey },
  { id: 4, title: "Rugby", image: Rugby },
  { id: 5, title: "Judo", image: Judo },
  { id: 6, title: "Cricket", image: Cricket },
  { id: 7, title: "Running", image: Running },
  { id: 8, title: "Tennis", image: Tennis },
];

const Gallery = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <main className="pt-28 overflow-hidden">
      <motion.div
        variants={HeadingVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="md:text-6xl text-3xl text-center text-orange-600 font-bold"
      >
        GALLERY
      </motion.div>

      {/* First Section */}
      <div className="flex flex-col items-center md:flex-row bg-[linear-gradient(223deg,_#262261_60%,_#e63825_100%)] w-[90%] mx-auto rounded-tr-[100px] justify-around mt-10">
        <motion.div
          variants={fadeVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
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
          viewport={{ once: true }}
          className="flex items-center justify-center h-auto w-1/2"
        >
          <img
            className="md:w-96 md:h-96 w-60"
            src="https://template-kit.evonicmedia.com/layout43/wp-content/uploads/2023/11/floorball-female-player-isolated-white-action-motion-concept.png"
            alt=""
          />
        </motion.div>
      </div>

      {/* Second Section */}
      <div className="flex flex-col justify-center mt-24 lg:w-[50%] w-[70%] mx-auto">
        <motion.div
          variants={titleVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
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

      {/* Swiper Gallery */}
      <div className="lg:w-[50%] w-[90%] mx-auto mt-20">
        {/* Main Swiper */}
        <Swiper
          style={{ width: "100%", height: "auto" }}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Thumbs, Navigation]}
          className="rounded-xl"
        >
          {ImageData.map((data) => (
            <SwiperSlide key={data.id}>
              <img
                src={data.image}
                alt={data.title}
                className="w-full h-[400px] object-contain rounded-xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Thumbnail Swiper */}
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Thumbs]}
          className="mt-6"
        >
          {ImageData.map((data) => (
            <SwiperSlide key={data.id}>
              <img
                src={data.image}
                alt={data.title}
                className="w-full lg:h-[100px] h-[60px] object-fill rounded-md cursor-pointer"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  );
};

export default Gallery;