import React from 'react'
import './Home.css'
import Typewriter from 'typewriter-effect';

export default function Home() {
  return (
    <header className='fullscreen' id='fullscreen'>
      <div className='fullscreen-header'>
        <p className='header-p'>Hello, my name is</p>
        <h1>Tatia Burdett</h1>
        <h2>
          <Typewriter
          options={{
            strings: ['Full Stack Web Developer', 'Musician', 'Photographer', 'Traveler', 'Mother', 'Yoga Lover', 'Philosopher'],
            autoStart: true,
            loop: true,
            deleteSpeed: 10,
          }}
        />
        </h2>
      </div>
    </header>
  )
}