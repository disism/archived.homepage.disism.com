import React from "react"
import { graphql } from 'gatsby'
import SEO from "../components/seo"
import BlogComponent from "../blog"
import Pagination from "../components/pagination"
import Layout from "../layouts"

const Blog = ({data, pageContext}) => {

  const posts = data.allMarkdownRemark.edges
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()

  return (
    <Layout>
      <section className="blog-content">
        <SEO title="Blog" />
        <div className="blog-header">
          {data.allMarkdownRemark.totalCount} artists
        </div>

        <BlogComponent posts={posts}/>

        <Pagination
          isFirst={isFirst}
          isLast={isLast}
          nextPage={nextPage}
          prevPage={prevPage}
          numPages={numPages}
          currentPage={currentPage}
        />
      </section>

    </Layout>
  )
}

export default Blog


export const blogListQuery = graphql`
    query blogListQuery($skip: Int!, $limit: Int!) {
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            limit: $limit
            skip: $skip
        ) {
            totalCount
            edges {
                node {
                    excerpt(truncate: true)
                    fields {
                        slug
                    }
                    frontmatter {
                        date
                        title
                        tags
                    }
                }
            }
        }
    }
`
