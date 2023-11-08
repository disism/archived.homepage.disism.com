import React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts"

const BlogPost = ({ data }) => {
  const post = data.markdownRemark
  const handleGoBack = () => {
    window.history.back()
  }

  return (
    <Layout>
      <section className="blog-post-style">
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </section>
      <section className="go-back">

        <button onClick={handleGoBack}>
          Go Back
        </button>
      </section>
    </Layout>
  )
}

export const BlogPostQuery = graphql`
    query BlogPostQuery($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
            }
        }
    }
`
export default BlogPost