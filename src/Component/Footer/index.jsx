/* eslint-disable no-unused-vars */

import { Col, Row } from "antd";
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

export default function Footer() {
  return (
    <div
      style={{ ...FooterImg, backgroundPositionX: "left" }}
      className="w-full mt-24 text-white bg-gray-100 pt-20 dark:bg-gray-800"
    >
      <footer className="mx-10 grid py-10">
        <Row gutter={[16, 16]}>
          <Col lg={8} span={24}>
            <div className="pt-5 text-center md:text-start">
              <h1 className="pb-12 text-2xl font-bold">Warriors Sports Club</h1>
              <p className="md:w-[90%]">
                Warriors Sports Club is a premier sports academy dedicated to
                nurturing young athletic talent across various disciplines.
                Established a decade ago, the club has become a beacon of
                excellence in the region, offering top-notch training facilities
                and coaching programs. With a strong focus on both skill
                development and character building, Warriors Sports Club has
                earned a reputation for producing athletes who excel not only in
                their respective sports but also in academics and leadership.
                The academy prides itself on a holistic approach to training,
                ensuring that each athlete is well-rounded and prepared for the
                challenges of competitive sports.
              </p>
            </div>
          </Col>

          <Col lg={6} span={24}>
            <div className="flex flex-col items-start pt-10 mx-auto md:pt-5 md:mx-0">
              <div className="">
                <h1 className="pb-12 ml-4 text-2xl font-bold"> Get in Touch</h1>
              </div>

              <div className="flex flex-col  space-y-5">
                <div className="flex items-center gap-2">
                  <CiLocationOn className="lg:w-24 md:w-14 w-20 " />
                  <Link
                    to="https://maps.app.goo.gl/TKWf7JvD6T2d9hfw7"
                    target="_blank"
                  >
                    B-503, Divyajivan Elegance, Nikol Gam Rd, opp. Vrundavan
                    Farm, Jivanvadi, Nicol Gam, Nikol, Ahmedabad, Gujarat 382350
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
                  <Link target="_blank" to="mailto:fameadda18@gmail.com">
                    abc@gmail.com
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
                      to="https://www.instagram.com/shashwat_0046"
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
                      to="https://wa.me/918866187676?text=Hello%2C%20I%20am%20interested%20in%20knowing%20more%20about%20Fame%20Adda.%20Can%20you%20please%20provide%20me%20with%20more%20details%3F"
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
      </footer>

      <p className="bottom-0 text-black font-bold text-center">
        ©2024 Warriors Sports Club. All rights reserved.
      </p>
    </div>
  );
}
