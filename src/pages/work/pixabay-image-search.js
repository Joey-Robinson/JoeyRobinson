import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Two = () => (
  <Layout>
    <SEO title="Two" keywords={[`gatsby`, `application`, `react`]} />
    <h1>From Work/Two</h1>
    <Link to="/work/">Go To Work</Link>
  </Layout>
)

export default Two
