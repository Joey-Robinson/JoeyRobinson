import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <h1>
      <Link to="/">{siteTitle}</Link>
      <Link to="/skills">Skills</Link>
    </h1>
  </div>
)

export default Header
