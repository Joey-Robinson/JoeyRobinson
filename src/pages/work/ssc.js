import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Ssc = () => (
  <Layout>
    <SEO title="SSC" keywords={[`gatsby`, `application`, `react`]} />
    <h1>From Work/One</h1>
    <Link to="/work/pixabay-image-search/">Go Home</Link>
  </Layout>
)

export default Ssc
