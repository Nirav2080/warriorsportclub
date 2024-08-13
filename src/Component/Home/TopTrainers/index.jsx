// eslint-disable-next-line no-unused-vars
import React from "react";
import image1 from "../../../assets/Home/TopTrainers/Image1.jpg";
import image2 from "../../../assets/Home/TopTrainers/Image2.jpg";
import image3 from "../../../assets/Home/TopTrainers/Image3.jpg";
import image4 from "../../../assets/Home/TopTrainers/Image4.jpg";

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

function index() {
  return (
    <div className="container">
      <div className="text-center space-y-4">
        <h1 className="md:text-4xl text-2xl font-bold text-orange-700 font-bold">Our Top Trainers</h1>
        <h3 className="md:w-3/4 w-full mx-auto md:text-lg ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text ever
          since the 1500s, when an unknown printer took.
        </h3>
      </div>

      <div className="grid md:grid-cols-4 grid-cols-2 gap-10 mt-10">
        {TopTrainers.map((data) => (
          <div className="space-y-5" key={data.id}>
            <img src={data.image} alt={data.name} />
            <div className="text-center">
              <h3 className="font-bold text-2xl">{data.name}</h3>
              <p>{data.experience}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default index;
