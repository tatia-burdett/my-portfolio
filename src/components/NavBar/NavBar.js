import React from 'react'

class NavBar extends React.Component {
  render() {
    return (
      <nav className='navbar'>
        <p>Logo</p>
        <ul>
          <li>Skills</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    )
  }
}

export default NavBar