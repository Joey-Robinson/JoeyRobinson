import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <section className="home">
      <h1>From Home</h1>
    </section>
    <section className="about">
      <h1>from About</h1>
    </section>
    <section className="work">
      <h1>from work</h1>
    </section>
    <section className="blog">
      <h1>from blog</h1>
    </section>
    <section className="contact">
      <h1>from contact</h1>
    </section>
  </Layout>
)

export default IndexPage
