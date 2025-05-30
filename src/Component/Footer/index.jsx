/* eslint-disable no-unused-vars */

import { Col, Row } from "antd";
import { motion } from "framer-motion";
import React from "react";
import { CiLocationOn, CiMail, CiMobile3 } from "react-icons/ci";
import { Link } from "react-router-dom";
import img from "../../assets/Footer/footer.jpg";
const FooterImg = {
  backgroundImage: `url(${img})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const titleVariants = {
  initial: {
    opacity: 0,
    y: 200,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
      ease: "easeIn",
      duration: 0.8,
    },
  },
};

export default function Footer() {
  return (
    <div
      style={{ ...FooterImg, backgroundPositionX: "left" }}
      className="w-full mt-24 text-white bg-gray-100 pt-20 dark:bg-gray-800 overflow-hidden"
    >
      <footer className="mx-10 grid py-10">
        <motion.div
          variants={titleVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className=""
        >
          <Row gutter={[16, 16]}>
            <Col lg={8} span={24}>
              <div className="pt-5 text-center md:text-start">
                <h1 className="pb-12 text-2xl font-bold">
                  Warriors Sports Club
                </h1>
                <p className="md:w-[90%]">
                  Warriors Sports Club is a premier sports academy dedicated to
                  nurturing young athletic talent across various disciplines.
                  Established a decade ago, the club has become a beacon of
                  excellence in the region, offering top-notch training
                  facilities and coaching programs. With a strong focus on both
                  skill development and character building, Warriors Sports Club
                  has earned a reputation for producing athletes who excel not
                  only in their respective sports but also in academics and
                  leadership. The academy prides itself on a holistic approach
                  to training, ensuring that each athlete is well-rounded and
                  prepared for the challenges of competitive sports.
                </p>
              </div>
            </Col>

            <Col lg={6} span={24}>
              <div className="flex flex-col items-start pt-10 mx-auto md:pt-5 md:mx-0">
                <div className="">
                  <h1 className="pb-12 ml-4 text-2xl font-bold">
                    {" "}
                    Get in Touch
                  </h1>
                </div>

                <div className="flex flex-col  space-y-5">
                  <div className="flex items-center gap-2">
                    <CiLocationOn className="lg:w-24 md:w-14 w-20 " />
                    <Link
                      to="https://www.google.co.in/maps/place/Warriors+Sports+Club/@23.0718038,72.6731589,17z/data=!3m2!4b1!5s0x395e873261848589:0x3c76073c27bd3504!4m6!3m5!1s0x395e87b72003a5e1:0x10535b813adc4e38!8m2!3d23.0718038!4d72.6757338!16s%2Fg%2F11rpkyd258?entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                    >
                      308 3rd Floor Pearl Plaza Nr Maharshi Sandipani School
                      Haridarshan Cross, Road, Naroda, Ahmedabad, Gujarat 382330
                    </Link>
                  </div>

                  <div className="flex items-center gap-2">
                    <CiMobile3 className="w-10" />
                    <Link to="tel:+919979392775" target="_blank">
                      +91 9979392775
                    </Link>
                  </div>

                  <div className="flex items-center gap-2">
                    <CiMail className="w-10" />
                    <Link
                      target="_blank"
                      to="mailto:shashwatchovatiya316@gmail.com"
                    >
                      warriorssportsclub3920@gamilcom
                    </Link>
                  </div>
                </div>
              </div>
            </Col>

            {/* Updated layout to use Row and Col for side-by-side display on mobile */}
            <Col lg={8} span={24} className="md:container ">
              <Row gutter={[10, 10]} className="mr-10">
                {/* Learn More Section */}
                <Col xs={12} span={24}>
                  <div className="pt-5">
                    <h1 className="pb-12 text-2xl font-bold"> Learn More</h1>
                    <ul className="flex flex-col space-y-5">
                      <Link className="flex space-y-5" to="/">
                        <li className="duration-150 hover:translate-x-1 hover:text-primary">
                          Home
                        </li>
                      </Link>
                      <Link className="flex space-y-5" to="/about">
                        <li className="duration-150 hover:translate-x-1 hover:text-primary">
                          About Us
                        </li>
                      </Link>
                      <Link className="flex space-y-5" to="/gallery">
                        <li className="duration-150 hover:translate-x-1 hover:text-primary">
                          Gallery
                        </li>
                      </Link>
                      <Link className="flex space-y-5" to="/contact">
                        <li className="duration-150 hover:translate-x-1 hover:text-primary">
                          Contact
                        </li>
                      </Link>
                    </ul>
                  </div>
                </Col>

                {/* Follow Section */}
                <Col xs={10} span={24}>
                  <div className="pt-5">
                    <h1 className="pb-12 text-2xl font-bold"> Follow</h1>
                    <ul className="flex flex-col space-y-5">
                      <Link
                        to="https://www.instagram.com/warriors_sports_club_?igsh=NDM0cmt0Y25hdGVp"
                        target="_blank"
                        className="flex space-y-5"
                      >
                        <li className="duration-150 hover:translate-x-1 hover:text-primary">
                          Instagram
                        </li>
                      </Link>
                      <Link className="flex space-y-5" to="/" target="_blank">
                        <li className="duration-150 hover:translate-x-1 hover:text-primary">
                          Facebook
                        </li>
                      </Link>
                      <Link
                        className="flex space-y-5"
                        to="https://wa.me/919979392775?text=Hello%2C%20I%20am%20interested%20in%20knowing%20more%20about%20Fame%20Adda.%20Can%20you%20please%20provide%20me%20with%20more%20details%3F"
                        target="_blank"
                      >
                        <li className="duration-150 hover:translate-x-1 hover:text-primary">
                          Whatsapp
                        </li>
                      </Link>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </motion.div>
      </footer>

      <p className="bottom-0 text-black font-bold text-center">
        ©2024 Warriors Sports Club. All rights reserved.
      </p>
    </div>
  );
}
