/* eslint-disable no-unused-vars */
import React from "react";
import eventImage from "../../../assets/Home/Event/Event_image.png";
import BasketBall from "../../../assets/Home/Event/BasketBall-ManImage.png";
import SetImage1 from "../../../assets/Home/Event/SetImage1.jpg";
import SetImage2 from "../../../assets/Home/Event/SetImage2.jpg";
import SetImage3 from "../../../assets/Home/Event/SetImage3.jpg";

function Index() {
  return (
    <div className="bg-neutral-950 lg:my-16 mt-40">
      {/* Event Section */}
      <div className="bg-[#262261] mx-auto w-[90%] py-10 px-5 flex flex-col md:flex-row gap-10 mt-10">
        {/* Left Side */}
        <div className="flex flex-col md:flex-row md:w-[40%] gap-4 md:items-center">
          {/* Image Part */}
          <div className="bg-gray-200 p-3 w-20 h-20 md:w-28 md:h-28 flex items-center justify-center rounded-full">
            <img src={eventImage} alt="Event-Image" className="w-3/4" />
          </div>
          {/* Text Part */}
          <div className="flex flex-col space-y-2 md:space-y-4">
            <div className="uppercase text-lg md:text-xl">
              <div>Brilliant Sports Club</div>
              <span>Amenities</span>
            </div>
            <div className="text-red-200 cursor-pointer">
              {" "}
              &gt; Book A Tour{" "}
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col md:flex-row md:w-[60%] items-center gap-4">
          {/* Image Section */}
          <div className="w-full md:w-1/3 bg-gradient-to-tr from-red-700/70 to-blue-950 rounded-tr-3xl">
            <img
              src={BasketBall}
              alt="BasketBallImage"
              className="h-[200px] w-full object-cover"
            />
          </div>
          {/* Text Section */}
          <div className="border-red-700 border border-l-0 w-full md:w-2/3 p-4 text-xs md:text-base">
            <span className="font-bold">Event :</span>
            <p className="text-gray-300 mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text.
            </p>
          </div>
          {/* Arrow */}
          <div className="bg-red-500 py-2 px-3 relative md:-left-8 cursor-pointer md:block hidden">
            &gt;
          </div>
        </div>
      </div>

      {/* Next Section */}
      <div className="container mx-auto w-[90%]">
        <div className="flex flex-col md:flex-row gap-10 mt-10">
          {/* Image Section */}
          <div className="flex w-full md:w-1/2 items-center gap-5 md:h-[350px] ">
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
            <div className="w-[70%] h-full">
              <img
                src={SetImage3}
                alt="SetImage3"
                className="h-full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="flex flex-col justify-center md:w-1/2 space-y-4">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
