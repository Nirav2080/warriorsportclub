// import React from "react";
// import axios from "axios";
// import { Button, Form } from "antd";
// import { FiPhoneCall } from "react-icons/fi";
// import { GrMapLocation } from "react-icons/gr";
// import { MdMoreTime, MdOutlineMarkEmailRead } from "react-icons/md";
// import { FormInput } from "../../Component/Common/Form";

// const ContactUs = () => {
//   const [formData, setFormData] = React.useState({
//     name: "",
//     email: "",
//     mobile: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .post("http://localhost:3001/send", formData)
//       .then(() => {
//         alert("Message sent successfully");
//       })
//       .catch((error) => {
//         alert("Error sending message");
//         console.error(error);
//       });
//   };
//   return (
//     <div>
//       {/* contact */}
//       <div className="mx-auto max-w-7xl px-4 pt-28">
//         <div className="text-center text-orange-600 font-bold text-3xl md:text-5xl mb-14">
//           Contact Us
//         </div>

//         <div className="relative w-full bg-gradient-to-tr from-red-700/70 to-blue-950 rounded-tr-[100px] pt-14 pb-10">
//           <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 md:mx-10 md:my-10">
//             {/* Right div */}
//             <div className="w-full md:w-1/2 text-center md:text-left px-4">
//               <h1 className="text-white font-bold text-3xl md:text-4xl">
//                 Get Connected
//               </h1>
//               <p className="text-white mt-4">
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
//                 provident incidunt laudantium architecto expedita dolorem, error
//                 quam eaque vero magni.
//               </p>
//             </div>

//             {/* Left div */}
//             <div className="w-full md:w-1/2 px-4">
//               <div className="space-y-5">
//                 <div className="flex items-center">
//                   <div className="bg-red-500 rounded-full p-2 mr-3">
//                     <GrMapLocation className="h-5 w-5 text-white" />
//                   </div>
//                   <div className="text-white">
//                     308 3rd Floor Pearl Plaza Nr Maharshi Sandipani School
//                     Haridarshan Cross, Road, Naroda, Ahmedabad, Gujarat 382330
//                   </div>
//                 </div>
//                 <div className="flex items-center mt-5">
//                   <div className="bg-red-500 rounded-full p-2 mr-3">
//                     <MdOutlineMarkEmailRead className="h-5 w-5 text-white" />
//                   </div>
//                   <div className="text-white">Yourname@Email.Com</div>
//                 </div>
//                 <div className="flex items-center mt-5">
//                   <div className="bg-red-500 rounded-full p-2 mr-3">
//                     <FiPhoneCall className="h-5 w-5 text-white" />
//                   </div>
//                   <div className="text-white">+91 9979392775</div>
//                 </div>
//                 <div className="flex items-center mt-5">
//                   <div className="bg-red-500 rounded-full p-2 mr-3">
//                     <MdMoreTime className="h-5 w-5 text-white" />
//                   </div>
//                   <div className="text-white">
//                     Office Hours: 8AM - 11PM
//                     <br />
//                     Sunday - Weekend Day
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="mx-auto max-w-7xl pt-12 md:pt-24">
//           <div className="grid justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2 lg:justify-items-start">
//             {/* Contact Form */}

//             <div className="flex flex-col items-center md:items-start px-4">
//               <div className="text-center md:text-left">
//                 <p className="text-2xl font-bold text-orange-600 md:text-4xl">
//                   Get in Touch
//                 </p>
//                 <p className="mt-4 text-lg text-white">
//                   Our friendly team would love to hear from you.
//                 </p>
//               </div>
//               <Form
//                 name="basic"
//                 layout="vertical"
//                 onFinish={handleSubmit}
//                 autoComplete="off"
//                 className="register-form mx-auto max-w-96 pt-2 sm:w-96 "
//               >
//                 <Form.Item
//                   className="text-lg font-semibold"
//                   rules={[
//                     {
//                       required: true,
//                       message: "Please enter your full name",
//                     },
//                   ]}
//                   name="name"
//                   label={"Full Name"}
//                 >
//                   <FormInput
//                     placeholder={"Enter your full name"}
//                     className="h-10 rounded-md bg-transparent hover:bg-transparent text-white focus:bg-transparent target:bg-transparent hover:target:bg-transparent placeholder:text-gray-500"
//                     autoComplete="text"
//                     value={formData.name}
//                     onChange={handleChange}
//                   />
//                 </Form.Item>
//                 <Form.Item
//                   className="text-lg font-semibold"
//                   rules={[
//                     {
//                       required: true,
//                       message: "Please enter your phone number",
//                     },
//                     {
//                       max: 10,
//                       min: 10,
//                       message: "Please enter a valid 10-digit phone number",
//                     },
//                   ]}
//                   name="mobile"
//                   label={"Phone number"}
//                 >
//                   <FormInput
//                     placeholder={"Enter your phone number"}
//                     className="h-10 rounded-md bg-transparent hover:bg-transparent text-white focus:bg-transparent target:bg-transparent hover:target:bg-transparent placeholder:text-gray-500"
//                     autoComplete="tel"
//                     value={formData.mobile}
//                     onChange={handleChange}
//                   />
//                 </Form.Item>

