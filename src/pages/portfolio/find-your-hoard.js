import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import WorkItem from '../../components/workItem'
import myhoard from '../../images/myhoard.png'

const Hoard = () => (
  <Layout>
    <SEO title="Find Your Accursed Hoard" keywords={[`gatsby`, `application`, `react`]} />
    .
    <WorkItem
      imagesm={myhoard}
      imagelg={myhoard}
      title="Find Your Accursed Hoard"
      date="2018"
      tech="JavaScript, HTML, SCSS, CSS Grid, npm scrips"
      goal="To have a centralized repository for all accursed hoard locations in Final Fantasy 14 for Heaven On High."
      livelink="https://joey-robinson.github.io/muhhoard/"
      ghlink="https://github.com/Joey-Robinson/muhhoard"
    />
  </Layout>
)

export default Hoard
