import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div className="header">
      <Link to={`/`}><div className="logo">speedrun.xyz</div></Link>
    </div>
  </header>
)

export default Header
