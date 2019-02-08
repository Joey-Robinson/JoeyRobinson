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
        <div className="home-left">
          <p>
            i try to make cool things with front-end technologies. i like using react to develop projects. i have many interests in life. my primary interest is writing code. i find it not only relaxing but incredibly enjoyable as well.
          </p>
        </div>
      </div>
  </Layout>
)

export default IndexPage
