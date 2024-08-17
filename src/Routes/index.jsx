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
import ScrollToTop from "./ScrollToTop";

const AppRoutes = () => {
  return (
    <main className="bg-neutral-950 text-white  ">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/service" element={<Service />} />
        <Route path="/achievers" element={<Achievers />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </main>
  );
};
export default AppRoutes;
