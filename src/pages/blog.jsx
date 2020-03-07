import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            excerpt
            html
          }
        }
      }
    }
  `)
  console.log(data)

  return (
    <Layout>
      <div>
        <h1>Blog</h1>
        <ol>
          {data.allMarkdownRemark.edges.map(post => {
            return (
              <li>
                <h2>{post.node.frontmatter.title}</h2>
                <h3>{post.node.frontmatter.date}</h3>
                <p>{post.node.excerpt}</p>
              </li>
            )
          })}
        </ol>
      </div>
    </Layout>
  )
}

export default BlogPage
