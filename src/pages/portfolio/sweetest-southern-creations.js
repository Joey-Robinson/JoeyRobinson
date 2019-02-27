import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import WorkItem from '../../components/workItem'
import ssc from '../../images/ssc.png'
import ssc_tn from '../../images/ssc_tn.jpg'

const Ssc = () => (
  <Layout>
    <SEO title="SSC" keywords={[`gatsby`, `application`, `react`]} />
    .
    <WorkItem
      imagesm={ssc_tn}
      imagelg={ssc}
      title="Sweetest Southern Creations"
      date="2018"
      tech="JavaScript, HTML, SCSS, CSS Grid, npm scripts"
      goal="To make a website for a business owner to showcase her homemade goods and clothing"
      livelink="http://sweetestsoutherncreations.com/"
      ghlink="http://sweetestsoutherncreations.com/"
    />
  </Layout>
)

export default Ssc
