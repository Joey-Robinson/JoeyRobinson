import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Portfolio = () => (
  <Layout>
    <SEO title="Portfolio" keywords={[`gatsby`, `application`, `react`]} />
    <section className="portfolio">
      <h1>From Work</h1>
      <Link to="/portfolio/sweetest-southern-creations">
        SSC
      </Link>
    </section>
  </Layout>
)

export default Portfolio
