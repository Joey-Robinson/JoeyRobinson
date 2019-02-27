import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import WorkItem from '../../components/workItem'
import tfsoundboard from '../../images/tfsoundboard.png'
import tfsoundboard_tn from '../../images/tfsoundboard_tn.jpg'

const TfSoundboard = () => (
  <Layout>
    <SEO title="<TF> Soundboard Hyjal" keywords={[`gatsby`, `application`, `react`]} />
    .
    <WorkItem
      imagesm={tfsoundboard_tn}
      imagelg={tfsoundboard}
      title="<TF> Soundboard"
      date="2019"
      tech="JavaScript, CSS, CSS Grid, HTML"
      goal="To create a soundboard fro the World Of Warcraft guild <TF> on Hyjal"
      livelink="https://tf-soundboard.netlify.com/"
      ghlink="https://github.com/Joey-Robinson/tf-soundboard"
    />
  </Layout>
)

export default TfSoundboard
