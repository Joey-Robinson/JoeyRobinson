import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import heavenonhigh from '../images/heavenonhigh.png'
import shellgame from '../images/shellgame.png'
import periodictable from '../images/periodictable.png'
import ssc from '../images/ssc.png'
import tfsoundboard from '../images/tfsoundboard.png'
import reacttodo from '../images/reacttodonohooks.png'
import meowkats from '../images/meowkats.png'
import caloriecounter from '../images/calories.png'

const WorkPage = () => (
  <Layout>
    <SEO title="Work" keywords={[`gatsby`, `portfolio`, `react`]} />
    <div className="work">
      <div className="work-top">
        <h1>stuff i've made</h1>
      </div>
      <div className="work-hoh">
        <a href="https://joey-robinson.github.io/muhhoard/">
          <img src={heavenonhigh} alt=""/><br />
        </a>
        <a href="https://joey-robinson.github.io/muhhoard/">Accursed Hoard Location</a><br />
        <a style={{display: `inline`}} href="https://github.com/Joey-Robinson/muhhoard">GitHub Repository</a>
      </div>
      <div className="work-shellgame">
        <a href="https://joey-robinson.github.io/shellgame/">
          <img src={shellgame} alt=""/><br />
        </a>
        <a href="https://joey-robinson.github.io/shellgame/">Shell Game</a><br />
        <a style={{display: `inline`}} href="https://github.com/Joey-Robinson/shellgame">GitHub Repository</a>
      </div>
      <div className="work-periodictable">
        <a href="https://vanillajs-periodic-table.netlify.com/">
          <img src={periodictable} alt=""/>
        </a><br />
        <a href="https://vanillajs-periodic-table.netlify.com/">vJS Periodic Table</a><br />
        <a style={{display: `inline`}} href="https://github.com/Joey-Robinson/vJS-Periodic-Table">GitHub Repository</a>
      </div>
      <div className="work-ssc">
        <a href="http://sweetestsoutherncreations.com/">
          <img src={ssc} alt=""/>
        </a><br />
        <a href="http://sweetestsoutherncreations.com/">Sweetest Southern Creations</a><br />
        <a style={{display: `inline`}} href="https://github.com/Joey-Robinson/SweetestSouthernCreations">GitHub Repository</a>
      </div>
      <div className="work-tfsoundboard">
        <a href="https://tf-soundboard.netlify.com/">
          <img src={tfsoundboard} alt=""/>
        </a><br />
        <a href="https://tf-soundboard.netlify.com/">TF Soundboard</a><br />
        <a style={{display: `inline`}} href="https://github.com/Joey-Robinson/tf-soundboard">GitHub Repository</a>       
      </div>
      <div className="work-reacttodo">
        <a href="https://react-todo-no-hooks.netlify.com/">
          <img src={reacttodo} alt=""/>
        </a><br />
        <a href="https://react-todo-no-hooks.netlify.com/">react-todo-no-hooks</a><br />
        <a style={{display: `inline`}} href="https://github.com/Joey-Robinson/react-todo-list-no-hooks">GitHub Repository</a>
      </div>
      <div className="work-meowkats">
        <a href="https://meowkats.netlify.com/">
          <img src={meowkats} alt=""/>
        </a><br />
        <a href="https://meowkats.netlify.com/">Vanity Site</a><br />
        <a style={{display: `inline`}} href="https://github.com/Joey-Robinson/secondTribute">GitHub Repository</a>
      </div>
      <div className="work-caloriecounter">
        <a href="https://vjs-calorie-counter.netlify.com/">
          <img src={caloriecounter} alt=""/>
        </a><br />
        <a href="https://vjs-calorie-counter.netlify.com/">Calorie Counter</a><br />
        <a style={{display: `inline`}} href="https://github.com/Joey-Robinson/CalorieCounter">GitHub Repository</a>
      </div>
    </div>
  </Layout>
)

export default WorkPage
