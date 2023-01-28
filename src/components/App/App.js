import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "../../routes/Home/Home";
import Contact from "../Contact/Contact";
import NavBar from "../NavBar/NavBar";
import About from "../../routes/About/About";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
