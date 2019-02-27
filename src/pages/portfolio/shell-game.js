import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import WorkItem from '../../components/workItem'
import shellgame from '../../images/shellgame.png'
import shellgame_tn from '../../images/shellgame_tn.jpg'

const ShellGame = () => (
  <Layout>
    <SEO title="Shell Game" keywords={[`gatsby`, `application`, `react`]} />
    .
    <WorkItem
      imagesm={shellgame_tn}
      imagelg={shellgame}
      title="Shell Game"
      date="2018"
      tech="JavaScript, CSS, CSS Grid."
      goal="To make a memory game based off of the World Of Warcraft daily quest of the same name."
      livelink="https://joey-robinson.github.io/shellgame/"
      ghlink="https://github.com/Joey-Robinson/shellgame"
    />
  </Layout>
)

export default ShellGame
