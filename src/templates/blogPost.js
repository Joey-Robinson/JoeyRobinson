import React from 'react'
import Link from 'gatsby-link'

export default function Template({data}){
  const post = data.markdownRemark
  
  return (
    <div className="Blog-Content">
      <Link className="Blog-Content-GoBack" to="/blog">Go Back</Link>
      <h5>{post.frontmatter.date}</h5>
      <h1>{post.frontmatter.title}</h1>
      <div
        className="Blog-Content-Main" 
        dangerouslySetInnerHTML={{__html: post.html}} />
        <h4 className="Blog-Content-Maker">
          Posted by: {post.frontmatter.author} on {post.frontmatter.date}
        </h4>
    </div>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String) {
    markdownRemark(frontmatter: {path: {eq: $path}}){
      html
      frontmatter {
        path
        title
        author
      }
    }
  }
`