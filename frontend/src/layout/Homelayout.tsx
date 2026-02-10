import { Layout } from "antd";

const { Header, Content, Footer } = Layout;

const Homelayout = ({ children }) => {
  return (
    <Layout style={{ minHeight: "100vh", background: "black" }}>

      {/* 🔥 PREMIUM HEADER */}
      <Header className="relative bg-black border-b border-green-500/30 shadow-[0_0_25px_rgba(0,255,150,0.15)] flex items-center justify-between px-8">

        {/* LEFT LOGO */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(0,255,150,0.6)]">
            💸
          </div>

          <h1 className="text-2xl font-bold text-green-400 tracking-wide drop-shadow-[0_0_8px_rgba(0,255,150,0.7)]">
            PaisaBachat
          </h1>
        </div>

        {/* RIGHT NAV (future use) */}
        <div className="hidden md:flex items-center gap-6 text-green-300 font-medium">
          <span className="hover:text-green-400 cursor-pointer">Dashboard</span>
          <span className="hover:text-green-400 cursor-pointer">Expenses</span>
          <span className="hover:text-green-400 cursor-pointer">Profile</span>
        </div>

        {/* GLOW LINE */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-60"></div>

      </Header>

      {/* 🟢 FULL SCREEN CONTENT */}
      <Content
        style={{
          margin: 0,
          padding: 0,
          minHeight: "100vh",
          background: "black",
        }}
      >
        {children}
      </Content>

      {/* 🔥 PREMIUM FOOTER */}
      <Footer
  style={{
    background: "black",
    padding: "12px 20px",
    borderTop: "1px solid rgba(34,197,94,0.2)",
  }}
  className="relative text-gray-400"
>

  {/* glow line */}
  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-40"></div>

  <div className="max-w-5xl mx-auto flex items-center justify-between text-xs">

    {/* left */}
    <div className="flex items-center gap-2 text-green-400">
      💸 <span>PaisaBachat</span>
    </div>

    {/* center */}
    <span className="hidden md:block text-gray-500">
      Smart expense tracker
    </span>

    {/* right */}
    <span className="text-gray-600">
      © 2026 Sneha
    </span>

  </div>
</Footer>



    </Layout>
  );
};

export default Homelayout;

