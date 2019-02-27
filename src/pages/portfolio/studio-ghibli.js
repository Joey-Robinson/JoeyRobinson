import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import WorkItem from '../../components/workItem'
import studioghibli from '../../images/studioghibli.png'
import studioghibli_tn from '../../images/studioghibli_tn.jpg'

const StudioGhibli = () => (
  <Layout>
    <SEO title="Studio Ghibli Movies" keywords={[`gatsby`, `application`, `react`]} />
    .
    <WorkItem
      imagesm={studioghibli_tn}
      imagelg={studioghibli}
      title="Studio Ghibli Movies"
      date="2019"
      tech="React, CSS"
      goal="I wanted to make a small app that pulls data from a Studio Ghibli API to display all their movies."
      livelink="https://react-studio-ghibli-api.netlify.com/"
      ghlink="https://github.com/Joey-Robinson/react-studio-ghibli-api"
    />
  </Layout>
)

export default StudioGhibli