//                 <Form.Item
//                   className="text-lg font-semibold"
//                   rules={[
//                     {
//                       required: true,
//                       message: "Please enter your email address",
//                     },
//                     {
//                       type: "email",
//                     },
//                   ]}
//                   name="email"
//                   label={"Email"}
//                 >
//                   <FormInput
//                     placeholder={"Enter your email address"}
//                     className="h-10 rounded-md bg-transparent hover:bg-transparent text-white focus:bg-transparent target:bg-transparent hover:target:bg-transparent placeholder:text-gray-500"
//                     autoComplete="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                   />
//                 </Form.Item>

//                 <Form.Item
//                   name="message"
//                   label={"Message"}
//                   className=" text-lg font-semibold"
//                   rules={[
//                     {
//                       required: true,
//                       message: "Please enter your message",
//                     },
//                     {
//                       type: "message",
//                     },
//                   ]}
//                 >
//                   <FormInput
//                     placeholder={"Enter your message"}
//                     autoComplete="text"
//                     className="h-10 rounded-md bg-transparent hover:bg-transparent text-white focus:bg-transparent target:bg-transparent hover:target:bg-transparent placeholder:text-gray-500"
//                     value={formData.message}
//                     onChange={handleChange}
//                   />
//                 </Form.Item>
//                 <Button
//                   type="primary"
//                   className=" mt-5 h-10 w-full font-bold text-base bg-transparent border border-gray-200"
//                   htmlType="submit"
//                   // loading={isPending}
//                 >
//                   Send Message
//                 </Button>
//               </Form>
//             </div>

//             {/* Image */}
//             <img
//               alt="Contact us"
//               className="hidden lg:block max-h-full w-full rounded-lg object-cover mt-5"
//               src="https://images.unsplash.com/photo-1543269664-56d93c1b41a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGhhcHB5JTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default ContactUs;

import { Button, Form } from "antd";
import axios from "axios";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { GrMapLocation } from "react-icons/gr";
import { MdMoreTime, MdOutlineMarkEmailRead } from "react-icons/md";
import { Link } from "react-router-dom";

// import { FormInput } from "../../Component/Common/Form";

