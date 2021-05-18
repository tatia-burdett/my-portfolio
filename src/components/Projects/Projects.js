import React from 'react'
import './Projects.css'

import Project from './Project/Project'

class Projects extends React.Component {
  render() {
    return (
      <section className='projects' id='projects'>
        <h3>Solo Projects</h3>
        <Project />
      </section>
    )
  }
}

export default Projects