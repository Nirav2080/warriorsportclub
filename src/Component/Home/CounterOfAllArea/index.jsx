// eslint-disable-next-line no-unused-vars
import React from "react";
import img1 from "../../../assets/Home/CounterOfAllArea/Thumb.png";
import img2 from "../../../assets/Home/CounterOfAllArea/Medal.png";
import img3 from "../../../assets/Home/CounterOfAllArea/Man.png";
import img4 from "../../../assets/Home/CounterOfAllArea/Throfy.png";
import Counter from "../../Common/Counter/Counter";

const MainData = [
  {
    id: 1,
    icon: img1,
    number: "5K",
    descriptions: "Members Active",
  },
  {
    id: 2,
    icon: img2,
    number: "20",
    descriptions: "Games Cover",
  },
  {
    id: 3,
    icon: img3,
    number: "120",
    descriptions: "Professional Coach",
  },
  {
    id: 4,
    icon: img4,
    number: "13",
    descriptions: "Years of Experience",
  },
];

const countersData = [
  {
    id: 1,
    countTo: 5000,
    duration: 1000,
  },
  {
    id: 2,
    countTo: 20,
    duration: 1000,
  },
  {
    id: 3,
    countTo: 120,
    duration: 1000,
  },
  {
    id: 4,
    countTo: 13,
    duration: 1000,
  },
];

function Index() {
  return (
    <div className="container my-28">
      <h1 className="text-center md:text-4xl text-2xl text-orange-700 font-bold capitalize">
        our sports arena in just numbers
      </h1>
      <p className="text-center">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-4 my-10 lg:gap-0 gap-4">
        {MainData.map((data) => {
          const counter = countersData.find(
            (counter) => counter.id === data.id
          );
          return (
            <div
              className="flex justify-around md:gap-0 gap-3 w-full mx-auto border-r-4 px-3"
              key={data.id}
            >
              <div className="md:w-auto  ">
                <img src={data.icon} alt={data.descriptions}  className="w-"/>
              </div>
              <div>
                <h1 className="text-xl  font-semibold md:font-bold flex gap-2">
                  <Counter
                    countTo={counter.countTo}
                    duration={counter.duration}
                  />{" "}
                  +
                </h1>
                <h4>{data.descriptions}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Index;
