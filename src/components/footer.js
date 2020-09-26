import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = ({ siteTitle }) => (
  <div className="footer" style={{ paddingTop: 20, paddingBottom: 30}}>
    <div className="footerDivider"></div>

    <img src={require("../images/do_logo.svg")} alt="dream oriented logo" style={{width: 150, marginBottom: 10}}/>
    <p>© {new Date().getFullYear()}, {` `} Dream Oriented Limited</p>
    <Link to={"/"}>Home</Link>
    <Link to={"/legal"}>Legal</Link>
    <Link to={"/termsofuse"}>Terms of Use</Link>
    <Link to={"/privacypolicy"}>Privacy Policy</Link>
    <Link to={"/licenses"}>Licenses</Link>
  </div>
)

export default Footer
