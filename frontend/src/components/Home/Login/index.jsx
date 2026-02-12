import { Card, Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;

const { Item } = Form;

const Login = () => {
const [loginForm] = Form.useForm();
const [loading, setLoading] = useState(false);


  const onFinish = async (values) => {
    try {
      setLoading(true);

      const { data } = await axios.post("/api/user/login", values);

      toast.success("Login successful");
      console.log("Login response:", data); // Debugging log
    } catch (error){
      toast.error(error.response? error.response.data.message : error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen w-full bg-gradient-to-br from-black via-[#03140c] to-black">

      {/* LEFT IMAGE */}
      <div className="w-1/2 hidden md:flex items-center justify-center relative">

        {/* green glow */}
        <div className="absolute w-[500px] h-[500px] bg-green-500/20 blur-[140px] rounded-full"></div>

        <img
          src="/login2.png"
          alt="login"
          className="w-3/4 opacity-90 mix-blend-lighten drop-shadow-[0_0_40px_rgba(0,255,150,0.6)]"
        />
      </div>

      {/* RIGHT LOGIN CARD */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-6">

        <Card className="w-full max-w-md !bg-transparent bg-[rgba(0,40,20,0.65)] backdrop-blur-xl border border-green-500/40 shadow-[0_0_60px_rgba(0,255,150,0.25)] rounded-2xl">

          {/* TITLE */}
          <h1 className="text-4xl font-bold text-center mb-2 text-green-400 tracking-wide drop-shadow-[0_0_10px_rgba(0,255,150,0.7)]">
            Paisa Bachat 💰
          </h1>

          <p className="text-center text-gray-300 mb-6 text-sm">
            Smart way to track & save your money
          </p>

          <Form name="login_form"
          layout="vertical"
          onFinish={onFinish}
          form={loginForm}>

            {/* EMAIL */}
            <Item
              name="email"
              label={<span className="text-gray-300">Email</span>}
              rules={[{ required: true, message: "Email required" }]}
            >
              <Input
                prefix={<UserOutlined />}
                placeholder="Enter your email"
                className="bg-[rgba(0,0,0,0.6)] text-green-100 border-green-500/40 backdrop-blur-md"
              />
            </Item>

            {/* PASSWORD */}
            <Item
              name="password"
              label={<span className="text-gray-300">Password</span>}
              rules={[{ required: true, message: "Password required" }]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Enter your password"
                className="bg-[rgba(0,0,0,0.6)] text-green-100 border-green-500/40 backdrop-blur-md"
              />
            </Item>

            {/* BUTTON */}
            <Item>
              <Button
              loading={loading}
                htmlType="submit"
                block
                className="!bg-green-500 hover:!bg-green-600 !text-black !font-bold h-11 rounded-lg shadow-[0_0_20px_rgba(0,255,150,0.6)]"
              >
                Login to Paisa Bachat
              </Button>
            </Item>

          </Form>

          {/* LINKS */}
          <div className="flex items-center justify-between mt-2">

            <Link
              to="#"
              className="text-gray-400 hover:text-green-400 underline"
            >
              Forgot Password?
            </Link>

            <Link
              to="/signup"
              className="text-green-400 font-semibold hover:text-green-300"
            >
              Create Account →
            </Link>

          </div>

        </Card>
      </div>

    </div>
  );
};

export default Login;



