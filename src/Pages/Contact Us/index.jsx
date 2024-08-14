import { Button, Form } from "antd";
import { FiPhoneCall } from "react-icons/fi";
import { GrMapLocation } from "react-icons/gr";
import { MdMoreTime, MdOutlineMarkEmailRead } from "react-icons/md";
import { FormInput } from "../../Component/Common/Form";

const ContactUs = () => {
  return (
    <div>
      {/* contact */}
      <div className="mx-auto max-w-7xl px-4 py-28">
        <div className="text-center text-orange-600 font-bold text-3xl md:text-5xl mb-14">
          Contact Us
        </div>

        <div className="relative w-full bg-gradient-to-tr from-red-700/70 to-blue-950 rounded-tr-[100px] pt-14 pb-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 md:mx-10 md:my-10">
            {/* Right div */}
            <div className="w-full md:w-1/2 text-center md:text-left px-4">
              <h1 className="text-white font-bold text-3xl md:text-4xl">
                Get Connected
              </h1>
              <p className="text-white mt-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
                provident incidunt laudantium architecto expedita dolorem, error
                quam eaque vero magni.
              </p>
            </div>

            {/* Left div */}
            <div className="w-full md:w-1/2 px-4">
              <div className="space-y-5">
                <div className="flex items-center">
                  <div className="bg-red-500 rounded-full p-2 mr-3">
                    <GrMapLocation className="h-5 w-5 text-white" />
                  </div>
                  <div className="text-white">
                    308 3rd Floor Pearl Plaza Nr Maharshi Sandipani School
                    Haridarshan Cross, Road, Naroda, Ahmedabad, Gujarat 382330
                  </div>
                </div>
                <div className="flex items-center mt-5">
                  <div className="bg-red-500 rounded-full p-2 mr-3">
                    <MdOutlineMarkEmailRead className="h-5 w-5 text-white" />
                  </div>
                  <div className="text-white">Yourname@Email.Com</div>
                </div>
                <div className="flex items-center mt-5">
                  <div className="bg-red-500 rounded-full p-2 mr-3">
                    <FiPhoneCall className="h-5 w-5 text-white" />
                  </div>
                  <div className="text-white">+123 456 7890</div>
                </div>
                <div className="flex items-center mt-5">
                  <div className="bg-red-500 rounded-full p-2 mr-3">
                    <MdMoreTime className="h-5 w-5 text-white" />
                  </div>
                  <div className="text-white">
                    Office Hours: 8AM - 11PM
                    <br />
                    Sunday - Weekend Day
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl pt-12 md:pt-24">
          <div className="grid justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2 lg:justify-items-start">
            {/* Contact Form */}

            <div className="flex flex-col items-center md:items-start px-4">
              <div className="text-center md:text-left">
                <p className="text-2xl font-bold text-orange-600 md:text-4xl">
                  Get in Touch
                </p>
                <p className="mt-4 text-lg text-white">
                  Our friendly team would love to hear from you.
                </p>
              </div>
              <Form
                name="basic"
                layout="vertical"
                // onFinish={onFinish}
                autoComplete="off"
                className="register-form mx-auto w-60 pt-2 sm:w-96 "
              >
                <Form.Item
                  className="text-lg font-semibold"
                  rules={[
                    { required: true, message: "Please enter your full name" },
                  ]}
                  name="name"
                  label={"Full Name"}
                >
                  <FormInput
                    placeholder={"Enter your full name"}
                    className="h-10 rounded-md bg-transparent hover:bg-transparent text-white focus:bg-transparent target:bg-transparent hover:target:bg-transparent placeholder:text-gray-500"
                    autoComplete="text"
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
                    },
                  ]}
                  name="email"
                  label={"Email"}
                >
                  <FormInput
                    placeholder={"Enter your email address"}
                    className="h-10 rounded-md bg-transparent hover:bg-transparent text-white focus:bg-transparent target:bg-transparent hover:target:bg-transparent placeholder:text-gray-500"
                    autoComplete="email"
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
                    {
                      type: "message",
                    },
                  ]}
                >
                  <FormInput
                    placeholder={"Enter your message"}
                    autoComplete="text"
                    className="h-10 rounded-md bg-transparent hover:bg-transparent text-white focus:bg-transparent target:bg-transparent hover:target:bg-transparent placeholder:text-gray-500"
                  />
                </Form.Item>
                <Button
                  type="primary"
                  className=" mt-5 h-10 w-full font-bold text-base bg-transparent border border-gray-200"
                  htmlType="submit"
                  // loading={isPending}
                >
                  Send Message
                </Button>
              </Form>
            </div>

            {/* Image */}
            <img
              alt="Contact us"
              className="hidden lg:block max-h-full w-full rounded-lg object-cover mt-5"
              src="https://images.unsplash.com/photo-1543269664-56d93c1b41a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGhhcHB5JTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
