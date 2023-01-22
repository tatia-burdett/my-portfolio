import React from 'react'
import './NavBar.css'


export default function NavBar() {
  return (
    <div className='navbar'>
      <a href='#fullscreen' className='logo'>{'<TB/>'}</a>
      <ul className='navbar-links'>
        <li><a href='#about'>About</a></li>
        <li><a href='#skills'>Skills</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
    </div>
  )
}