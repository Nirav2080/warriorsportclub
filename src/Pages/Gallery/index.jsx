const Gallery = () => {
  const url = [
    {
      img: "https://template-kit.evonicmedia.com/layout43/wp-content/uploads/2023/11/03-1.jpg",
    },
    {
      img: "https://template-kit.evonicmedia.com/layout43/wp-content/uploads/2023/11/07-1.jpg",
    },
    {
      img: "https://template-kit.evonicmedia.com/layout43/wp-content/uploads/2023/11/05-1.jpg",
    },
    {
      img: "https://template-kit.evonicmedia.com/layout43/wp-content/uploads/2023/11/02-1.jpg",
    },
    {
      img: "https://template-kit.evonicmedia.com/layout43/wp-content/uploads/2023/11/04-1.jpg",
    },
    {
      img: "https://template-kit.evonicmedia.com/layout43/wp-content/uploads/2023/11/08-1.jpg",
    },
    {
      img: "https://template-kit.evonicmedia.com/layout43/wp-content/uploads/2023/11/06-1.jpg",
    },
    {
      img: "https://template-kit.evonicmedia.com/layout43/wp-content/uploads/2023/11/10-1-2.jpg",
    },
    {
      img: "https://template-kit.evonicmedia.com/layout43/wp-content/uploads/2023/11/09-1-1.jpg",
    },
    {
      img: "https://template-kit.evonicmedia.com/layout43/wp-content/uploads/2023/11/01-1.jpg",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-28">
      <div>
        <div className="text-[66px] text-center text-orange-600 font-bold">
          GALLERY
        </div>
        <h1 className="text-9xl font-bold opacity-10">Athletic Aim</h1>
      </div>

      <div className="bg-[linear-gradient(223deg,_#262261_60%,_#e63825_100%)] w-[80%]  rounded-tr-[100px] flex justify-around ">
        <div className="px-10 py-6 w-1/2">
          <h1 className="text-5xl font-bold ">Our Gallery</h1>
          <p className="w-full mt-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s.
          </p>
        </div>
        <div className="flex items-center h-[300px]">
          <img
            className="w-[280px] h-[250px]"
            src="https://template-kit.evonicmedia.com/layout43/wp-content/uploads/2023/11/floorball-female-player-isolated-white-action-motion-concept.png"
            alt=""
          />
        </div>
      </div>

      <div className="flex flex-col  items-center mt-24 w-[50%]">
        <h1 className="text-5xl text-orange-600 text-center">
          Incredible Memories In <br /> Athletic Aim
        </h1>
        <p className="text-[#60565c] mt-5 ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text ever
          since the 1500s, when an unknown printer took.
        </p>
        <button className="mt-6 text-[16px]  px-10 py-3 bg-orange-600 hover:bg-blue-800 mb-10 duration-200">
          Join Our Club
        </button>
      </div>

      <div className="w-[75%] h-full  flex flex-wrap gap-2 ">
        {url.map((u) => {
          return (
            <div className="w-[218px] h-[280px] bg-red-600 " key={u.img}>
              <img src={u.img} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
