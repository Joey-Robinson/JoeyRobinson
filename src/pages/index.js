import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Gallery from "../components/gallery";
import akirabg from '../images/akirabg.gif'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <section className="home">
      <section className="home__one">
        <h1>Welcome to my personal website.</h1>
        <p>
          Hello! I'm Joey Robinson, you've happened across my personal website. Thanks for visiting and take a look around. I'm sure this will go through several more itertations until I have something I feel incredibly comfortable with.
          I'm just someone trying to make awesome and amazing things. This is a place to showcase some of those things.
        </p>
        <p>You can find me all over the internet
          <ul>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer" 
                href="https://github.com/Joey-Robinson">
                GitHub
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer" 
                href="https://www.linkedin.com/in/joey-robinson/">
              LinkedIn
              </a>
            </li>
            <li>
              <a 
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/joeyrobinsondev">
                @joeyrobinsondev
              </a>
            </li>
          </ul>
          <div className="home__gif">
            <img src={akirabg} alt="Akira Motorcycle Gif"/>
          </div>
        </p>
      </section>
    </section>
    <section className="home__about">
      <h1>A bit about me</h1>
      <p>
        I'm a self-taught developer. I like to write code. My primary focus right now is on the front-end aspect of development, but I want to eventually know all things that encompass the development world. Both front and backend.
        Beyond that, I also want to learn as many programming and coding things as I can. I want to build amazing websites, tools, and apps with what I've learned.
      </p>
    </section>
    <section className="home__work">
      <h1>Some of my work</h1>
      <Gallery />
    </section>
  </Layout>
)

export default IndexPage
