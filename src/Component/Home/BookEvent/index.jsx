/* eslint-disable no-unused-vars */
import React from "react";
import eventImage from "../../../assets/Home/Event/Event_image.png";
import BasketBall from "../../../assets/Home/Event/BasketBall-ManImage.png";
import SetImage1 from "../../../assets/Home/Event/SetImage1.jpg";
import SetImage2 from "../../../assets/Home/Event/SetImage2.jpg";
import SetImage3 from "../../../assets/Home/Event/SetImage3.jpg";

function index() {
  return (
    <div className="bg-neutral-950 md:mt-0 mb-16 ">
      <div className="bg-[#262261] mx-auto w-[86%] py-10 px-5 flex md:flex-row flex-col gap-10 my-10">
        {/* Left Side */}
        <div className="flex gap-3 justify-around md:flex-row flex-col md:space-y-0 space-y-3 md:items-center md:w-[40%]">
          {/* Image Part */}
          <div className="bg-gray-200 p-3 md:w-28 md:h-28 w-20 h-20 flex items-center justify-center rounded-full">
            <img src={eventImage} alt="Event-Image" className="w-3/4" />
          </div>
          <div className="flex flex-col space-y-4">
            <div className="uppercase md:text-xl">
              <div>brilliant Sports Club</div>
              <span>amenities</span>
            </div>
            <div className="text-red-200"> &gt; Book A Tour </div>
          </div>
        </div>
        {/* Right Side */}
        <div className="md:w-[60%] flex items-center ">
          {/* Image Section */}
          <div className="md:w-1/3 bg-gradient-to-tr from-red-700/70 to-blue-950 rounded-tr-3xl">
            <img
              src={BasketBall}
              alt="BasketBallImage"
              className="h-[200px] "
            />
          </div>
          <div className="border-red-700 border border-l-0 w-2/3 h-3/4 flex flex-col justify-center items-start px-2 md:text-base text-xs py-3">
            <span className="font-bold">Event :</span>
            <div className="text-gray-300">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text
              </p>
            </div>
          </div>
          <div className="bg-red-500 py-2 px-3 top-0 relative -left-5">
            &gt;
          </div>
        </div>
      </div>

      {/* Next Div */}

      <div className="container">
        <div className="flex md:flex-row flex-col gap-10">
          {/* Image Section */}
          <div className="flex w-1/2  items-center gap-5 ">
            <div className="flex flex-col gap-5 w-[30%] h-full">
              <img src={SetImage1} alt="" className="h-full " />
              <img src={SetImage2} alt="" className="h-full " />
            </div>
            <div className="w-[70%] h-full">
              <img src={SetImage3} alt="" className="object-cover h-full" />
            </div>
          </div>

          {/* Text section */}

          <div className="md:w-1/2 space-y-4 h-full">
            <div className="md:text-5xl text-3xl font-bold">
              Stay connected. Stay active. Play hard.
            </div>
            <div className="">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took. Lorem
              Ipsum is simply dummy text of the printing.
            </div>
            <div className="flex gap-10 w-full">
              <button className="bg-orange-600 md:w-1/2 w-fit px-6 py-3 text-white hover:bg-white hover:text-orange-600 transition-all duration-300">
                Find Out More
              </button>
              <button className="text-orange-500 md:w-1/2 w-fit px-6 py-3 bg-white hover:bg-orange-600 hover:text-white transition-all duration-300 ">
                Become A Member
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
