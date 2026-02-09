import HomePage from "./components/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App=() => {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>

    </BrowserRouter>
  )
}
export default App;