import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Work = () => (
  <Layout>
    <SEO title="Work" keywords={[`gatsby`, `application`, `react`]} />
    <h1>From Work</h1>
    <Link to="/work/react-todo-list/">Go To React todo list</Link><br />
    <Link to="/work/pixabay-image-search/">Go TO Pixabay Image Search</Link>
  </Layout>
)

export default Work
