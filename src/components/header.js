import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = () => (
  <nav className="header">
    <ul className="header__links">
      <li>
        <Link to="/">
          Home
        </Link>
      </li>
      <li>
        <Link to="/work/">
          Work
        </Link>
      </li>
    </ul>
    <footer className="header__footer">
      © {new Date().getFullYear()}, Me
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
