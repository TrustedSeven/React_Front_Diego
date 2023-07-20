import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignIn from "./components/pages/SignIn";
import Home from "./components/pages/Home";
import ComingSoon from "./components/pages/ComingSoon";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/coming" element={<ComingSoon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
