import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <section className="about__page">
      <section className="about__page-one">
        <h1>About Me</h1>
        <p>Hello! I'm excited that you're here. I want to first preface this by saying that I'm not a designer. I'm still figuring things out on that front. I'm a self-taught developer whose primary focus is currently on front-end web development. I do eventually want to know all things development. Including the back-end side of things, and anything in the middle</p>
      </section>
    </section>
  </Layout>
)

export default AboutPage
