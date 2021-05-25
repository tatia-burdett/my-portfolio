import React from 'react';
import './App.css'

import NavBar from '../NavBar/NavBar'
import FullScreen from '../FullScreen/FullScreen'
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'


function App() {
  return (
    <div className='App'>
      <nav className='app-nav'>
        <NavBar />
      </nav>
      <main className='app-main'>
        <FullScreen />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className='app-footer'>
        <Footer />
      </footer>
    </div>
  );
}

export default App;