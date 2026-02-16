import { Image,Layout, Menu, Button } from "antd";
import {
  AppstoreOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LogoutOutlined,
  BarChartOutlined
} from "@ant-design/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useZIndex } from "antd/es/_util/hooks";

const { Sider, Header, Content, Footer } = Layout;

const UserLayout = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const items = [
    {
      key: "/app/user/dashboard",
      icon: <AppstoreOutlined />,
      label: "Dashboard"
    },
    {
      key: "/app/user/reports",
      icon: <BarChartOutlined />,
      label: "Reports"
    }
  ];

  const handleNavigate = (menu) => {
    navigate(menu.key);
  };

  const siderStyle = {
  overflow: "auto",
    height: "100vh",
    position: "sticky",
    top: 0,
    bottom:0,
    scrollbarWidth: "thin",
    scrollbarGutter: "stable",
    insetInlineStart: 0,
};

const headerStyle = {
    position: "sticky",
    top: 0,
    zIndex:1,
    width: "100%",
    display: "flex",
    alignItems: "center",
    padding: 0
}

  return (
    <Layout className="!min-h-screen">

      {/* SIDEBAR */}
      <Sider style={siderStyle} collapsible collapsed={open} >
        <div className="flex justify-center my-4">
          <Image src="/otp.jpg"
          alt="logo" 
          width={50} 
          height={50} 
          className="rounded-full mx-auto mb-3" />
        </div>

        <Menu
          theme="dark"
          items={items}
          onClick={handleNavigate}
          defaultSelectedKeys={["/app/user/dashboard"]}
        />
      </Sider>

      {/* RIGHT SIDE */}
      <Layout>

        {/* HEADER */}
        <Header style={headerStyle} className="flex justify-between items-center !bg-white !px-4 !shadow">

          <Button
            type="text"
            onClick={() => setOpen(!open)}
            icon={open ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          />

          <Button icon={<LogoutOutlined />} danger>
            Logout
          </Button>

        </Header>

        {/* CONTENT */}
        <Content className="p-6">
          <h1 className="text-2xl font-bold">Welcome to PaisaBachat Dashboard 💰</h1>
        </Content>

      </Layout>
    </Layout>
  );
};

export default UserLayout;
