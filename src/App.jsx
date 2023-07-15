import React from "react";
import Home from "./pages/Home";
import FooterDiv from "./Components/FooterDiv/FooterDiv";
import Navbar from "./Components/Navbar/Navbar";
import Companies from "./pages/Companies";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Porfolio from "./pages/Porfolio";
import ForgotPassword from "./pages/ForgotPassword";
import Otp from "./pages/Otp";

function App() {
  return (
    <div className="w-[85%] m-auto bg-white">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/portfolio" element={<Porfolio />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <FooterDiv />
      </BrowserRouter>
    </div>
  );
}

export default App;
