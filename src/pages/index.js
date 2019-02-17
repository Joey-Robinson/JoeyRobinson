import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Gallery from "../components/gallery";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <section className="home">
      <section className="home__one">
        <h1>from home one</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni assumenda eveniet harum distinctio id quia mollitia necessitatibus numquam consectetur rerum! Quasi accusantium quae officiis minima similique nemo dolore eaque? Quaerat ipsa atque deleniti doloribus error qui aperiam deserunt porro voluptates odit a, fuga aut quibusdam magni illo repellat dolor ipsum.</p>
      </section>
    </section>
    <section className="home__about">
      <h1>from About</h1>
    </section>
    <section className="home__work">
      <h1>from work</h1>
      <Gallery />
    </section>
  </Layout>
)

export default IndexPage
