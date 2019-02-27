import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import WorkItem from '../../components/workItem'
import jstodo_tn from '../../images/jstodo_tn.jpg'
import jsdoto from '../../images/jstodo.png'

const JsTodo = () => (
  <Layout>
    <SEO title="Vanilla JavaScript Todo List" keywords={[`gatsby`, `application`, `react`]} />
    .
    <WorkItem
      imagesm={jstodo_tn}
      imagelg={jsdoto}
      title="Vanilla JavaScript Todo List"
      date="2017"
      tech="JavaScript, HTML, Font-Awesome, Materialize CSS"
      goal="To make a Todo List with Vanilla JavaScript"
      livelink="https://joey-robinson.github.io/todo/"
      ghlink="https://github.com/Joey-Robinson/todo"
    />
  </Layout>
)

export default JsTodo
