import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


class IndexPage extends React.Component {
  state = {

  }

  render(){
    return (
      <Layout>
        <SEO title="𝗱𝗿𝗲𝗮𝗺𝗼𝗿𝗶𝗲𝗻𝘁𝗲𝗱 - Creative Solutions for Accessibility" description="We are a group of people focused on Creating, designing, making and sustaining digital products that matter!"/>
        <p style={{fontSize: 23}}>
        Building creative solutions for<br/>
        accessibility & better human × tech
        interaction</p>

        <h2>wearemakingthings</h2>
        <p>We are passionate designers, coders and makers trying to make people's lives better.</p>
        <p>No matter who they are, what background they come from or which disability they have, everyone can have a decent life through technology.</p>

        <a href="#"><span>OUR PROJECTS <span>SOON</span></span><svg viewBox="0 0 24 24"><path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"></path></svg></a>

        <h2>workwithus</h2>
        <p>We are open for exciting projects you might outline for us. Keep in mind we are not focused on profitability or corporate projects.
         Get in touch with us to learn our process.</p>

        <a href="mailto:info@dreamoriented.org"><span>CONTACT US</span><svg viewBox="0 0 24 24"><path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"></path></svg></a>

        <h2>joinus</h2>
        <p>We are always looking for new maker-minded team players, we value talent, not experience. Get in touch with us.</p>
        <a href="mailto:info@dreamoriented.org?subject=[Career] Hi, Dream Oriented&body=I want to be a part of what you are doing, here is some information about me, and projects I've worked on..." target="_blank"><span>CAREER</span><svg viewBox="0 0 24 24"><path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"></path></svg></a>

      </Layout>
    )
  }
}

export default IndexPage
