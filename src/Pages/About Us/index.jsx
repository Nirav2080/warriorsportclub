import { AiOutlineLike } from "react-icons/ai";
import team1 from "../../assets/Aboutus/team-1-1.jpg";
import team2 from "../../assets/Aboutus/team-2-1.jpg";
import team3 from "../../assets/Aboutus/team-3-1.jpg";
import team4 from "../../assets/Aboutus/team-4-1.jpg";

import icon1 from "../../assets/Home/ChooseUs/Icon-1.png";
import icon2 from "../../assets/Home/ChooseUs/Icon-2.png";
import icon3 from "../../assets/Home/ChooseUs/Icon-3.png";

import SelcetImage1 from "../../assets/Home/ChooseUs/SelectImage-1.jpg";
import SelcetImage2 from "../../assets/Home/ChooseUs/SelectImage-2.jpg";

import SelcetImage3 from "../../assets/Home/ChooseUs/SelectImage-3.jpg";

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

const AboutUs = () => {
  const img = [
    { id: "0", url: team1, name: "Ben Nebert", fild: "Baseball Trainer" },
    {
      id: "1",
      url: team2,
      name: "Pieter Noël",
      field: "Professional Rugby Coach",
    },
    { id: "2", url: team3, name: "Thomas Stanley", field: "Hockey Trainer" },
    { id: "3", url: team4, name: "Raymond Little", field: "Tennis Coach" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-28">
      <div>
        <div className="text-[66px] text-center text-orange-600 font-bold">
          ABOUT US
        </div>
        <h1 className="text-9xl font-bold ">Athletic Aim</h1>
      </div>
      {/*First Div*/}

      <div className="bg-[linear-gradient(223deg,_#262261_60%,_#e63825_100%)] w-[90%] rounded-tr-[90px] overflow-hidden">
        <div className="flex flex-wrap justify-center z-50">
          <img src="https://template-kit.evonicmedia.com/layout43/wp-content/uploads/2023/11/about-us-image-1-1.png" />
        </div>
      </div>

      {/*Second Div*/}

      <div className="flex flex-col  text-center m-auto w-[50%]">
        <h1 className="text-4xl mt-28 text-orange-600">
          Stay connected. Stay active. Play hard.
        </h1>
        <p className="mt-5 text-[#60565c]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text ever
          since the 1500s, when an unknown printer took. Lorem Ipsum is simply
          dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry’s standard dummy text ever since the 1500s, when an
          unknown printer took.
        </p>
        <div className="flex gap-5 mt-10 justify-center">
          <button className="bg-orange-600 px-16 py-3 border border-white hover:bg-white hover:text-black duration-200">
            Find Out More
          </button>
          <button className="bg-orange-600 px-12 py-3 border border-white hover:bg-white hover:text-black duration-200">
            Become A member
          </button>
        </div>
      </div>

      {/*Third Div*/}

      <div className="flex w-full  h-[300px] px-20 my-28 gap-5">
        <div className="w-[50%] bg-white h-full rounded-md text-black">
          <h1 className="text-4xl font-bold px-4 mt-5">
            Our Vision About Future
          </h1>
          <p className="p-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. <br />
            <br /> Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry’s standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book
          </p>
        </div>
        <div className="w-[50%] bg-white h-full rounded-md text-black">
          <h1 className="text-3xl font-bold px-4 mt-5">
            Best Place to Play and Create Fun
          </h1>
          <p className="p-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>

          <div className="flex gap-5 ml-10 mt-10">
            <i className="text-5xl fa-regular fa-square-check"></i>
            <p>Lorem Ipsum is simply dummy text.</p>
            <i className="text-5xl fa-regular fa-square-check"></i>
            <p>Lorem Ipsum is simply dummy text.</p>
          </div>
        </div>
      </div>

      {/*Four Div*/}

      <div className="w-full flex md:flex-row flex-col container ">
        {/* Left Side */}
        <div className="md:w-[60%] space-y-5">
          <h3 className="text-red-700 text-xl font-bold">Why Choose Us</h3>
          <h1 className="capitalize md:text-4xl text-3xl md:w-3/4">
            unleash your true sporting potential with our exceptional sports
            Arena
          </h1>
          <h1 className="text-gray-300 md:w-3/4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard.
          </h1>

          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 py-10 md:w-[80%] sm:w-fit">
            {IconeData.map((data) => (
              <div className="" key={data.id}>
                <div className="bg-red-200 flex justify-center py-3 rounded-tr-3xl">
                  <img
                    src={data.icon}
                    alt={data.title}
                    className="hover:scale-110 transition-all duration-200 "
                  />
                </div>
                <h4 className="text-center text-sm mt-2"> {data.title} </h4>
              </div>
            ))}
          </div>

          <div className="flex gap-10 pb-7 md:w-[80%]">
            <button className="bg-orange-600 md:w-1/2 lg:text-base text-sm w-fit px-6 py-3 text-white hover:bg-white hover:text-orange-600 transition-all duration-300">
              Find Out More
            </button>
            <button className="text-orange-500 md:w-1/2 lg:text-base text-sm w-fit md:px-2 px-6 py-3 bg-white hover:bg-orange-600 hover:text-white transition-all duration-300 ">
              Become A Member
            </button>
          </div>
        </div>
        {/* Right Side */}
        <div className="md:w-[40%] py-20 bg-gradient-to-t from-red-700/70 to-blue-950 h-full rounded-tl-3xl">
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
        </div>
      </div>

      {/*Five Div*/}

      <div className="w-full p-5 mt-20">
        <div className="">
          <h1 className="text-orange-600 text-4xl font-bold text-center">
            Our Top Trainers
          </h1>
          <p className="w-[50%] text-center mt-5 m-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took.
          </p>
        </div>
        <div className="flex gap-10 justify-center mt-5">
          {img.map((data) => {
            return (
              <div className="flex flex-col items-center " key={data.id}>
                <img src={data.url} />
                <h4 className="text-2xl mt-3">{data.name}</h4>
                <p className=" mt-2">{data.field}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
