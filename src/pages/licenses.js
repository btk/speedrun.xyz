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
        <SEO title="Licenses & Attributions - 𝗱𝗿𝗲𝗮𝗺𝗼𝗿𝗶𝗲𝗻𝘁𝗲𝗱" description="You can find, Dream Oriented Limited Licenses & Attributions."/>
        <h1>licenses</h1>
        <p>A list of used software's Open Source licenses and used open licensed artwork attributions.</p>

        <h3>The MIT License (MIT)</h3>
        <ul>
          <li>Gatsby <a href="https://github.com/gatsbyjs/gatsby/blob/master/LICENSE" target="_blank" rel="nofollow">Copyright  2015 Gatsbyjs</a></li>
          <li>React Native <a href="https://github.com/facebook/react-native/blob/master/LICENSE" target="_blank" rel="nofollow">Copyright  Facebook, Inc. and its affiliates.</a></li>
          <li>Expo <a href="https://github.com/expo/expo/blob/master/LICENSE" target="_blank" rel="nofollow">Copyright  2015-present 650 Industries, Inc. (aka Expo)</a></li>
          <li>Tabler Icons <a href="https://github.com/tabler/tabler-icons/blob/master/LICENSE" target="_blank" rel="nofollow">Copyright  2020 Paweł Kuna</a></li>
          <li>three-js <a href="https://github.com/tabler/tabler-icons/blob/master/LICENSE" target="_blank" rel="nofollow">Copyright  2010-2013 three.js authors</a></li>
        </ul>

        <h3>Apache License</h3>
        <ul>
          <li>material-design-icons <a href="https://github.com/google/material-design-icons/blob/master/LICENSE" target="_blank" rel="nofollow">Version 2.0, January 2004</a></li>
        </ul>


        <h3>Creative Commons</h3>
        <ul>
          <li>Flaticon Free <a href="https://www.freepikcompany.com/legal#nav-flaticon" target="_blank" rel="nofollow">Freepik Company, S.L, June 2019</a></li>
          <li>Flaticon Premium <a href="https://support.flaticon.com/hc/en-us/articles/360001779097-How-to-download-the-Premium-licenses-" target="_blank" rel="nofollow">Freepik Company, S.L, June 2019</a> License info is added on the related products.</li>
          <li>SVG Repo <a href="https://www.svgrepo.com/page/licensing" target="_blank" rel="nofollow">Varied, November 19, 2019</a></li>
          <li>unDraw <a href="https://undraw.co/license" target="_blank" rel="nofollow">Copyright 2020 Katerina Limpitsouni</a></li>
        </ul>

        <p>
        As a registered legal entity Dream Oriented Yazılım ve Bilişim Limited Şirketi, adheres with the Republic of Turkey internet data collection, distribution and publishing laws with the <a href="https://www.resmigazete.gov.tr/eskiler/2007/05/20070523-1.htm" target="_blank">law id of 5651.</a>
        </p>

      </Layout>
    )
  }
}

export default IndexPage
