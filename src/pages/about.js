import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `portfolio`, `react`]} />
    <div className="about">
        <div className="about-heading"><h1>who i am</h1></div>
      <div className="about-top top">
        <p>i'm a self-taught developer. my current focus is the front-end side of things while using js/html/css to create, design, and develop websites and apps for myself and others. my journey started ~2 years ago when i was introduced to coding through a friend on freecodecamp. i instantly became hooked. i wanted to see what i did some to life, so i kept going.
        </p>
        <p className="hidden">i started doing every tutorial for html, css, and javascript i could find. countless hours spent going over tutorials and guides i found while searching youtube and google. at this point i was caught in tutorial purgatory. i had only stuck to tutorials and guides, which i later learned wasn't exactly ideal. 
        </p>
        <p className="hidden">at this point, i started to make things on my own. i started to branch out into the various tools the development world has to offer. ranging from webpack, babel, react, to scss and bootstrap. after i picked these new tools and technologies up, i began to practice and hone them to where they became an everyday part of my development life.
        </p>
      </div>
      <div className="about-bottom">
      <hr />
      <p>now i spend my time practicing my fundamentals while also developing more awesome stuff. i look forward to writing code everyday, and when i'm unable to write code, i feel like i missed out on an opportunity to do and make something awesome.
      </p>
      <p>one of my goals is to be a software engineer. i absolutely love writing code, learning about development, and implementing both into an application or website. seeing myself make applications and websites used by people around the world is an amazing idea to me.  
      </p>
      <p>thanks for stopping by, be sure to check out the other sections and don't be afraid to leave me a message if you feel inclined to. if you want to know more about what i was doing before my development days, you can ask that too. bye for now.
      </p>
      </div>
    </div>
  </Layout>
)

export default AboutPage
