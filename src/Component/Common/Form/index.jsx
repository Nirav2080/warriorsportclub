import {
  Button,
  Checkbox,
  Col,
  DatePicker,
  Empty,
  Form,
  Input,
  Menu,
  Modal,
  Popover,
  Radio,
  Row,
  Select,
} from "antd";
import FormItem from "antd/es/form/FormItem";
import OTP from "antd/es/input/OTP";
import TextArea from "antd/es/input/TextArea";

const { MonthPicker } = DatePicker;

export const CustomFormItem = (props) => {
  return <FormItem {...props} />;
};

export const FormInput = (props) => {
  return <Input className="custom-antd-form antd-custom-input" {...props} />;
};

export const FormInputPassWord = (props) => {
  return <Input.Password {...props} />;
};

export const FormTextArea = (props) => {
  return (
    <TextArea className="custom-antd-form antd-custom-textarea" {...props} />
  );
};

export const FormDatePicker = (props) => {
  return <DatePicker className="custom-antd-form" {...props} />;
};

export const FormMonthPicker = (props) => {
  return <MonthPicker className="custom-antd-form" {...props} />;
};

export const FormPopOver = (props) => {
  return <Popover className="custom-antd-form" {...props} />;
};

export const FormSelect = (props) => {
  return <Select className="custom-antd-form" {...props} />;
};

export const FormOtp = (props) => {
  return <OTP className="custom-antd-form" {...props} />;
};

export const FormEmpty = (props) => {
  return <Empty className="custom-antd-form antd-custom-input" {...props} />;
};

export const FormMenu = (props) => {
  return <Menu className="custom-antd-form antd-custom-input" {...props} />;
};

export const FormButton = (props) => {
  return <Button className="custom-antd-form antd-custom-input" {...props} />;
};

export const CustomForm = (props) => {
  return <Form className="custom-antd-form antd-custom-input" {...props} />;
};

export const FormRow = (props) => {
  return <Row className="custom-antd-form" {...props} />;
};

export const FormCol = (props) => {
  return <Col className="custom-antd-form" {...props} />;
};

export const FormModal = (props) => {
  return <Modal className="custom-antd-form" {...props} />;
};

export const RadioButton = (props) => {
  return <Radio className="custom-antd-radio" {...props} />;
};

export const CheckboxButton = (props) => {
  return <Checkbox className="custom-antd-checkbox" {...props} />;
};
