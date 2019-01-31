import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Header from './header'
import '../sass/main.scss'
import { Link } from 'gatsby'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className="container">
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>
          {children}
          <footer className="container-footer footer">
            <div className="footer-far__left">
              {/* Far Left (GC:1) */}
              <ul>
                <li>one</li>
                <li>two</li>
                <li>three</li>
              </ul>
            </div>
            <div className="footer-middle__left">
              {/* Middle Left (GC:2) */}
              <ul>
                <li>one</li>
                <li>two</li>
                <li>three</li>
              </ul>
            </div>
            <div className="footer-middle__mid">
              {/* Middle */}© {new Date().getFullYear()}, Joey Robinson
            </div>
            <div className="footer-middle__right">
              {/* Middle Right (GC:4) */}
              <ul>
                <li>
                  <Link className="footer-site__about" to="/about/">
                    about
                  </Link>
                </li>
                <li>
                  <Link className="footer-site__work" to="/work/">
                    work
                  </Link>
                </li>
                <li>
                  <Link className="footer-site__contact" to="/contact/">
                    contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-far__right">
              {/* Far Right (GC:5) */}
              <ul>
                <li>one</li>
                <li>two</li>
                <li>three</li>
              </ul>
            </div>
          </footer>
        </div>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
