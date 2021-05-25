import React from 'react'
import './FullScreen.css'

class FullScreen extends React.Component {
  render() {
    return (
      <header className='fullscreen' id='fullscreen'>
        <div className='fullscreen-header'>
          <p>Hello, my name is</p>
          <h1>Tatia Burdett</h1>
          <h2>I am a Full Stack Web Developer</h2>
          <p>Currently open to opportunities throughout the US.</p>
          <a href='https://drive.google.com/file/d/1xGdbrtnpaXpPFPEieWNSfUfGjhnRkwe9/view?usp=sharing' target='_blank' rel='noreferrer' className='resume'>Resume</a>
        </div>
      </header>
    )
  }
}

export default FullScreen