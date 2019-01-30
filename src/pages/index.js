import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="home">
      <div class="home-sky">
        <div class="home-sky__stars" />
      </div>
      <svg
        className="home-svg"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          gridColumn: `1`,
          gridRow: `1`,
          paddingTop: `2rem`,
          paddingLeft: `2rem`,
          width: `40rem`,
          height: `40rem`,
        }}
      >
        <circle cx="10" cy="10" r="10" className="home-circle__one" />
        <circle cx="7" cy="10" r=".5" className="circle" />
        <circle cx="15" cy="8" r=".6" className="circle" />
        <circle cx="3" cy="5" r=".7" className="circle" />
        <circle cx="12" cy="3.5" r="1.5" className="circle" />
        <circle cx="12" cy="3.5" r=".75" fill="#a59f9f" />
        <circle cx="12" cy="12" r="2" className="circle" />
        <circle cx="12" cy="12" r="1.3" fill="#a59f9f" />
        <circle cx="5" cy="13" r="1" className="circle" />
        <circle cx="7" cy="7" r="1.2" className="circle" />
      </svg>
    </div>
    <div />
  </Layout>
)

export default IndexPage
