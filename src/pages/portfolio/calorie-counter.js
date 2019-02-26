import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import WorkItem from '../../components/workItem'
import caloriecounter from '../../images/caloriecounter.png'

const Caloriecounter = () => (
  <Layout>
    <SEO title="Calorie Counter" keywords={[`gatsby`, `application`, `react`]} />
    .
    <WorkItem
      imagesm={caloriecounter}
      imagelg={caloriecounter}
      title="Calorie Counter"
      date="2018"
      tech="JavaScript, HTML, Materialize CSS, Bootstrap"
      goal="To make a calorie counting app with local storage to track calories for a given food item"
      livelink="https://vjs-calorie-counter.netlify.com/"
      ghlink="https://github.com/Joey-Robinson/CalorieCounter"
    />
  </Layout>
)

export default Caloriecounter