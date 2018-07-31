import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <Link activeClassName="Header-Link-Home-Active" exact={true} className="Header-Link-Home" to="/">Home</Link>
    <Link activeClassName="Header-Link-Skills-Active" className="Header-Link-Skills" to="/skills">Skills</Link>
    <Link activeClassName="Header-Link-About-Active" className="Header-Link-About" to="/about">About</Link>
  </div>
)

export default Header
