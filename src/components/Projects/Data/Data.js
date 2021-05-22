import hhLanding from '../Screenshots/hh-landing.png'
import hhPosts from '../Screenshots/hh-posts.png'
import llLanding from '../Screenshots/ll-landing.png'
import llTimeline from '../Screenshots/ll-timeline.png'
import swCurrent from '../Screenshots/sw-current.png'
import swForecast from '../Screenshots/sw-forecast.png'

const data = [
  {
    id: 1,
    title: 'LodgeLog',
    github: <a href="https://github.com/tatia-burdett/lodgelog-app">Github App Repo</a>,
    githubAPI: <a href="https://github.com/tatia-burdett/lodgelog-api">Github Server Repo</a>,
    liveLink: <a href="https://lodgelog-app-tatia-burdett.vercel.app/">Live Link</a>,
    img1: <img src={llLanding} alt='' className='proj-image grow'/>,
    img2: <img src={llTimeline} alt='' className='proj-image grow'/>,
    description: 'LodgeLog is a web app used to store users personal address history. This project was created using React, Express, Node.js and PostgreSQL.'
  },
  {
    id: 2,
    title: 'Hello World - Group Journal',
    github: <a href="https://github.com/tatia-burdett/hello-world-app">Github App Repo</a>,
    githubAPI: <a href="https://github.com/tatia-burdett/hello-world-api">Github Server Repo</a>,
    liveLink: <a href="https://hello-world-app-tatia-burdett.vercel.app/">Live Link</a>,
    img1: <img src={hhLanding} alt='' className='proj-image grow'/>,
    img2: <img src={hhPosts} alt='' className='proj-image grow' />,
    description: 'Hello World is a client-side React web app that allows users to view and post comments. This project utilizes a GET and POST endpoint only. A nickname, option location, category and some content are received from the user, and a date is created and formatted using react-moment.'
  },
  {
    id: 3,
    title: 'Simply Weather',
    github: <a href="https://github.com/tatia-burdett/simply-weather">Github App Repo</a>,
    githubAPI: 'N/A',
    liveLink: <a href="https://tatia-burdett.github.io/simply-weather/">Live Link</a>,
    img1: <img src={swCurrent} alt='' className='proj-image grow'/>,
    img2: <img src={swForecast} alt='' className='proj-image grow'/>,
    description: 'The IP address is retrieved from the user to find their current location. Then the weather API uses the zipcode to gather data on the current weather in that location. Users can search for weather in a different city by zipcode or city name. Finally, a 5 day forecast is offered showing a brief snapshot (temperature and conditions) of these days.'
  }
]

export default data