import React from 'react'
import './NavBar.css'

class NavBar extends React.Component {
  render() {
    return (
      <div className='navbar'>
        <p>Logo</p>
        <ul className='navbar-links'>
          <li>Skills</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    )
  }
}

export default NavBar