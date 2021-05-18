import React from 'react'
import './NavBar.css'

class NavBar extends React.Component {
  render() {
    return (
      <div className='navbar'>
        <p>Logo</p>
        <ul className='navbar-links'>
          <li><a href='#skills'>Skills</a></li>
          <li><a href='#projects'>Projects</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>
      </div>
    )
  }
}

export default NavBar