import React, { Component } from 'react'
import shellgame from '../images/shellgame.png'
import caloriecounter from '../images/caloriecounter.png'
import reacttodo from '../images/react-todo.png'
import mysidia from '../images/mysidia.png'
import ssc from '../images/ssc.png'
import tfsoundboard from '../images/tfsoundboard.png'
import periodictable from '../images/vJS-PeriodicTable.png'
import myhoard from '../images/myhoard.png'
import vanitysite from '../images/vanitysite.png'

const galleryData = [{
    title: 'vJS Calorie Counter',
    image: `${caloriecounter}`,
    ghRepo: 'https://github.com/Joey-Robinson/CalorieCounter',
    liveLink: 'https://vjs-calorie-counter.netlify.com/'
  },
  {
    title: 'react todo no hooks',
    image: `${reacttodo}`,
    ghRepo: 'https://github.com/Joey-Robinson/react-todo-list-no-hooks',
    liveLink: 'https://react-todo-no-hooks.netlify.com/'
  },
  {
    title: 'Sweetest Southern Creations',
    image: `${ssc}`,
    ghRepo: 'https://github.com/Joey-Robinson/SweetestSouthernCreations/',
    liveLink: 'sweetestsoutherncreations.com'
  },
  {
    title: '<TF> Soundboard',
    image: `${tfsoundboard}`,
    ghRepo: 'https://github.com/Joey-Robinson/tf-soundboard',
    liveLink: 'https://tf-soundboard.netlify.com/'
  },
  {
    title: 'vJS Periodic Table',
    image: `${periodictable}`,
    ghRepo: 'https://github.com/Joey-Robinson/vJS-Periodic-Table',
    liveLink: 'https://vanillajs-periodic-table.netlify.com/'
  },
  {
    title: 'Mysidia Free Company Website',
    image: `${mysidia}`,
    ghRepo: 'https://github.com/Joey-Robinson/MysidiaSite',
    liveLink: 'https://mysidiafc.netlify.com/#/'
  },
  {
    title: 'Gamer Vanity Site',
    image: `${vanitysite}`,
    ghRepo: 'https://github.com/Joey-Robinson/secondTribute',
    liveLink: 'https://meowkats.netlify.com/'
  },
  {
    title: 'Shell Game',
    image: `${shellgame}`,
    ghRepo: 'https://github.com/Joey-Robinson/shellgame',
    liveLink: 'https://joey-robinson.github.io/shellgame/'
  },
  {
    title: 'Hoard Location Tracker',
    image: `${myhoard}`,
    ghRepo: 'https://github.com/Joey-Robinson/muhhoard',
    liveLink: 'https://joey-robinson.github.io/muhhoard/'
  }
]
class Gallery extends Component {
  render() {
    return (
      <ul className="gallery">
        {galleryData.map((info) => {
          return <li>
                  <p>
                    Visit&nbsp;
                    <a
                      target="_blank"
                      rel="noopener noreferrer" 
                      href={info.liveLink}
                    >
                      {info.title}
                    </a>
                    <br />
                    <a
                      target="_blank"
                      rel="noopener noreferrer" 
                      href={info.ghRepo}
                    >
                      GitHub Repo
                    </a>
                  </p>
                  <a
                    target="_blank"
                    rel="noopener noreferrer" 
                    href={info.image}
                  >
                    <img src={info.image}/>
                  </a>
                </li>
        })}
      </ul>
    )
  }
}

export default Gallery