import React from 'react'
import Link from 'gatsby-link'

export default function Template({data}){
  const post = data.markdownRemark
  
  return (
    <div className="Blog-Content">
      <Link className="Blog-GoBack" to="/blog">Go Back</Link>
      <h1>{post.frontmatter.title}</h1>
      <div
        className="Blog-Main" 
        dangerouslySetInnerHTML={{__html: post.html}} />
        <h4 className="Blog-Content-Maker">
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
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
        date
      }
    }
  }
`