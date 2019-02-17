import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const WorkPage = () => (
  <Layout>
    <SEO title="Work" keywords={[`gatsby`, `application`, `react`]} />
    <section className="work">
      <section className="work__one">
        <h1>from work one</h1>
      </section>
    </section>
  </Layout>
)

export default WorkPage
