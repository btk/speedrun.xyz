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
        <SEO title="Legal Information - 𝗱𝗿𝗲𝗮𝗺𝗼𝗿𝗶𝗲𝗻𝘁𝗲𝗱" description="You can find, Dream Oriented Limited Legal information on this page."/>
        <h1>legalinfo</h1>
        <p>Dream Oriented is a registered entity/company in Republic of Turkey. There is few information we need to display here to make sure companies working with us access the right informations, tax id etc.</p>

        <table>
          <tr>
            <td>Legal Company Name<br/><span>Ticaret Ünvanı</span></td>
            <td>Dream Oriented Yazılım Ve Bilişim Limited Şirketi</td>
          </tr>
          <tr>
            <td>Tax Id<br/><span>Vergi No</span></td>
            <td>3131169763</td>
          </tr>
          <tr>
            <td>Centeral Registry<br/><span>MERSIS No</span></td>
            <td>0313116976300001</td>
          </tr>
          <tr>
            <td>Trade Registry<br/><span>Ticaret Sicil No</span></td>
            <td>441375</td>
          </tr>
          <tr>
            <td>Registration Date<br/><span>Tescil Tarihi</span></td>
            <td>07.01.2020</td>
          </tr>
          <tr>
            <td>Address<br/><span>Adres</span></td>
            <td>Ankara, Turkey</td>
          </tr>
        </table>

        <p>See the <a href="/vergi.pdf" target="_blank">tax sheet</a> for the company.</p>
        <p>Please get in contact with us if you need any additional information. Legally, when we create a reciept or invoice for you or your company, we will email you a copy of it. You can also ask for archived reciepts or invoices we created for you.</p>

      </Layout>
    )
  }
}

export default IndexPage
