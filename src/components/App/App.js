import React from 'react';

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
      <nav>
        <NavBar />
      </nav>
      <main>
        <FullScreen />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;