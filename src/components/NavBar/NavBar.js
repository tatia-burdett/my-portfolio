import React from 'react'

class NavBar extends React.Component {
  render() {
    return (
      <div className='navbar'>
        <p>Logo</p>
        <ul>
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