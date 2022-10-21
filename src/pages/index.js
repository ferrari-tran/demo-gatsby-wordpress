import * as React from "react"
import { Link, graphql } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <h1>My WordPress Blog</h1>
    <h4>Posts</h4>
    {data.allWpPost.edges.map(({ node }) => (
      <div key={node.slug}>
        <Link to={node.slug}>
          <p>
            <strong>Title: </strong>
            {node.title}
          </p>
        </Link>
        <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        <p>--------------------------------------------------------</p>
      </div>
    ))}
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const pageQuery = graphql`
  {
    allWpPost(sort: { fields: [date] }) {
      edges {
        node {
          title
          excerpt
          slug
        }
      }
    }
  }
`
export const Head = () => <Seo title="Home" />

export default IndexPage
