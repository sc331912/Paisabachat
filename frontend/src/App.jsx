import HomePage from "./components/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Home/Signup";

const App=() => {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<HomePage />} />
         <Route path="/signup" element={<Signup />} />
      </Routes>

    </BrowserRouter>
  )
}
export default App;