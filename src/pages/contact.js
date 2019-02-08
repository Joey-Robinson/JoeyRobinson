import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" keywords={[`gatsby`, `portfolio`, `react`]} />
    <div className="contact">
      <div className="contact-top">
        <h1>where to find me</h1>
      </div>
      <div className="contact-middle">
        <p><a target="_blank" rel="noopener noreferrer" href="https://github.com/Joey-Robinson">github</a></p>
        <p><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/joey-robinson/">linkedin</a></p>
        <p><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/joeyrobinsondev">twitter</a></p>
        <p><a target="_blank" rel="noopener noreferrer" href="mailto:joeyrobinsondev@gmail.com">email</a></p>
      </div>
      <div className="contact-bottom">
      <form name="contact" method="POST" data-netlify="true">
        <p>
          <label>Email: <input type="text" name="name" /></label>
        </p>
        <p>
          <label>Message: <textarea name="message"></textarea></label>
        </p>
        <div data-netlify-recaptcha="true"></div>
        <p>
        <button type="submit">Send</button>
        </p>
      </form>
    </div>
  </div>
</Layout>
)

export default ContactPage
