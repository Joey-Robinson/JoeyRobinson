import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <section className="about">
      <section className="about__one">
        <h1>from home one</h1>
      </section>
    </section>
  </Layout>
)

export default AboutPage
