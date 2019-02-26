import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import WorkItem from '../../components/workItem'
import pixabaysearch from '../../images/pixabaysearch.png'

const Ssc = () => (
  <Layout>
    <SEO title="SSC" keywords={[`gatsby`, `application`, `react`]} />
    .
    <WorkItem
      imagesm={pixabaysearch}
      imagelg={pixabaysearch}
      title="Pixabay Image Search"
      date="2019"
      tech="React, material-ui, axios, Pixabay API"
      goal="To use the Pixabay API in a React application to retrieve images from a search"
      livelink="http://sweetestsoutherncreations.com/"
      ghlink="http://sweetestsoutherncreations.com/"
    />
  </Layout>
)

export default Ssc
