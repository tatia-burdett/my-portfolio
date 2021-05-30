import hhLanding from '../Screenshots/hh-landing.png'
import hhPosts from '../Screenshots/hh-posts.png'
import llLanding from '../Screenshots/ll-landing.png'
import llTimeline from '../Screenshots/ll-timeline.png'
import swCurrent from '../Screenshots/sw-current.png'
import swForecast from '../Screenshots/sw-forecast.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons'

const data = [
  {
    id: 1,
    title: <a href="https://github.com/tatia-burdett/lodgelog-app" target='_black' className='title-link'>LodgeLog</a>,
    github: <a href="https://github.com/tatia-burdett/lodgelog-app" target='_black'>Github App Repo</a>,
    githubAPI: <a href="https://github.com/tatia-burdett/lodgelog-api" target='_black'>Github Server Repo</a>,
    liveLink: <a href="https://lodgelog-app-tatia-burdett.vercel.app/" target='_black' className='ext-link'>
                <FontAwesomeIcon icon={faExternalLinkSquareAlt} />
              </a>,
    img1: <img src={llLanding} alt='' className='proj-image grow'/>,
    img2: <img src={llTimeline} alt='' className='proj-image grow'/>,
    description: 'LodgeLog is a web app used to store users personal address history.',
    bullets: <ul>
              <li>Implemented a responsive client using JavaScript and React that passes data to components with context and state.</li>
              <li>Built RESTful API endpoints using Node.js and Express to perform GET, POST, PATCH and DELETE crud operations.</li>
              <li>Created private enpoints and login feature using authentication with JWT.</li>
            </ul>,
    tech: 'HTML5 | CSS | JavaScript | React | Node.js | Express | PostgreSQL | Knex.js | RESTful APIs'
  },
  {
    id: 2,
    title: <a href="https://github.com/tatia-burdett/hello-world-app" target='_black' className='title-link'>Hello World Group Journal</a>,
    github: <a href="https://github.com/tatia-burdett/hello-world-app" target='_black'>Github App Repo</a>,
    githubAPI: <a href="https://github.com/tatia-burdett/hello-world-api" target='_black'>Github Server Repo</a>,
    liveLink: <a href="https://hello-world-app-tatia-burdett.vercel.app/" target='_black'>
                <FontAwesomeIcon icon={faExternalLinkSquareAlt} />
              </a>,
    img1: <img src={hhLanding} alt='' className='proj-image grow'/>,
    img2: <img src={hhPosts} alt='' className='proj-image grow' />,
    description: 'Hello World is a client-side React web app that allows users to view and post comments.',
    bullets: <ul>
              <li>Build full stack project using JavaScript and React.js, passing data with context and state.</li>
              <li>Designed RESTful API using Node.js and Express which performs crud operations GET, POST, PATCH and DELETE.</li>
            </ul>,
    tech: 'HTML5 | CSS | JavaScript | React | Node.js | Express | PostgreSQL | Knex.js | RESTful APIs'
  },
  {
    id: 3,
    title: <a href="https://github.com/tatia-burdett/simply-weather" target='_black' className='title-link'>Simply Weather</a>,
    github: <a href="https://github.com/tatia-burdett/simply-weather" target='_black'>Github App Repo</a>,
    githubAPI: 'N/A',
    liveLink: <a href="https://tatia-burdett.github.io/simply-weather/" target='_black'>
                <FontAwesomeIcon icon={faExternalLinkSquareAlt} />
              </a>,
    img1: <img src={swCurrent} alt='' className='proj-image grow'/>,
    img2: <img src={swForecast} alt='' className='proj-image grow'/>,
    description: 'Utilizes users location based off IP address to get current and 5 day forecast.',
    bullets: <ul>
              <li>Built a responsive client with JavaScript and jQuery that integrates the OpenWeatherMap and Ipify - IP Gelocation APIs.</li>
             </ul>,
    tech: 'HTML5 | CSS | JavaScript | jQuery | RESTful APIs'
  }
]

export default data