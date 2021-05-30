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
            <div className='image-container'>
              {p.img1}
            </div>
            <div className='project-content'>
              <h4 className='project-title'>{p.title}</h4>
              <p>{p.description} {' '}  {p.liveLink}</p> 
              <p className='project-bullets'>{p.bullets}</p>
              <p className='project-tech'>
                <strong>Tech: </strong>
                {p.tech}
              </p>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default Project