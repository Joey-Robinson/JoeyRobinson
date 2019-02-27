import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import WorkItem from '../../components/workItem'
import mysidia_tn from '../../images/mysidia_tn.jpg'
import mysidia from '../../images/mysidia.png'

const Mysidia = () => (
  <Layout>
    <SEO title="Mysidia Free Company" keywords={[`gatsby`, `application`, `react`]} />
    .
    <WorkItem
      imagesm={mysidia_tn}
      imagelg={mysidia}
      title="Mysidia"
      date="2018"
      tech="react, react-router, babel, webpack, SASS/SCSS, normalize css, react-burger-menu, react-image-gallery, custom built react boilerplate"
      goal="To create a website for the Final Fantasy 14 Free Company <Mysidia> using a custom built react boilerplate to include SCSS"
      livelink="https://mysidiafc.netlify.com/#/"
      ghlink="https://github.com/Joey-Robinson/MysidiaSite"
    />
  </Layout>
)

export default Mysidia
