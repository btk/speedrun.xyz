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
        <SEO title="About" description="About this project and how it came up to be."/>
        <h1>About</h1>
        <p>Will fill this page in one day!</p>

        <p>All the rights of the Artwork of the games used in this website belongs to respective owners.</p>
      </Layout>
    )
  }
}

export default IndexPage
