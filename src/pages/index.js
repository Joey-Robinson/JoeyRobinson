import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <section className="home">
      <section className="home__hero">
        <div className="home__hero-content">
          <h1>Hi, I'm Joey Robinson</h1>
          <h3 style={{ textAlign: `center`, fontSize: `3rem` }}>Front-End Web Developer</h3>
        </div>
        <div className="home__hero-resume">
          <a href="me" className="home__hero-button">
            Resume
        </a>
        </div>
        <div className="home__hero-contact">
          <a href="me" className="home__hero-button">
            Contact
        </a>
        </div>
      </section>
    </section>
    <section className="home__about">
      <section className="home__about-blurb">
        <h1>ABOUT</h1>
        <p>
          I am passionate about Web Development and building web applications and websites. I am self-taught and have been expanding my skills by continously learning development technologies and skills that I frequently put into use.
        </p>
        <p>
          I started learning web development a couple of years ago. I had been taking care of my mother prior to her passing and had no real direction in life. I was introduced to FreeCodeCamp, and was hook instantly. I enjoy making websites and seeing my ideas come to life. Using my portfolio of web apps and websites, I am eagerly looking forward to finding a job in this indurstry.
        </p>
        <p>
          While I'm still actively pursing a career in this industry, I am still developing websites and web apps. I'm highly motivated and I have a strong attention to detail. One of my golas is to build web applications with the best practices and latest technologies.
        </p>
        <p>
          Outside of development, I enjoy reading, watching movies, and playing a variety of games.
        </p>
      </section>
    </section>
    <section className="home__contact">
      <h1>From Contact</h1>
      <section className="home__contact-form contact__form">
        <form
          name="contact-form"
          method="post"
          data-netlify="true"
        >
          <input className="contact__form-name" name="name" placeholder="Your Name" type="text" /><br />
          <input className="contact__form-email" name="email" placeholder="Your Email" type="email" /><br />
          <input className="contact__form-email" name="email" placeholder="Your Email" type="email" /><br />
          <textarea className="contact__form-submit" name="message" /><br />
          <button>Send</button>
        </form>
      </section>
    </section>
  </Layout>
)
export default IndexPage