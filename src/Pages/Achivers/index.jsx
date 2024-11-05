import { useState } from "react";
import Image1 from "/src/assets/Aboutus/team-1-1.jpg";

const AchievementCard = ({ image, name, achievement, description }) => {
  // Manage hover state
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-72 mx-auto bg-white shadow-lg rounded-2xl overflow-hidden transition-shadow duration-300 hover:shadow-xl relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <img src={image} alt={name} className="w-full h-48 object-cover" />

      {/* Content */}
      <div className="p-4 bg-gradient-to-t from-red-700/70 to-blue-950">
        <h2 className="text-xl font-medium">{name}</h2>
        <p className="text-white">{achievement}</p>
      </div>

      {/* Description that shows on hover */}
      {isHovered && (
        <div className="absolute inset-0 bg-gradient-to-t from-red-700/70 to-blue-950 bg-opacity-90 p-4 flex justify-center items-center text-center text-white">
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

const App = () => {
  const data = [
    {
      image: Image1,
      name: "John Doe",
      achievement: "Award-winning Author",
      description:
        "John has written several bestsellers and won multiple literary awards for his work.",
    },
    {
      image: "https://via.placeholder.com/300",
      name: "Jane Smith",
      achievement: "Top Scientist",
      description:
        "Jane is known for her breakthrough research in renewable energy.",
    },
    {
      image: "https://via.placeholder.com/300",
      name: "Emily Johnson",
      achievement: "Entrepreneur of the Year",
      description:
        "Emily founded a successful tech startup that helps companies grow their online presence.",
    },
    {
      image: "https://via.placeholder.com/300",
      name: "Emily Johnson",
      achievement: "Entrepreneur of the Year",
      description:
        "Emily founded a successful tech startup that helps companies grow their online presence.",
    },
    {
      image: "https://via.placeholder.com/300",
      name: "Emily Johnson",
      achievement: "Entrepreneur of the Year",
      description:
        "Emily founded a successful tech startup that helps companies grow their online presence.",
    },
    {
      image: "https://via.placeholder.com/300",
      name: "Emily Johnson",
      achievement: "Entrepreneur of the Year",
      description:
        "Emily founded a successful tech startup that helps companies grow their online presence.",
    },
  ];

  return (
    <div className="grid md:grid-cols-4 grid-rows pt-28 gap-10 mx-auto p-6">
      {data.map((item, index) => (
        <AchievementCard
          key={index}
          image={item.image}
          name={item.name}
          achievement={item.achievement}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default App;
