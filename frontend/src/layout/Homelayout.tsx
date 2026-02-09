import {Layout, theme} from "antd";

const {Header, Content, Footer} = Layout;

const Homelayout= ({children}) => {

     const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  
    return (
        <Layout>
            <Header className="!bg-green-600 flex items-center justify-center">
                <h1 className="text-white text-3xl font-bold">
                    PaisaBachat
                </h1>
                </Header>
            <Content 
           style={{
          margin: "24px 16px",
          padding: 24,
          minHeight: "80vh",
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
           >
              {children}
                </Content>
      <Footer className="!bg-green-600 text-center text-white">
        <h1 className="text-white text-lg">
          PaisaBachat ©2026 Created by Sneha Chand
        </h1>
      </Footer>
                </Layout>
    )
}
export default Homelayout;