const ContactUs = () => {
  // const [formData, setFormData] = React.useState({
  //   name: "",
  //   email: "",
  //   mobile: "",
  //   message: "",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target; // Ensure this correctly captures name and value
  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleSubmit = () => {
  //   axios
  //     .post("http://localhost:3001/send", formData)
  //     .then(() => {
  //       alert("Message sent successfully");
  //     })
  //     .catch((error) => {
  //       alert("Error sending message");
  //       console.error(error);
  //     });
  // };

  const fadeVariants = {
    initial: {
      opacity: 0,
      x: -200,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.6,
        ease: "easeIn",
        duration: 0.8,
      },
    },
  };

  const HeadingVariants = {
    initial: {
      opacity: 0,
      x: 200,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.6,
        ease: "easeIn",
        duration: 0.8,
      },
    },
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target; // Ensure this correctly captures name and value
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);
    axios
      .post("http://localhost:3001/send", formData)
      .then(() => {
        alert("Message sent successfully");
        setLoading(false);
        setFormData({
          name: "",
          email: "",
          mobile: "",
          message: "",
        });
      })
      .catch((error) => {
        alert("Error sending message");
        console.error(error);
        setLoading(false);
      });
  };
  console.log(formData);

  return (
    <main className="overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 pt-28">
        <motion.div
          variants={HeadingVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className="text-center text-orange-600 font-bold text-3xl md:text-5xl mb-14"
        >
          Contact Us
        </motion.div>

        <div className="relative w-full bg-gradient-to-tr from-red-700/70 to-blue-950 rounded-tr-[100px] pt-14 pb-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 md:mx-10 md:my-10">
            <motion.div
              variants={fadeVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              className="w-full md:w-1/2 text-center md:text-left px-4"
            >
              <h1 className="text-white font-bold text-3xl md:text-4xl">
                Get Connected
              </h1>
              <p className="text-white mt-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
                provident incidunt laudantium architecto expedita dolorem, error
                quam eaque vero magni.
              </p>
            </motion.div>

            <motion.div
              variants={HeadingVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              className="w-full md:w-1/2 px-4"
            >
              <div className="space-y-5">
                <div className="flex items-center">
                  <div className="bg-red-500 rounded-full p-2 mr-3">
                    <GrMapLocation className="h-5 w-5 text-white" />
                  </div>
                  <div className="text-white">
                    <Link
                      to="https://www.google.co.in/maps/place/Warriors+Sports+Club/@23.0718038,72.6731589,17z/data=!3m2!4b1!5s0x395e873261848589:0x3c76073c27bd3504!4m6!3m5!1s0x395e87b72003a5e1:0x10535b813adc4e38!8m2!3d23.0718038!4d72.6757338!16s%2Fg%2F11rpkyd258?entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                    >
                      308 3rd Floor Pearl Plaza Nr Maharshi Sandipani School
                      Haridarshan Cross, Road, Naroda, Ahmedabad, Gujarat 382330
                    </Link>
                  </div>
                </div>
                <div className="flex items-center mt-5">
                  <div className="bg-red-500 rounded-full p-2 mr-3">
                    <MdOutlineMarkEmailRead className="h-5 w-5 text-white" />
                  </div>
                  <div className="text-white">
                    <Link
                      target="_blank"
                      to="mailto:shashwatchovatiya316@gmail.com"
                    >
                      warriorssportsclub3920@gamilcom
                    </Link>
                  </div>
                </div>
                <div className="flex items-center mt-5">
                  <div className="bg-red-500 rounded-full p-2 mr-3">
                    <FiPhoneCall className="h-5 w-5 text-white" />
                  </div>
                  <div className="text-white">
                    <Link to="tel:+918866187676" target="_blank">
                      +91 8866187676
                    </Link>
                  </div>
                </div>
                <div className="flex items-center mt-5">
                  <div className="bg-red-500 rounded-full p-2 mr-3">
                    <MdMoreTime className="h-5 w-5 text-white" />
                  </div>
                  <div className="text-white">
                    Office Hours: 6AM - 11PM
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl pt-12 md:pt-24">
          <div className="grid justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2 lg:justify-items-start">
            <motion.div
              variants={fadeVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              className="flex flex-col items-center md:items-start px-4"
            >
              <div className="text-center md:text-left">
                <p className="text-2xl font-bold text-orange-600 md:text-4xl">
                  Get in Touch
                </p>
                <p className="mt-4 text-lg text-white">
                  Our friendly team would love to hear from you.
                </p>
              </div>
              {/* <Form
                name="basic"
                layout="vertical"
                onFinish={handleSubmit}
                autoComplete="off"
                className="register-form mx-auto max-w-96 pt-2 sm:w-96 "
              >
                <Form.Item
                  className="text-lg font-semibold"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your full name",
                    },
                  ]}
                  name="name"
                  label={"Full Name"}
                >
                  <FormInput
                    placeholder={"Enter your full name"}
                    className="h-10 rounded-md bg-transparent hover:bg-transparent text-white focus:bg-transparent target:bg-transparent hover:target:bg-transparent placeholder:text-gray-500"
                    autoComplete="text"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </Form.Item>
                <Form.Item
                  className="text-lg font-semibold"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your phone number",
                    },
                    {
                      max: 10,
                      min: 10,
                      message: "Please enter a valid 10-digit phone number",
                    },
                  ]}
                  name="mobile"
                  label={"Phone number"}
                >
                  <FormInput
                    placeholder={"Enter your phone number"}
                    className="h-10 rounded-md bg-transparent hover:bg-transparent text-white focus:bg-transparent target:bg-transparent hover:target:bg-transparent placeholder:text-gray-500"
                    autoComplete="tel"
                    value={formData.mobile}
                    onChange={handleChange}
                  />
                </Form.Item>

                <Form.Item
                  className="text-lg font-semibold"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your email address",
                    },
                    {
                      type: "email",
                      message: "Please enter a valid email address",
                    },
                  ]}
                  name="email"
                  label={"Email"}
                >
                  <FormInput
                    placeholder={"Enter your email address"}
                    className="h-10 rounded-md bg-transparent hover:bg-transparent text-white focus:bg-transparent target:bg-transparent hover:target:bg-transparent placeholder:text-gray-500"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Form.Item>

                <Form.Item
                  name="message"
                  label={"Message"}
                  className=" text-lg font-semibold"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your message",
                    },
                  ]}
                >
                  <FormInput
                    placeholder={"Enter your message"}
                    autoComplete="text"
                    className="h-10 rounded-md bg-transparent hover:bg-transparent text-white focus:bg-transparent target:bg-transparent hover:target:bg-transparent placeholder:text-gray-500"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </Form.Item>
                <Button
                  type="primary"
                  className=" mt-5 h-10 w-full font-bold text-base bg-transparent border border-gray-200"
                  htmlType="submit"
                >
                  Send Message
                </Button>
              </Form> */}

              <Form
                name="basic"
                layout="vertical"
                onFinish={handleSubmit}
                autoComplete="off"
                className="register-form mx-auto max-w-96 pt-2 sm:w-96"
              >
                <Form.Item
                  className="text-lg font-semibold"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your full name",
                    },
                  ]}
                  name="name"
                  label={"Full Name"}
                >
                  <input
                    placeholder="Enter your full name"
                    className="h-10 rounded-md bg-transparent hover:bg-transparent text-white focus:bg-transparent target:bg-transparent hover:target:bg-transparent placeholder:text-gray-500 border-white border md:w-full px-3"
                    autoComplete="text"
                    value={formData.name}
                    onChange={handleChange}
                    name="name"
                  />
                </Form.Item>
                <Form.Item
                  className="text-lg font-semibold"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your phone number",
                    },
                    {
                      max: 10,
                      min: 10,
                      message: "Please enter a valid 10-digit phone number",
                    },
                  ]}
                  name="mobile"
                  label={"Phone number"}
                >
                  <input
                    placeholder="Enter your phone number"
                    className="h-10 rounded-md bg-transparent hover:bg-transparent text-white focus:bg-transparent target:bg-transparent hover:target:bg-transparent placeholder:text-gray-500 border-white border md:w-full px-3"
                    autoComplete="tel"
                    value={formData.mobile}
                    onChange={handleChange}
                    name="mobile"
                  />
                </Form.Item>

                <Form.Item
                  className="text-lg font-semibold"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your email address",
                    },
                    {
                      type: "email",
                      message: "Please enter a valid email address",
                    },
                  ]}
                  name="email"
                  label={"Email"}
                >
                  <input
                    placeholder="Enter your email address"
                    className="h-10 rounded-md bg-transparent hover:bg-transparent text-white focus:bg-transparent target:bg-transparent hover:target:bg-transparent placeholder:text-gray-500 border-white border md:w-full px-3"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    name="email"
                  />
                </Form.Item>

                <Form.Item
                  name="message"
                  label={"Message"}
                  className="text-lg font-semibold"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your message",
                    },
                  ]}
                >
                  <input
                    placeholder="Enter your message"
                    autoComplete="text"
                    className="h-10 rounded-md bg-transparent hover:bg-transparent text-white focus:bg-transparent target:bg-transparent hover:target:bg-transparent placeholder:text-gray-500 border-white border md:w-full px-3"
                    value={formData.message}
                    onChange={handleChange}
                    name="message"
                  />
                </Form.Item>

                <Button
                  type="primary"
                  className="mt-5 h-10 w-full font-bold text-base bg-transparent border border-gray-200"
                  htmlType="submit"
                  loading={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </Form>
            </motion.div>

            <motion.div
              variants={HeadingVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              className=""
            >
              <img
                alt="Contact us"
                className="hidden lg:block max-h-full w-full rounded-lg object-cover mt-5"
                src="https://images.unsplash.com/photo-1543269664-56d93c1b41a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGhhcHB5JTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactUs;
