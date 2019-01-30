import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <header className="header">
    <nav>
      <Link className="header-title" to="/">
        {siteTitle}
      </Link>
      <Link className="header-about" to="/about/">
        About
      </Link>
      <Link className="header-work" to="/work/">
        Work
      </Link>
      <Link className="header-contact" to="/contact/">
        Conact
      </Link>
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
