import { Route, Routes } from "react-router-dom";
import Footer from "../Component/Footer";
import Home from "../Component/Home";
import Navbar from "../Component/Navbar";
import AboutUs from "../Pages/About Us";
import Achievers from "../Pages/Achivers";
import Admission from "../Pages/Admission";
import ContactUs from "../Pages/Contact Us";
import Gallery from "../Pages/Gallery";
import Service from "../Pages/Service";

const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<AboutUs />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Achievers" element={<Achievers />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Admission" element={<Admission />} />
        <Route path="/Contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  );
};
export default AppRoutes;
