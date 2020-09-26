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
        <SEO title="Terms of Use - 𝗱𝗿𝗲𝗮𝗺𝗼𝗿𝗶𝗲𝗻𝘁𝗲𝗱" description="You can find, Dream Oriented Limited terms of use."/>
        <h1>termsofuse</h1>
        <p>Any software or product created by Dream Oriented Limited has no warranty, unless otherwise is stated. We don't accept liability for legal, medical or technical issues that might occur in result of using our products, services and softwares.</p>

        <p>Additionally <a href="https://policies.google.com/terms" target="_blank">Google's Terms of Use</a> apply.</p>

        <p>Accepting the terms to use our products and services means you have reviewed and accept our Privacy Policy. Please check <Link to={"/privacypolicy/"}>/privacypolicy</Link> page for more information on how we treat your data and collect information.</p>

        <p>We will notify you using the best contact channel (via email and/or social media channels) we can for you to review and accept the changes to this terms.</p>

        <p>
        As a registered legal entity Dream Oriented Yazılım ve Bilişim Limited Şirketi, adheres with the Republic of Turkey internet data collection, distribution and publishing laws with the <a href="https://www.resmigazete.gov.tr/eskiler/2007/05/20070523-1.htm" target="_blank">law id of 5651.</a>
        </p>

      </Layout>
    )
  }
}

export default IndexPage
