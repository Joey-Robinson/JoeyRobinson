import React from 'react'
import Link from 'gatsby-link'

// The actual Blog Layout here. You can see the graphql query below
// This is just fetching the data and returning it. 

const Blog = ({data}) => (
  <div className="Blog">
    {data.allMarkdownRemark.edges.map(post => (
      <div className="Blog-Display" key={post.node.id}>
        <Link
          className="Blog-Display-Title"
          to={post.node.frontmatter.path}
        >
          <h1 className="Blog-Display-Title-H1">
            {post.node.frontmatter.title}
          </h1>
        </Link>
        <div className="Blog-Display-PostedBy">
          {post.node.frontmatter.date}
        </div>
        <p className="Blog-Display-Excerpt">
          {post.node.excerpt}
        </p>
      </div>
    ))}
  </div>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }){
      edges {
        node {
          id
          frontmatter {
            path
            title
            author
          }
        }
      }
    }
  }
`

export default Blog