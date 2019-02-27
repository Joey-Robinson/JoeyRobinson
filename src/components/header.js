import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FaGithub, FaLinkedinIn, FaTwitter, FaGoogle } from 'react-icons/fa/index'

const Header = () => (
  <nav className="header">
    <ul className="header__links">
      <li>
        <Link to="/">
          Home
        </Link>
      </li>
      <li>
        <Link to="/portfolio/">
          Portfolio
        </Link>
      </li>
      <li>
        <a target="_blank" rel="noopener" aria-label="Word Press Blog" href="https://jrobinsondev.wordpress.com/">
          WP Blog
        </a>
      </li>
    </ul>
    <footer className="header__footer">
      <section className="header__footer-social">
        <a href="https://github.com/Joey-Robinson">
          <FaGithub size="3em" />
        </a>
        <a href="https://www.linkedin.com/in/joey-robinson/">
          <FaLinkedinIn size="3em" />
        </a>
        <a href="https://twitter.com/joeyrobinsondev">
          <FaTwitter size="3em" />
        </a>
        <a href="mailto:joeyrobinsondev@gmail.com">
          <FaGoogle size="3em" />
        </a>
      </section>
      <p>
        © {new Date().getFullYear()}, Joey Robinson
      </p>
    </footer>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
