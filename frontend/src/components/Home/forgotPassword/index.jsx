import { Card, Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;

const { Item } = Form;

const ForgotPassword = () => {
  const navigate = useNavigate();
const [forgotForm] = Form.useForm();
const [rePasswordForm] = Form.useForm();
const [loading, setLoading] = useState(false);
const [token, setToken] = useState(null);


  const onFinish = async (values) => {
    try {
      setLoading(true);

      const { data } = await axios.post("/api/user/login", values);
      const {role}= data;

      if (role === "admin") {
  return toast.info("Admin login successful. Please use the admin panel to access admin features.");
}

// if user
if (role === "user") {
  navigate("/app/user");
}

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
            Forgot your password? No worries! Enter your email below and we'll send you instructions to reset it.
          </p>
          {
            token ?
            
<Form name="login_form"
          layout="vertical"
          onFinish={onFinish}
          form={rePasswordForm}>

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
            <Item
              name="re-password"
              label={<span className="text-gray-300">Re-Enter Password</span>}
              rules={[{ required: true, message: "Password required" }]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Enter your password"
                className="bg-[rgba(0,0,0,0.6)] text-green-100 border-green-500/40 backdrop-blur-md"
              />
            </Item>

            {/* PASSWORD */}

            {/* BUTTON */}
            <Item>
              <Button
              loading={loading}
                htmlType="submit"
                block
                className="!bg-green-500 hover:!bg-green-600 !text-black !font-bold h-11 rounded-lg shadow-[0_0_20px_rgba(0,255,150,0.6)]"
              >
                Change Password
              </Button>
            </Item>

          </Form>
          :
          <Form name="login_form"
          layout="vertical"
          onFinish={onFinish}
          form={forgotForm}>

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

            {/* BUTTON */}
            <Item>
              <Button
              loading={loading}
                htmlType="submit"
                block
                className="!bg-green-500 hover:!bg-green-600 !text-black !font-bold h-11 rounded-lg shadow-[0_0_20px_rgba(0,255,150,0.6)]"
              >
                Send Reset Instructions
              </Button>
            </Item>

          </Form>
          }

          {/* LINKS */}
          <div className="flex items-center justify-between mt-2">

            <Link
              to="/"
              className="text-gray-400 hover:text-green-400 underline"
            >
              Sign in
            </Link>

            <Link
              to="/signup"
              className="text-green-400 font-semibold hover:text-green-300"
            >
              Don't have an account? Create One →
            </Link>

          </div>

        </Card>
      </div>

    </div>
  );
};

export default ForgotPassword;



