import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3, faJs, faReact, faNodeJs, faGitSquare } from '@fortawesome/free-brands-svg-icons'
import './Skills.css'

class Skills extends React.Component {
  render() {
    return (
      <section className='skills'>
        <h3>Skills</h3>
        <div className='skills-container'>
          <FontAwesomeIcon icon={faHtml5} className='skill-icon'/>
          <FontAwesomeIcon icon={faCss3} className='skill-icon'/>
          <FontAwesomeIcon icon={faJs} className='skill-icon'/>
          <FontAwesomeIcon icon={faReact} className='skill-icon'/>
          <FontAwesomeIcon icon={faNodeJs} className='skill-icon'/>
          <FontAwesomeIcon icon={faGitSquare} className='skill-icon'/>
          <img src="https://img.icons8.com/ios-filled/50/000000/jquery.png" alt=''/>
          <img src="https://img.icons8.com/ios-filled/50/000000/postgreesql.png" alt=''/>
          <img src="https://img.icons8.com/ios-filled/50/000000/sql.png" alt=''/>
        </div>
      </section>
    )
  }
}

export default Skills