import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <Link activeClassName="Header-Home-Active" exact={true} className="Header-Home" to="/">
      <span className="Header-Home-Visible">Home</span>
      <span className="Header-Home-Invisible">Phone</span>
    </Link>
    <Link activeClassName="Header-Skills-Active" className="Header-Skills" to="/skills">
      <span className="Header-Skills-Visible">Skills</span>
      <span className="Header-Skills-Invisible">What I Can Do</span>   
    </Link>
    <Link activeClassName="Header-About-Active" className="Header-About" to="/about">
      <span className="Header-About-Visible">About</span>
      <span className="Header-About-Invisible">Me</span>
    </Link>
    <Link activeClassName="Header-Portfolio-Active" className="Header-Portfolio" to="/portfolio">
      <span className="Header-Portfolio-Visible">Portfolio</span>
      <span className="Header-Portfolio-Invisible">See What I've Done</span>
    </Link>
    <Link activeClassName="Header-Blog-Active" className="Header-Blog" to="/blog">
      <span className="Header-Blog-Visible">Blog</span>
      <span className="Header-Blog-Invisible">My Thougts</span>
    </Link>
    <Link activeClassName="Header-Contact-Active" className="Header-Contact" to="/contact">
      <span className="Header-Contact-Visible">Contact</span>
      <span className="Header-Contact-Invisible">Drop A Line</span>
    </Link>
  </div>
)

export default Header
