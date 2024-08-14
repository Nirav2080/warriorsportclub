import Image4 from "../../assets/Home/Event/Baseball.png";
import Image2 from "../../assets/Home/Event/Football.png";
import Image1 from "../../assets/Home/Event/Marathone.png";
import Image3 from "../../assets/Home/Event/Rugebi.png";

const GamesData = [
  {
    id: 1,
    name: "Marathon",
    img: Image1,
  },
  {
    id: 2,
    name: "Football",
    img: Image2,
  },
  {
    id: 3,
    name: "Rugby",
    img: Image3,
  },
  {
    id: 4,
    name: "Baseball",
    img: Image4,
  },
  {
    id: 5,
    name: "Baseball",
    img: Image4,
  },
  {
    id: 6,
    name: "Baseball",
    img: Image4,
  },
  {
    id: 7,
    name: "Baseball",
    img: Image4,
  },
];

const Service = () => {
  return (
    <div className="py-28">
      <div className="md:text-6xl text-4xl text-center text-orange-600 font-bold  mb-10">
        Our Services
      </div>
      {/* first div */}
      <div className="bg-[linear-gradient(223deg,_#262261_60%,_#e63825_100%)] h-auto w-[90%] items-center md:text-start mx-auto rounded-tr-[100px] flex flex-col md:flex-row justify-around">
        <div className=" py-6 px-6  md:pr-20 md:w-1/2 content-center md:px-5">
          <h1 className="md:text-4xl font-bold text-2xl ">
            Best Place to play and create fun
          </h1>
          <p className="w-full mt-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took a galley.
          </p>
          <div className=" flex gap-2 items-center mt-3">
            <i className="text-3xl fa-regular fa-square-check"></i>
            <p>Lorem Ipsum is simply dummy text.</p>
          </div>
          <div className=" flex gap-2 items-center mt-3">
            <i className="text-3xl fa-regular fa-square-check"></i>
            <p>Lorem Ipsum is simply dummy text.</p>
          </div>
        </div>
        <div className="flex items-center">
          <img
            className="md:w-[380px] md:h-[350px] w-auto h-auto"
            src="https://template-kit.evonicmedia.com/layout43/wp-content/uploads/2023/11/header-image-1-1.png"
            alt=""
          />
        </div>
      </div>

      {/* second div */}
      <div className="flex justify-center flex-col items-center space-y-2 mt-20">
        <h1 className="md:text-5xl text-3xl mb-5 text-orange-600">Sports Categories</h1>
        <p className="md:w-1/2 text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text ever
          since the 1500s, when an unknown printer took.
        </p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10 container my-10">
        {GamesData.map((data) => (
          <div
            key={data.id}
            className="relative p-4 bg-gradient-to-tr from-red-700/70 to-blue-950 rounded-tr-2xl flex items-center justify-center"
          >
            <img
              src={data.img}
              alt={data.name}
              className="w-full h-56 object-contain hover:scale-110 transition-all duration-300"
            />
            <h3 className="absolute text-3xl rotate-[270deg] origin-bottom-left transform text-white font-bold bottom-4 left-8 opacity-50">
              {data.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
