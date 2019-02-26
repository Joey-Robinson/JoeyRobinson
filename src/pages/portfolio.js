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
        Sweetest Southern Creations
      </Link>
      <Link to="/portfolio/pixabay-image-search">
        Pixabay Image Search
      </Link>
    </section>
  </Layout>
)

export default Portfolio
