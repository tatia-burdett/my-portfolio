import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import './Footer.css'

{/* <i class="fab fa-linkedin-in"></i> */}

class Footer extends React.Component {
  render() {
    return (
      <div className='footer'>
        <p>&#169; Tatia Burdett</p>
        <div>
          <FontAwesomeIcon icon={faGithub} className='footer-icon'/>
          <FontAwesomeIcon icon={faLinkedinIn} className='footer-icon'/>
        </div>
      </div>
    )
  }
}

export default Footer