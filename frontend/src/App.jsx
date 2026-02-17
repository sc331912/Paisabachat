import HomePage from "./components/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Home/Signup";
import {ToastContainer,} from "react-toastify";
import PageNotFound from "./components/PageNotFound";
import UserLayout from "./components/User/UserLayout";
import ForgotPassword from "./components/Home/forgotPassword";


const App=() => {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<HomePage />} />
         <Route path="/signup" element={<Signup />} />
         <Route path="/forgot-password" element={<ForgotPassword />} />
         <Route path="/app/user" element={<UserLayout />} />
<Route path="/*" element={<PageNotFound />} />

      </Routes>
      <ToastContainer />

    </BrowserRouter>
  )
}
export default App;