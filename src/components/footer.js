import React from 'react';
import { FaGithub, FaLinkedinIn, FaTwitter, FaGoogle } from 'react-icons/fa/index'

const Footer = () => (
  <footer className="footer">
    <ul className="footer__social">
      <li>
        <a href="https://github.com/Joey-Robinson">
          <FaGithub size="3em" />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/joey-robinson/">
          <FaLinkedinIn size="3em" />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/joeyrobinsondev">
          <FaTwitter size="3em" />
        </a>
      </li>
      <li>
        <a href="mailto:joeyrobinsondev@gmail.com">
          <FaGoogle size="3em" />
        </a>
      </li>
    </ul>
    <p>
      © {new Date().getFullYear()}, Joey Robinson
  </p>
  </footer>

)

export default Footer