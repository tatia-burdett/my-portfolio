import React from "react";
import { Routes, Route } from "react-router-dom";
import { Row, Col } from 'react-bootstrap';
import Container from '@mui/material/Container';
import "./App.css";
import Home from "../../routes/Home/Home";
import Contact from '../../routes/Contact/Contact';
import NavBar from "../NavBar/NavBar";
import About from "../../routes/About/About";
import Projects from "../../routes/Projects/Projects";
import LodgeLog from "../../routes/Projects/LodgeLog/LodgeLog";
import HelloWorld from "../../routes/Projects/HelloWorld/HelloWorld";
import SimplyWeather from "../../routes/Projects/SimplyWeather/SimplyWeather";

// move tabs menu here 
function App() {
  return (
    <div className='app'>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/lodgelog" element={<LodgeLog />} />
        <Route path="projects/helloworld" element={<HelloWorld />} />
        <Route path="projects/simplyweather" element={<SimplyWeather />} />
      </Routes>
    </div>
  );
}

export default App;
