import team1 from "../../assets/Aboutus/team-1-1.jpg";
import team2 from "../../assets/Aboutus/team-2-1.jpg";
import team3 from "../../assets/Aboutus/team-3-1.jpg";
import team4 from "../../assets/Aboutus/team-4-1.jpg";

const AboutUs = () => {
  const img = [
    { id: "0", url: team1, name: "Ben Nebert", fild: "Baseball Trainer" },
    {
      id: "1",
      url: team2,
      name: "Pieter Noël",
      fild: "Professional Rugby Coach",
    },
    { id: "2", url: team3, name: "Thomas Stanley", fild: "Hockey Trainer" },
    { id: "3", url: team4, name: "Raymond Little", fild: "Tennis Coach" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-28">
      <div>
        <div className="text-[66px] text-center text-orange-600 font-bold">
          ABOUT US
        </div>
        <h1 className="text-9xl font-bold ">Athletic Aim</h1>
      </div>

      <div className="bg-[linear-gradient(223deg,_#262261_60%,_#e63825_100%)] w-[75%] h-[350px] rounded-tr-[90px] overflow-hidden">
        <h1 className="text-7xl font-bold uppercase text-center opacity-[50%] ">
          Push Yourself To The Limit dummy text of the to the printing and
          typesetting industry. Lorem Ipsum has been the industry.
        </h1>

        <img
          className="w-[32%] absolute bottom-1 ml-[22%]"
          src="https://template-kit.evonicmedia.com/layout43/wp-content/uploads/2023/11/about-us-image-1-1.png"
        />
      </div>

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
      </div>

      <div className="flex gap-5 mt-32">
        <button className="bg-orange-600 px-16 py-3 border border-white hover:bg-white hover:text-black duration-200">
          Find Out More
        </button>
        <button className="bg-orange-600 px-12 py-3 border border-white hover:bg-white hover:text-black duration-200">
          Become A member
        </button>
      </div>

      <div className="flex w-[75%] h-[350px] mt-20 gap-5">
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

      <div className="w-[75%]  p-5 mt-20  ">
        <div className="">
          <h1 className="text-orange-600 text-4xl font-bold text-center">
            Our Top Trainers
          </h1>
          <p className="w-[70%] text-center mt-5 m-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took.
          </p>
        </div>
        <div className="flex gap-4 mt-5">
          {img.map((data) => {
            return (
              <div className="flex flex-col items-center " key={data.id}>
                <img src={data.url} />
                <h4 className="text-2xl mt-3">{data.name}</h4>
                <p className=" mt-2">{data.fild}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
