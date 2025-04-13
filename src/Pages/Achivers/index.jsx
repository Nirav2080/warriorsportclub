import { motion } from "framer-motion";
import { useState } from "react";
import Image1 from "/src/assets/Achivers/1.jpg";
import Image2 from "/src/assets/Achivers/2.png";

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

const AchievementCard = ({ image, name, achievement, description }) => {
  // Manage hover state
  const [isHovered, setIsHovered] = useState(false);

  // return (
  //   <div
  //     className="w-72 mx-auto bg-white shadow-lg rounded-2xl overflow-hidden transition-shadow duration-300 hover:shadow-xl relative"
  //     onMouseEnter={() => setIsHovered(true)}
  //     onMouseLeave={() => setIsHovered(false)}
  //   >
  //     {/* Image */}
  //     <img src={image} alt={name} className="w-full h-48 object-cover" />

  //     {/* Content */}
  //     <div className="p-4 bg-gradient-to-t from-red-700/70 to-blue-950">
  //       <h2 className="text-xl font-medium">{name}</h2>
  //       <p className="text-white">{achievement}</p>
  //     </div>

  //     {/* Description that shows on hover */}
  //     {isHovered && (
  //       <div className="absolute inset-0 bg-gradient-to-t from-red-700/70 to-blue-950 bg-opacity-90 p-4 flex justify-center items-center text-center text-white">
  //         <p>{description}</p>
  //       </div>
  //     )}
  //   </div>
  // );
};

const App = () => {
  const data = [
    {
      image: Image1,
      name: "SALONI BHADORIYA",
      achievement: "Adv. Black belt",
      medal: "International gold medalist",
      description:
        "Khel Mahakumbh state gold medalist, SGFI State gold medalist",
    },
    {
      image: Image2,
      name: "VANSH CHAUHAN",
      achievement: "Adv. Black belt",
      medal:
        " SGFI state bronze medalist,<br /> Khel Mahakumbh/ SGFI district gold medalist,<br />Open Gujarat state gold medalist",
      description: "K V National Player",
    },
    {
      image: "",
      name: "Emily Johnson",
      achievement: "Entrepreneur of the Year",
      description:
        "Emily founded a successful tech startup that helps companies grow their online presence.",
    },
    {
      image: "",
      name: "Emily Johnson",
      achievement: "Entrepreneur of the Year",
      description:
        "Emily founded a successful tech startup that helps companies grow their online presence.",
    },
    {
      image: Image1,
      name: "Emily Johnson",
      achievement: "Entrepreneur of the Year",
      description:
        "Emily founded a successful tech startup that helps companies grow their online presence.",
    },
    {
      image: Image1,
      name: "Emily Johnson",
      achievement: "Entrepreneur of the Year",
      description:
        "Emily founded a successful tech startup that helps companies grow their online presence.",
    },
  ];

  return (
    <div className="grid md:grid-cols-4 grid-rows pt-28 gap-10 mx-auto p-6 ">
      {/* <div className="grid md:grid-cols-4 grid-cols-2 gap-10 mt-10"> */}
      {data.map((data, index) => (
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
          <img
            src={data.image}
            alt={data.name}
            style={{ objectFit: "cover", height: "500px", width:"350px" }}
          />
          <div className="text-start">
            <h3 className="font-bold text-2xl">{data.name}</h3>
            <div>{data.achievement}</div>
            <div>
              { data.medal }
            </div>
            <div>{data.description}</div>
          </div>
        </motion.div>
      ))}
    </div>
    // </div>
  );
};

export default App;
