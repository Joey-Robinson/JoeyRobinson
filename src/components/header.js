import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = () => (
  <header className="header">
    <nav className="header-nav">
      <Link className="header-nav__title title" to="/">
        j
      </Link>
      <Link className="header-nav__about about" to="/about/">
        a
      </Link>
      <Link className="header-nav__work work" to="/work/">
        w
      </Link>
      <Link className="header-nav__contact contact" to="/contact/">
        c
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
