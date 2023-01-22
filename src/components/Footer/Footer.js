import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <p>&#169; Tatia Burdett</p>
      <div>
        <a href='https://github.com/tatia-burdett' target='_blank' rel='noreferrer' className='social-links'>
          <FontAwesomeIcon icon={faGithub} className='footer-icon'/>
        </a>
        <a href='https://www.linkedin.com/in/tatjanaburdett/' target='_blank' rel='noreferrer' className='social-links'>
          <FontAwesomeIcon icon={faLinkedinIn} className='footer-icon'/>
        </a>
      </div>
    </div>
  )
}

export default Footer