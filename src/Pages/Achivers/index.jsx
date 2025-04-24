import { motion } from "framer-motion";
import Image1 from "/src/assets/Achivers/1.jpg";
import Image2 from "/src/assets/Achivers/2.png";

const fadeVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 * index,
      ease: [0.25, 0.8, 0.25, 1], // Smooth cubic-bezier easing for a smoother effect
      duration: 0.8,
    },
  }),
};

const App = () => {
  const data = [
    {
      image: Image1,
      name: "SALONI BHADORIYA",
      achievement: "Adv. Black belt",
      medal: "International gold medalist",
      description:
        "Khel Mahakumbh state gold medalist, SGFI State gold medalist",
    },
    {
      image: Image2,
      name: "VANSH CHAUHAN",
      achievement: "Adv. Black belt",
      medal:
        "SGFI state bronze medalist, Khel Mahakumbh/ SGFI district gold medalist, Open Gujarat state gold medalist",
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
      name: "John Doe",
      achievement: "Tech Innovator",
      description:
        "John developed innovative solutions for streamlining business operations in the tech industry.",
    },
  ];

  return (
    <div className="container mx-auto px-4 pt-28">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((data, index) => (
          <motion.div
            variants={fadeVariants}
            initial="initial"
            whileInView="animate"
            custom={index}
            viewport={{ once: true }}
            key={index}
            className="relative overflow-hidden bg-gray-800 text-white rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            {/* Card Image */}
            <div className="w-full h-96 relative">
              {" "}
              {/* Increased image height */}
              <img
                src={data.image || "https://via.placeholder.com/350x250"}
                alt={data.name}
                className="w-full h-full object-fill top-0 rounded-t-lg transition duration-300 ease-in-out transform hover:scale-105"
              />
            </div>

            {/* Card Content */}
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-semibold text-gray-100">
                {data.name}
              </h3>
              <p className="text-sm text-gray-400">{data.achievement}</p>
              <p className="text-sm text-gray-500">{data.medal}</p>
              <p className="text-sm text-gray-300 mt-2">{data.description}</p>
            </div>

            {/* Hover Effect (Glow Overlay) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-40 transition-opacity duration-300"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default App;
