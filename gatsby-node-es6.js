import _ from "lodash";
import Promise from "bluebird";
import path from "path";
import slash from "slash";
import axios from "axios";
import crypto from "crypto";
import gameRuns from "./runs.js";

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it


exports.sourceNodes = async ({ actions, cache }) => {
  const { createNode } = actions;

  await sourceGames(createNode);
}


async function sourceGames(createNode){

  let keys = Object.keys(gameRuns).filter(k => k.includes("json"));
  let games = Object.values(gameRuns).slice(0, keys.length);

  games.map((game, i) => {

    const node = {
      id: `Game-${i}`,
      parent: `__SOURCE__`,
      internal: {
        type: `Game`,
      },
      children: [],
      code: game.id,
      name: game.names.international,
      slug: game.abbreviation,
      released: game.released,
      cover: game.assets["cover-large"].uri,
      category: game.category,
      runs: JSON.stringify(game.runs)
    }

    const contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(node))
      .digest(`hex`);
    // add it to userNode
    node.internal.contentDigest = contentDigest;

    createNode(node);
  });
}

exports.createPages = async ({ actions, graphql, reporter, cache }) => {
  const { createPage } = actions

  const gameTemplate = require.resolve(`./src/templates/game.js`)
  const gameResult = await graphql(`
    {
      allGame(
        limit: 1000
      ) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  // Handle errors
  if (gameResult.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  gameResult.data.allGame.edges.forEach(({ node }) => {
    createPage({
      path: `/game/${node.slug}/`,
      component: gameTemplate,
      context: {
        slug: node.slug
      },
    })
  })

}
