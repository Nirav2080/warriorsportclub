import Home from "../Component/Home";
// import Service from "../Components/Home/Services";
import { Route, Routes } from "react-router-dom";
// import Footer from "../Component/Footer";
// import Navbar from "../Component/Navbar";

const AppRoutes = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/service" element={<Service />} /> */}
      </Routes>
      {/* <Footer /> */}
    </>
  );
};
export default AppRoutes;
