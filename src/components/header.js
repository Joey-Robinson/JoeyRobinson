import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <header className="header">
    <nav className="header-nav">
      <Link className="header-nav__title" to="/">
        {siteTitle}
      </Link>
      <Link className="header-nav__about" to="/about/">
        About
      </Link>
      <Link className="header-nav__work" to="/work/">
        Work
      </Link>
      <Link className="header-nav__contact" to="/contact/">
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
