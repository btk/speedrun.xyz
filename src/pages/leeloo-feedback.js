import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


class IndexPage extends React.Component {
  render(){
    return (
      <Layout>
        <SEO title="Leeloo Feedback - 𝗱𝗿𝗲𝗮𝗺𝗼𝗿𝗶𝗲𝗻𝘁𝗲𝗱" description="Send us feedback about leeloo."/>
        <h1>leeloo feedback</h1>
        <p>Did you face any problem while using our app Leeloo AAC? Please let us know, we are very keen to making Leeloo the best assissive communication software out there. </p>

        <h3>Contact Information</h3>
        <p><a href="mailto:hannah@assistivecards.com">leeloo@assistivecards.com</a></p>
        <p>If you would like to report a problem that is related to you account, please take a screenshot of your "My Account" screen or send attach your "Account ID" shown in your "My Account" screen of your app settings.</p>

        <p>
          Also don't forget to give us a rating or review on the Appstore or Google Play. Thank you!
        </p>

      </Layout>
    )
  }
}

export default IndexPage
