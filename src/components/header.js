import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = () => (
  <header className="header">
    <nav className="header__nav">
      <ul>
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about/">
            About
          </Link>
        </li>
        <li>
          <Link to="/work/">
            Work
          </Link>
        </li>
      </ul>
    </nav>
    <footer className="footer header__footer">
      © {new Date().getFullYear()}, Joey Robinson
    </footer>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
