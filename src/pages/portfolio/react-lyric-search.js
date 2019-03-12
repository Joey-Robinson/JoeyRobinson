import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import WorkItem from '../../components/workItem'
import lyricsearch from '../../images/lyricsearch.png'
import lyricsearch_tn from '../../images/lyricsearch_tn.jpg'

const LyricSearch = () => (
  <Layout>
    <SEO title="SSC" keywords={[`gatsby`, `application`, `react`]} />
    .
  <WorkItem
      imagesm={lyricsearch_tn}
      imagelg={lyricsearch}
      title="Lyric Search"
      date="2019"
      tech="React, MusixMatch API, axios, momentjs, react-router"
      goal="To make the MusixMatch API to search for popular song lyrics"
      livelink="https://react-lyric-searches.netlify.com/"
      ghlink="https://github.com/Joey-Robinson/react-lyric-search" /
    >
  </Layout>
)

export default LyricSearch