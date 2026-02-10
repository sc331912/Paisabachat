import { Card, Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined, PhoneOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Homelayout from "../../../layout/Homelayout";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL 

const { Item } = Form;

const Signup = () => {

    const onFinish = async (values) => {
        try {
    console.log(values);

    const { data } = await axios.post(
      "/api/user/send-mail",   // email send endpoint
      values
    );

    console.log(data);
    alert("OTP sent to email");

  } catch (error) {
    console.log(error);
    alert("Something went wrong");
  }
    }
  return (
    <Homelayout>

      <div className="flex min-h-screen w-full bg-gradient-to-br from-black via-[#03140c] to-black">

        {/* LEFT IMAGE */}
        <div className="w-1/2 hidden md:flex items-center justify-center relative">

          {/* green glow */}
          <div className="absolute w-[500px] h-[500px] bg-green-500/20 blur-[140px] rounded-full"></div>

          <img
            src="/login2.png"
            alt="signup"
            className="w-3/4 opacity-90 mix-blend-lighten drop-shadow-[0_0_40px_rgba(0,255,150,0.6)]"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-6">

          <Card className="w-full max-w-md !bg-transparent bg-[rgba(0,40,20,0.65)] backdrop-blur-xl border border-green-500/40 shadow-[0_0_60px_rgba(0,255,150,0.25)] rounded-2xl">

            {/* TITLE */}
            <h1 className="text-4xl font-bold text-center mb-2 text-green-400 tracking-wide drop-shadow-[0_0_10px_rgba(0,255,150,0.7)]">
              Create Account 🪙
            </h1>

            <p className="text-center text-gray-300 mb-6 text-sm">
              Start your smart saving journey
            </p>

            <Form 
            name="login_form"
            layout="vertical"
            onFinish={onFinish}>

              {/* FULL NAME */}
              <Item
                name="name"
                label={<span className="text-gray-300">Full Name</span>}
                rules={[{ required: true, message: "Enter full name" }]}
              >
                <Input
                  prefix={<UserOutlined />}
                  placeholder="Enter full name"
                  className="bg-[rgba(0,0,0,0.6)] text-green-100 border-green-500/40 backdrop-blur-md"
                />
              </Item>

              {/* EMAIL */}
              <Item
                name="email"
                label={<span className="text-gray-300">Email</span>}
                rules={[{ required: true, message: "Enter email" }]}
              >
                <Input
                  prefix={<UserOutlined />}
                  placeholder="Enter email"
                  className="bg-[rgba(0,0,0,0.6)] text-green-100 border-green-500/40 backdrop-blur-md"
                />
              </Item>

              {/* MOBILE */}
              <Item
                name="mobile"
                label={<span className="text-gray-300">Mobile</span>}
                rules={[{ required: true, message: "Enter mobile" }]}
              >
                <Input
                  prefix={<PhoneOutlined />}
                  placeholder="Enter mobile"
                  className="bg-[rgba(0,0,0,0.6)] text-green-100 border-green-500/40 backdrop-blur-md"
                />
              </Item>

              {/* PASSWORD */}
              <Item
                name="password"
                label={<span className="text-gray-300">Password</span>}
                rules={[{ required: true, message: "Enter password" }]}
              >
                <Input.Password
                  prefix={<LockOutlined />}
                  placeholder="Enter password"
                  className="bg-[rgba(0,0,0,0.6)] text-green-100 border-green-500/40 backdrop-blur-md"
                />
              </Item>

              {/* BUTTON */}
              <Item>
                <Button
                  htmlType="submit"
                  block
                  className="!bg-green-500 hover:!bg-green-600 !text-black !font-bold h-11 rounded-lg shadow-[0_0_20px_rgba(0,255,150,0.6)]"
                >
                  Create PaisaBachat Account
                </Button>
              </Item>

            </Form>

            {/* LOGIN LINK */}
            <div className="flex justify-center mt-2">
              <Link
                to="/"
                className="text-green-400 font-semibold hover:text-green-300"
              >
                Already have account? Login →
              </Link>
            </div>

          </Card>
        </div>

      </div>

    </Homelayout>
  );
};

export default Signup;
