import  { useEffect, useRef } from "react";
import face1 from "../../../assets/Home/Swiper/face-1.jpg";
import face2 from "../../../assets/Home/Swiper/face-2.jpg";
import face3 from "../../../assets/Home/Swiper/face-3.jpg";
import face4 from "../../../assets/Home/Swiper/face-4.jpg";
import face5 from "../../../assets/Home/Swiper/face-5.jpg";

import { IoMdStar } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "swiper/css/lazy";
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
const RolesData = [
  {
    id: 1,
    img: face1,
    roles: "Manager",
    name: "Dennis Perez",
    descriptions:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 2,
    img: face2,
    roles: "Book-keeper",
    name: "Jane Smith",
    descriptions:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 3,
    img: face3,
    roles: "Viewer",
    name: "John Doe",
    descriptions:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 4,
    img: face4,
    roles: "Prepare",
    name: "Emily Brown",
    descriptions:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 5,
    img: face5,
    roles: "Employee",
    name: "Michael Johnson",
    descriptions:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

function Index() {
  const swiperRef = useRef(null);

  // Use IntersectionObserver to manage autoplay when Swiper is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && swiperRef.current) {
          swiperRef.current.autoplay.start();
        } else if (swiperRef.current) {
          swiperRef.current.autoplay.stop();
        }
      },
      { threshold: 0.5 }
    );

    const swiperElement = document.querySelector(".swiper-container");
    if (swiperElement) {
      observer.observe(swiperElement);
    }

    return () => {
      if (swiperElement) {
        observer.unobserve(swiperElement);
      }
    };
  }, []);

  return (
    <div className="container md:mt-0 mt-10 py-10">
      <div className="text-center md:space-y-0 space-y-3">
        <h1 className="text-orange-600 text-2xl md:text-4xl font-bold">
          Testimonials
        </h1>
        <p className="md:w-2/3 mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>

      <motion.div
          variants={fadeVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
        }}
        className="md:px-10 h-full mt-10">
        <Swiper
          ref={swiperRef}
          loop={window.innerWidth > 768} // Disable loop on smaller screens
          className="swiper-container h-full"
          slidesPerView={3}
          spaceBetween={25}
          centeredSlidesBounds={true}
          modules={[Navigation, Pagination, A11y, Autoplay,]}
          autoplay={{ delay: 5000, disableOnInteraction: false }} // Shortened autoplay delay
          // lazy={true} // Enable lazy loading of images
          breakpoints={{
            1024: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            },
          }}
        >
          {RolesData.map((data) => (
            <SwiperSlide
              className="border text-lg border-gray-300 rounded-lg p-5 drop-shadow-2xl shadow-white"
              key={data.id}
            >
              <div className="flex gap-5">
                <div className="flex items-center">
                  <img
                    data-src={data?.img} // For Swiper's lazy loading
                    alt={data.name}
                    className="swiper-lazy w-20 bg-center object-cover h-20"
                    loading="lazy"
                  />
                  <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                </div>
                <div className="flex flex-col w-[70%] space-y-5">
                  <div className="flex">
                    {Array(5)
                      .fill()
                      .map((_, i) => (
                        <IoMdStar key={i} className="text-yellow-500" />
                      ))}
                  </div>
                  <div>
                    <h1 className="md:text-sm text-xs">{data.descriptions}</h1>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-bold">{data.roles}</h3>
                    <span className="text-sm">{data.name}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
}

export default Index;
