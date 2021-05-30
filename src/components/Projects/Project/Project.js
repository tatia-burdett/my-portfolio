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

// Hi, I'm Tatia, a full stack engineer. I've worked professionally as a nurse for about 8 years, though my passion was also to pursue web development. Nursing has taught me a lot, and I really appreciate everything I have learned through my experience in the health care industry. 

// In 2020, I joined Bloc, currently owned by Thinkful, and studied full stack software developing full time. I built multiple projects throughout the program, and got a taste for what it feels like to spend every day with my hands on code. Due to the nature of the program, I learned to truly become a problem solver and learned when I need to sit with a problem myself. versus when Google is the solution. 

// My skill set is currently HTML, CSS, JavaScript, jQuery, React, PostgreSQL, Express Git. You can check out my GitHub here: https://github.com/tatia-burdett