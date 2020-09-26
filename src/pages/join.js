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
        <SEO title="dreamoriented" description=""/>
        <div style={{marginTop: 100}}>

          <Link to={"/"}>
            <div className="logo">
              <img src={require("../images/do_logo.svg")}/>
            </div>
          </Link>
          <h1>Join as an Intern</h1>

          <p style={{fontSize: 19, lineHeight: "1.5em"}}>We have a learning focused programme for 6 months in Dream Oriented. We, developers, designers and makers, love to share our experiences with people just starting.</p>

          <p style={{fontSize: 19, lineHeight: "1.5em"}}>
            You are a university student, or just graduated highschool.
          </p>

          <p style={{fontSize: 19, lineHeight: "1.5em"}}>
            You like learning things, value & respect when people wants to teach you things.
          </p>

          <p style={{fontSize: 19, lineHeight: "1.5em"}}>
            This is an unpaid position but we will compensate your meals and transportation expenses if you work from our office.
          </p>

        </div>
      </Layout>
    )
  }
}

export default IndexPage
