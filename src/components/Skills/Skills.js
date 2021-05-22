import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3, faJs, faReact, faNodeJs, faGitSquare } from '@fortawesome/free-brands-svg-icons'
import './Skills.css'

class Skills extends React.Component {
  render() {
    return (
      <section className='skills' id='skills'>
        <h3>Skills</h3>
        <div className='skills-container'>
          <div>
            <FontAwesomeIcon icon={faHtml5} className='skill-icon grow'/>
            <p>HTML</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faCss3} className='skill-icon grow'/>
            <p>CSS</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faJs} className='skill-icon grow'/>
            <p>JavaScript</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faReact} className='skill-icon grow'/>
            <p>React</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faNodeJs} className='skill-icon grow'/>
            <p>Node.js</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faGitSquare} className='skill-icon grow'/>
            <p>Git</p>
          </div>
          <div>
            <img src="https://img.icons8.com/ios-filled/50/000000/jquery.png" alt='' className='grow'/>
            <p>jQuery</p>
          </div>
          <div>
            <img src="https://img.icons8.com/ios-filled/50/000000/postgreesql.png" alt='' className='grow'/>
            <p>Postgres</p>
          </div>
          <div>
            <img src="https://img.icons8.com/ios-filled/50/000000/sql.png" alt='' className='grow'/>   
            <p>SQL</p>         
          </div>
        </div>
      </section>
    )
  }
}

export default Skills