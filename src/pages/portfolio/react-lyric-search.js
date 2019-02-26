import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import WorkItem from '../../components/workItem'
import lyricsearch from '../../images/lyricsearch.png'

const LyricSearch = () => (
  <Layout>
    <SEO title="LyricSearch" keywords={[`gatsby`, `application`, `react`]} />
    .
    <WorkItem
      imagesm={lyricsearch}
      imagelg={lyricsearch}
      title="Lyric Search"
      date="2019"
      tech="React, MusixMatch API, axios, momentjs, react-router"
      goal="To make the MusixMatch API to search for popular song lyrics"
      livelink="https://vjs-calorie-counter.netlify.com/"
      ghlink="https://github.com/Joey-Robinson/react-lyric-search"
    />
  </Layout>
)

export default LyricSearch
