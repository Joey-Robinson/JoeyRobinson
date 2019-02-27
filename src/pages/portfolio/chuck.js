import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import WorkItem from '../../components/workItem'
import chuckjokes_tn from '../../images/chuckjokes_tn.jpg'
import chuckjokes from '../../images/chuckjokes.png'

const Chuck = () => (
  <Layout>
    <SEO title="Chuck Norris Joke Generator" keywords={[`gatsby`, `application`, `react`]} />
    .
    <WorkItem
      imagesm={chuckjokes_tn}
      imagelg={chuckjokes}
      title="Chuck Norris Joke Generator"
      date="2018"
      tech="Vanilla JavaScript, HTML, Bootstrap Theme"
      goal="To pull data from the Chuck Norris Database and display jokes upon request using an API Call"
      livelink="https://joey-robinson.github.io/ChuckNorrisJokes/"
      ghlink="https://github.com/Joey-Robinson/ChuckNorrisJokes"
    />
  </Layout>
)

export default Chuck
