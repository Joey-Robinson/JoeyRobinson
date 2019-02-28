import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ssc from '../images/ssc.png'
import caloriecounter from '../images/caloriecounter.png'
import myhoard from '../images/myhoard.png'
import periodictable from '../images/periodictable.png'
import pixabaysearch from '../images/pixabaysearch.png'
import lyricsearch from '../images/lyricsearch.png'
import reacttodo from '../images/react-todo.png'
import shellgame from '../images/shellgame.png'
import studioghibli from '../images/studioghibli.png'
import tfsoundboard from '../images/tfsoundboard.png'
import numberguesser from '../images/numberguesser.png'
import chuckjokes from '../images/chuckjokes.png'
import jstodo from '../images/jstodo.png'
import mysidia from '../images/mysidia.png'

const Portfolio = () => (
  <Layout>
    <SEO title="Portfolio" keywords={[`gatsby`, `application`, `react`]} />
    <section className="portfolio">
      <div className="portfolio__ssc">
        <a target="_blank" rel="noopener noreferrer" aria-label="Full Size Image Link For Portfolio Section" href={ssc}>
          <img src={ssc} alt="Sweetest Southern Creations Portfolio" />
        </a>
        <Link to="/portfolio/sweetest-southern-creations">
          <button>
            Sweetest Southern Creations
          </button>
        </Link>
      </div>
      <div className="portfolio__calories">
        <a target="_blank" rel="noopener noreferrer" aria-label="Full Size Image Link For Portfolio Section" href={caloriecounter}>
          <img src={caloriecounter} alt="Vanilla JavaScript Calorie Counter Portfolio" />
        </a>
        <Link to="/portfolio/calorie-counter">
          <button>
            vJS Calorie Counter
          </button>
        </Link>
      </div>
      <div className="portfolio__hoard">
        <a target="_blank" rel="noopener noreferrer" aria-label="Full Size Image Link For Portfolio Section" href={myhoard}>
          <img src={myhoard} alt="Accursed Hoard Portfolio" />
        </a>
        <Link to="/portfolio/find-your-hoard">
          <button>
            Accursed Hoard Tracker
          </button>
        </Link>
      </div>
      <div className="portfolio__table">
        <a target="_blank" rel="noopener noreferrer" aria-label="Full Size Image Link For Portfolio Section" href={periodictable}>
          <img src={periodictable} alt="Vanilla JavaScript Periodic Table Portfolio" />
        </a>
        <Link to="/portfolio/periodic-table">
          <button>
            vJS Periodic Table
          </button>
        </Link>
      </div>
      <div className="portfolio__pixabay">
        <a target="_blank" rel="noopener noreferrer" aria-label="Full Size Image Link For Portfolio Section" href={pixabaysearch}>
          <img src={pixabaysearch} alt="Pixabay Search Portfolio" />
        </a>
        <Link to="/portfolio/pixabay-image-search">
          <button>
            Pixabay Image Search
          </button>
        </Link>
      </div>
      <div className="portfolio__lyrics">
        <a target="_blank" rel="noopener noreferrer" aria-label="Full Size Image Link For Portfolio Section" href={lyricsearch}>
          <img src={lyricsearch} alt="React Lyric Search Portfolio" />
        </a>
        <Link to="/portfolio/react-lyric-search">
          <button>
            React Lyric Search
          </button>
        </Link>
      </div>
      <div className="portfolio__todo">
        <a target="_blank" rel="noopener noreferrer" aria-label="Full Size Image Link For Portfolio Section" href={reacttodo}>
          <img src={reacttodo} alt="React Simple Todo List Portfolio" />
        </a>
        <Link to="/portfolio/react-todo-list">
          <button>
            React Simple Todo
          </button>
        </Link>
      </div>
      <div className="portfolio__shellgame">
        <a target="_blank" rel="noopener noreferrer" aria-label="Full Size Image Link For Portfolio Section" href={shellgame}>
          <img src={shellgame} alt="Shell Game Portfolio" />
        </a>
        <Link to="/portfolio/shell-game">
          <button>
            Shell Game
          </button>
        </Link>
      </div>
      <div className="portfolio__ghibli">
        <a target="_blank" rel="noopener noreferrer" aria-label="Full Size Image Link For Portfolio Section" href={studioghibli}>
          <img src={studioghibli} alt="Studio Ghibli Portfolio" />
        </a>
        <Link to="/portfolio/studio-ghibli">
          <button>
            Studio Ghibli Movies
          </button>
        </Link>
      </div>
      <div className="portfolio__soundboard">
        <a target="_blank" rel="noopener noreferrer" aria-label="Full Size Image Link For Portfolio Section" href={tfsoundboard}>
          <img src={tfsoundboard} alt="TF Soundboard Portfolio" />
        </a>
        <Link to="/portfolio/tf-soundboard">
          <button>
            TF Soundboard
          </button>
        </Link>
      </div>
      <div className="portfolio__numbers">
        <a target="_blank" rel="noopener noreferrer" aria-label="Full Size Image Link For Portfolio Section" href={numberguesser}>
          <img src={numberguesser} alt="Number Guesser Portfolio" />
        </a>
        <Link to="/portfolio/number-guesser">
          <button>
            Number Guesser
          </button>
        </Link>
      </div>
      <div className="portfolio__chuck">
        <a target="_blank" rel="noopener noreferrer" aria-label="Full Size Image Link For Portfolio Section" href={chuckjokes}>
          <img src={chuckjokes} alt="Chuck Norris Joke Generator Portfolio" />
        </a>
        <Link to="/portfolio/chuck">
          <button>
            Chuck Norris Joke Generator
          </button>
        </Link>
      </div>
      <div className="portfolio__jstodo">
        <a target="_blank" rel="noopener noreferrer" aria-label="Full Size Image Link For Portfolio Section" href={jstodo}>
          <img src={jstodo} alt="Vanilla JavaScript Todo List Portfolio" />
        </a>
        <Link to="/portfolio/js-todo-list">
          <button>
            vJS Todo List
          </button>
        </Link>
      </div>
      <div className="portfolio__mysidia">
        <a target="_blank" rel="noopener noreferrer" aria-label="Full Size Image Link For Portfolio Section" href={mysidia}>
          <img src={mysidia} alt="Mysidia Website Portfolio" />
        </a>
        <Link to="/portfolio/mysidia">
          <button>
            Mysidia Website
          </button>
        </Link>
      </div>
    </section>
  </Layout>
)

export default Portfolio
