import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <section className="home">
      <section className="home__one">
        <h1>from home one</h1>
      </section>
    </section>
    <section className="home__about">
      <h1>from About</h1>
    </section>
    <section className="home__work">
      <h1>from work</h1>
    </section>
  </Layout>
)

export default IndexPage
