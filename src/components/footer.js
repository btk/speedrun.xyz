import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = ({ siteTitle }) => (
  <div className="footer" style={{ paddingTop: 20, paddingBottom: 30}}>
    <Link to={"/"}><div className="logo" style={{margin: 0, fontSize: 20}}>speedrun.xyz</div></Link>
    <p>Data is supplied by awesome <a href="https://github.com/speedruncomorg/api" target="_blank">Speedrun.com API</a>'s verified runs.</p>
  </div>
)

export default Footer
