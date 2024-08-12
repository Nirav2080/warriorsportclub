// /* eslint-disable no-unused-vars */
// import React from "react";
// import Image1 from "../../../assets/Home/Event/Marathone.png";
// import Image2 from "../../../assets/Home/Event/Football.png";
// import Image3 from "../../../assets/Home/Event/Rugebi.png";
// import Image4 from "../../../assets/Home/Event/Baseball.png";
// const GamesData = [
//   {
//     id: 1,
//     name: "Marathon",
//     img: Image1,
//   },
//   {
//     id: 2,
//     name: "Football",
//     img: Image2,
//   },
//   {
//     id: 3,
//     name: "Rugby",
//     img: Image3,
//   },
//   {
//     id: 4,
//     name: "Baseball",
//     img: Image4,
//   },
// ];

// function index() {
//   return (
//     <main>
//       <div className="flex justify-center flex-col items-center space-y-2">
//         <h3 className="text-xl text-red-700">Our Academy</h3>
//         <h1 className="md:text-5xl text-3xl">Games Categories</h1>
//         <p className="md:w-1/2">
//           Lorem Ipsum is simply dummy text of the printing and typesetting
//           industry. Lorem Ipsum has been the industry’s standard dummy text ever
//           since the 1500s, when an unknown printer took.
//         </p>
//       </div>

//       <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10 container">
//         {GamesData.map((data) => (
//           <div
//             key={data.id}
//             className="p-4 bg-gradient-to-tr from-red-700/70 to-blue-950 rounded-tr-2xl "
//           >
//             <img
//               src={data.img}
//               alt={data.name}
//               className="w-full h-56 object-contain hover:scale-110 transition-all duration-300"
//             />
//             <h3 className="text-3xl rotate-[270deg] flex justify-center right-8  md:mr-36 mr- mb-10">{data.name}</h3>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }

// export default index;

// import React from "react";

import Image1 from "../../../assets/Home/Event/Marathone.png";
import Image2 from "../../../assets/Home/Event/Football.png";
import Image3 from "../../../assets/Home/Event/Rugebi.png";
import Image4 from "../../../assets/Home/Event/Baseball.png";

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
];

function Index() {
  return (
    <main>
      <div className="flex justify-center flex-col items-center space-y-2">
        <h3 className="text-xl text-red-700">Our Academy</h3>
        <h1 className="md:text-5xl text-3xl">Games Categories</h1>
        <p className="md:w-1/2">
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
    </main>
  );
}

export default Index;
