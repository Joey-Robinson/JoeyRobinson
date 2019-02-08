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
        Accursed Hoard Location<br />
        <a style={{display: `inline`}} href="https://github.com/Joey-Robinson/muhhoard">GitHub Repoistory</a>
      </div>
      <div className="work-shellgame">
        <a href="https://joey-robinson.github.io/shellgame/">
          <img src={shellgame} alt=""/><br />
        </a>
        Shell Game<br />
        <a style={{display: `inline`}} href="https://github.com/Joey-Robinson/shellgame">GitHub Repoistory</a>
      </div>
      <div className="work-periodictable">
        <a href="https://vanillajs-periodic-table.netlify.com/">
          <img src={periodictable} alt=""/>
        </a><br />
        vJS Periodic Table<br />
        <a style={{display: `inline`}} href="https://github.com/Joey-Robinson/vJS-Periodic-Table">GitHub Repoistory</a>
      </div>
      <div className="work-ssc">
        <a href="http://sweetestsoutherncreations.com/">
          <img src={ssc} alt=""/>
        </a><br />
        Sweetest Southern Creations<br />
        <a style={{display: `inline`}} href="https://github.com/Joey-Robinson/SweetestSouthernCreations">GitHub Repoistory</a>
      </div>
      <div className="work-tfsoundboard">
        <a href="https://tf-soundboard.netlify.com/">
          <img src={tfsoundboard} alt=""/>
        </a><br />
        TF Soundboard<br />
        <a style={{display: `inline`}} href="https://github.com/Joey-Robinson/tf-soundboard">GitHub Repoistory</a>       
      </div>
      <div className="work-reacttodo">
        <a href="https://react-todo-no-hooks.netlify.com/">
          <img src={reacttodo} alt=""/>
        </a><br />
        react-todo-no-hooks<br />
        <a style={{display: `inline`}} href="https://github.com/Joey-Robinson/react-todo-list-no-hooks">GitHub Repoistory</a>
      </div>
      <div className="work-meowkats">
        <a href="https://meowkats.netlify.com/">
          <img src={meowkats} alt=""/>
        </a><br />
        Vanity Site<br />
        <a style={{display: `inline`}} href="https://github.com/Joey-Robinson/secondTribute">GitHub Repoistory</a>
      </div>
      <div className="work-caloriecounter">
        <a href="https://vjs-calorie-counter.netlify.com/">
          <img src={caloriecounter} alt=""/>
        </a><br />
        Calorie Counter<br />
        <a style={{display: `inline`}} href="https://github.com/Joey-Robinson/CalorieCounter">GitHub Repoistory</a>
      </div>
    </div>
  </Layout>
)

export default WorkPage
