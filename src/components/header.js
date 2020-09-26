import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div className="logo">
      <Link to={"/"}>
        <img src={require("../images/do_logo.svg")} alt="dream oriented logo" style={{width: 300}}/>
      </Link>
      <img src={require("../images/dots.svg")}  style={{width: 300}}/>
    </div>
  </header>
)

export default Header
