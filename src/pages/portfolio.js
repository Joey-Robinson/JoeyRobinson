import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ssc_tn from '../images/ssc_tn.jpg'
import caloriecounter_tn from '../images/caloriecounter_tn.jpg'
import myhoard_tn from '../images/myhoard_tn.jpg'
import periodictable_tn from '../images/periodictable_tn.jpg'
import pixabaysearch_tn from '../images/pixabaysearch_tn.jpg'
import lyricsearch_tn from '../images/lyricsearch_tn.jpg'
import reacttodo_tn from '../images/react-todo_tn.jpg'
import shellgame_tn from '../images/shellgame_tn.jpg'
import studioghibli_tn from '../images/studioghibli_tn.jpg'
import tfsoundboard_tn from '../images/tfsoundboard_tn.jpg'

const Portfolio = () => (
  <Layout>
    <SEO title="Portfolio" keywords={[`gatsby`, `application`, `react`]} />
    <section className="portfolio">
      <div className="portfolio__ssc">
        <img src={ssc_tn} alt="Sweetest Southern Creations Portfolio Image" />
        <Link to="/portfolio/sweetest-southern-creations">
          <button>
            Sweetest Southern Creations
          </button>
        </Link>
      </div>
      <div className="portfolio__calories">
        <img src={caloriecounter_tn} alt="Vanilla JavaScript Calorie Counter Portfolio Image" />
        <Link to="/portfolio/calorie-counter">
          <button>
            vJS Calorie Counter
          </button>
        </Link>
      </div>
      <div className="portfolio__hoard">
        <img src={myhoard_tn} alt="Accursed Hoard Portfolio Image" />
        <Link to="/portfolio/find-your-hoard">
          <button>
            Accursed Hoard Tracker
          </button>
        </Link>
      </div>
      <div className="portfolio__table">
        <img src={periodictable_tn} alt="Vanilla JavaScript Periodic Table Portfolio Image" />
        <Link to="/portfolio/periodic-table">
          <button>
            vJS Periodic Table
          </button>
        </Link>
      </div>
      <div className="portfolio__pixabay">
        <img src={pixabaysearch_tn} alt="Pixabay Image Search Portfolio Image" />
        <Link to="/portfolio/pixabay-image-search">
          <button>
            Pixabay Image Search
          </button>
        </Link>
      </div>
      <div className="portfolio__lyrics">
        <img src={lyricsearch_tn} alt="React Lyric Search Portfolio Image" />
        <Link to="/portfolio/react-lyric-search">
          <button>
            React Lyric Search
          </button>
        </Link>
      </div>
      <div className="portfolio__todo">
        <img src={reacttodo_tn} alt="React Simple Todo List Portfolio Image" />
        <Link to="/portfolio/react-todo-list">
          <button>
            React Simple Todo
          </button>
        </Link>
      </div>
      <div className="portfolio__shellgame">
        <img src={shellgame_tn} alt="Shell Game Portfolio Image" />
        <Link to="/portfolio/shell-game">
          <button>
            Shell Game
          </button>
        </Link>
      </div>
      <div className="portfolio__ghibli">
        <img src={studioghibli_tn} alt="Studio Ghibli Portfolio Image" />
        <Link to="/portfolio/studio-ghibli">
          <button>
            Studio Ghibli Movies
          </button>
        </Link>
      </div>
      <div className="portfolio__soundboard">
        <img src={tfsoundboard_tn} alt="TF Soundboard Portfolio Image" />
        <Link to="/portfolio/tf-soundboard">
          <button>
            TF Soundboard
          </button>
        </Link>
      </div>
    </section>
  </Layout>
)

export default Portfolio
