import { Button, Form } from "antd";
import { FormInput, FormSelect } from "../../Component/Common/Form";

const Admission = () => {
  return (
    <div className="pt-28 ">
      <div>
        <h1 className="text-3xl md:text-6xl font-bold text-center text-orange-600 mb-6">
          ADMISSION ENQUIRY
        </h1>
      </div>
      {/*Form Div*/}
      <div className=" mx-auto h-full min-h-[90vh] w-full bg-Gray-200 p-4 sm:box-border sm:flex sm:h-screen sm:w-[50%] sm:flex-col items-center sm:justify-center">
        <Form
          name="basic"
          layout="vertical"
          // onFinish={onFinish}
          autoComplete="off"
          className="register-form mx-auto max-w-96 pt-2 sm:w-96 "
        >
          <Form.Item
            className="pb-2 text-lg font-semibold"
            rules={[{ required: true, message: "Please enter your full name" }]}
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
            className="pb-2 text-lg font-semibold"
            rules={[
              { required: true, message: "Please enter your phone number" },
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
            className="pb-2 text-lg font-semibold"
            rules={[
              { required: true, message: "Please enter your email address" },
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
            name="address"
            label={"Address"}
            className="pb-2 text-lg font-semibold"
            rules={[
              { required: true, message: "Please enter your email address" },
              {
                type: "address",
              },
            ]}
          >
            <FormInput
              placeholder={"Enter your address"}
              autoComplete="text"
              className="h-10 rounded-md bg-transparent hover:bg-transparent text-white focus:bg-transparent target:bg-transparent hover:target:bg-transparent placeholder:text-gray-500"
            />
          </Form.Item>

          <Form.Item
            className="pb-2 text-lg font-semibold"
            label="Choose Your Sport"
            name="chooseyoursport"
            rules={[
              { required: true, message: "Please select a quantity type!" },
            ]}
          >
            <FormSelect
              className="h-10 rounded-md bg-transparent hover:bg-transparent text-white focus:bg-transparent target:bg-transparent hover:target:bg-transparent placeholder:text-gray-50"
              placeholder="-Select Sport-"
              options={[
                { value: "cricket", label: "Cricket" },
                { value: "football", label: "Football" },
                { value: "kabaddi", label: "Kabaddi" },
                { value: "badminton", label: "Badminton" },
                { value: "basketball", label: "Basketball" },
                { value: "volleyball", label: "Volleyball" },
              ]}
            />
          </Form.Item>

          <Button
            type="primary"
            className="mt-4 h-10 w-full font-bold text-xl bg-transparent border border-gray-200 text-orange-600 hover:text-white hover:bg-orange-600"
            htmlType="submit"
            // loading={isPending}
          >
            Sign Up
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Admission;
