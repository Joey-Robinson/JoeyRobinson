import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = () => (
  <header className="header">
    <nav className="header-nav nav">
      <div className="nav-home">
        <Link to="/">
          home
        </Link> 
      </div>
      <div className="nav-work">
        <Link to="/work/">
          work
        </Link>
      </div>
      <div className="nav-about">
        <Link to="/about/">
          about
        </Link>
      </div>
      <div className="nav-contact">
        <Link to="/contact/">
          contact
        </Link>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
