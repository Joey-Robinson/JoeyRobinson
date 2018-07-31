import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <Link className="Header-Link-Home" to="/">{siteTitle}</Link>
    <Link className="Header-Link-Skills" to="/skills">Skills</Link>
  </div>
)

export default Header
