import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `portfolio`, `react`]} />
      <div className="home">
        <div className="home-top">
          <h1>it's me</h1>
        </div>
      </div>
  </Layout>
)

export default IndexPage
