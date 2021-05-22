import React from 'react'
import DATA from '../Data/Data'
import './Project.css'

class Project extends React.Component {
  render() {
    const project = DATA

    return (
      <div className='project'>
        {project.map(p => 
          <div className='single-project' key={p.id || ''}>
            <h4 className='project-title'>{p.title}</h4>
            <ul className='project-links'>
              <li>{p.github}</li>
              <li>{p.githubAPI}</li>
              <li>{p.liveLink}</li>
            </ul>
            <p>{p.description}</p>
            <div className='image-container'>
              {p.img1}
              {p.img2}
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default Project