import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import WorkItem from '../../components/workItem'
import ssc from '../../images/ssc.png'

const Ssc = () => (
  <Layout>
    <SEO title="SSC" keywords={[`gatsby`, `application`, `react`]} />
    <h1>123</h1>
    <WorkItem
      image={ssc}
      title="Sweetest Southern Creations"
      date="2018"
      tech="JavaScript, HTML, SCSS, npm scripts"
      goal="To make a website for a business owner to showcase her homemade goods and clothing"
      link="http://sweetestsoutherncreations.com/"
    />
  </Layout>
)

export default Ssc
