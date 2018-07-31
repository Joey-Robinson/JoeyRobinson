import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <Link activeClassName="Header-Link-Home-Active" exact={true} className="Header-Link-Home" to="/">
      <span className="Header-Home-Visible">Home</span>
      <span className="Header-Home-Invisible">Phone</span>
    </Link>
    <Link activeClassName="Header-Link-Skills-Active" className="Header-Link-Skills" to="/skills">Skills</Link>
    <Link activeClassName="Header-Link-About-Active" className="Header-Link-About" to="/about">About</Link>
    <Link activeClassName="Header-Link-Portfolio-Active" className="Header-Link-Portfolio" to="/portfolio">Portfolio</Link>
    <Link activeClassName="Header-Link-Blog-Active" className="Header-Link-Blog" to="/blog">Blog</Link>
    <Link activeClassName="Header-Link-Contact-Active" className="Header-Link-Contact" to="/contact">Contact</Link>
  </div>
)

export default Header
