import React from "react"
import { Link } from "gatsby"
/* import "./header.module.scss" */
import headerStyles from "./header.module.scss" //css modules

const Header = () => {
  return (
    <header>
      <h4>LOGO HERE</h4>
      <ul>
        <li>
          {" "}
          <Link className={headerStyles.link} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/contact">Contact Page</Link>
        </li>
        <li>
          {" "}
          <Link to="/about">About Page</Link>
        </li>
        <li>
          <Link to="/blog">Blog Page</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
