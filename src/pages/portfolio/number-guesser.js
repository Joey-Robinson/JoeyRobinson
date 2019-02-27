import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import WorkItem from '../../components/workItem'
import numberguesser_tn from '../../images/numberguesser_tn.jpg'
import numberguesser from '../../images/numberguesser.png'

const NumberGuesser = () => (
  <Layout>
    <SEO title="Number Guesser" keywords={[`gatsby`, `application`, `react`]} />
    .
    <WorkItem
      imagesm={numberguesser_tn}
      imagelg={numberguesser}
      title="Number Guesser"
      date="2018"
      tech="JavaScript, HTML, Bootstrap Theme"
      goal="To make a number guessing game using JavaScript"
      livelink="https://joey-robinson.github.io/numberguess/"
      ghlink="https://github.com/Joey-Robinson/numberguess"
    />
  </Layout>
)

export default NumberGuesser
