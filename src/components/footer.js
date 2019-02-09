import React from "react"
import { Link } from "gatsby"

const Footer = () => (
  <footer className="footer">
    <div className="footer-primary">
      © Joey Robinson<br/>
      {new Date().getFullYear()}
    </div>
    <div className="footer-far__left">
      <ul>
        <li><a target="_blank" rel="noopener noreferrer" href="https://www.spotify.com/us/">spotify</a></li>
        <li><a target="_blank" rel="noopener noreferrer" href="https://myanimelist.net/">anime</a></li>
        <li><a target="_blank" rel="noopener noreferrer" href="http://blog.dota2.com/?l=english">dota2</a></li>
        <li><a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/">youtube</a></li>
      </ul>
    </div>
    <div className="footer-far__right">
      <ul>
        <li><a target="_blank" rel="noopener noreferrer" href="https://developer.mozilla.org/en-US/">mdn</a></li>
        <li><a target="_blank" rel="noopener noreferrer" href="https://stackoverflow.com/">s.overflow</a></li>
        <li><a target="_blank" rel="noopener noreferrer" href="https://codepen.io/#">codepen</a></li>
        <li><a target="_blank" rel="noopener noreferrer" href="https://codesandbox.io/">codesandbox</a></li>
      </ul>
    </div>
  </footer>
)

export default Footer