import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"



export default function IndexPage({data}) {
  let { games } = data;

  return (
    <Layout>
      <SEO title="speedrun.xyz - Live timeline of record speedruns for games" description="Visualized timeline of speedrun records for popular games and run categories"/>
      <p style={{fontSize: 23}}>
      Visualized timeline of speedrun records<br/>
      for popular games and run categories</p>

      <h2>Games</h2>
      <p>Choose a game to watch the timeline of records, live.</p>

      <div className="gameListing">
        {games.edges.map((node, i) => {
          let game = node.node;
          return(
            <Link to={`/game/${game.slug}`} key={i} className="GameObject">
              <div className="GameObjectInner">
                <img src={game.cover} style={{width: "100%"}} alt={game.name}/>
                <h4>{game.name}</h4>
              </div>
            </Link>
          )
        })}
      </div>

      <p>The game you want is not here? Let us know and we will add it.</p>
      <a href="mailto:info@dreamoriented.org"><span>REQUEST A GAME</span></a>

    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    games: allGame {
      edges {
        node {
          code
          slug
          name
          cover
          category {
            id
            name
          }
          released
        }
      }
    }
  }
`
