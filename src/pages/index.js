import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `portfolio`, `react`]} />
      <div className="home">
        <div className="home-top">
          <h1>it's me, joey</h1>
        </div>
        <div className="home-left">
          <p>
            i try to make cool things with front-end technologies. i like using react to develop projects. i have many interests in life. my primary interest is writing code. i find it not only relaxing but incredibly enjoyable as well.
          </p>
          <p>
            i'm constantly trying to improve on myself as well as my coding capabilities
          </p>
        </div>
        <div className="home-last">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat soluta, ea accusamus ex illo alias!</p>
        </div>
      </div>
  </Layout>
)

export default IndexPage
