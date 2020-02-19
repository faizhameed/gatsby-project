import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header>
      {/*  <Link to="/">Home</Link>
      <Link to="/contact">Contact Page</Link>
      <Link to="/about">About Page</Link>
      <Link to="/blog">Blog Page</Link> */}
      <ul>
        <li>
          {" "}
          <Link to="/">Home</Link>
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
