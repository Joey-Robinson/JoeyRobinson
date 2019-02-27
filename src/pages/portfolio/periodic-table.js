import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import WorkItem from '../../components/workItem'
import periodictable from '../../images/periodictable.png'
import periodictable_tn from '../../images/periodictable_tn.jpg'

const PeriodicTable = () => (
  <Layout>
    <SEO title="Periodic Table" keywords={[`gatsby`, `application`, `react`]} />
    .
    <WorkItem
      imagesm={periodictable_tn}
      imagelg={periodictable}
      title="Vanilla JavaScript Periodic Table"
      date="2019"
      tech="JavaScript, CSS, CSS Grid"
      goal="To create a periodic table from an external data source and use that data for each part of the individual element."
      livelink="https://vanillajs-periodic-table.netlify.com/"
      ghlink="https://github.com/Joey-Robinson/vJS-Periodic-Table"
    />
  </Layout>
)

export default PeriodicTable
