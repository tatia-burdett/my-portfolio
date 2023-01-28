import React from 'react';
import { Routes, Route } from "react-router-dom"
import './App.css'
import Home from '../../routes/Home/Home'
import Contact from '../Contact/Contact'
import NavBar from '../NavBar/NavBar'


function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='contact' element={ <Contact/> }/>
      </Routes>
    </div>
  );
}

export default App;