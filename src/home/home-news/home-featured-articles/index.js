import React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import "./style.scss"

const HomeFeaturedArticles = () => {
  const articleQuery = useStaticQuery(graphql`
      query {
          allMarkdownRemark(
              sort: { fields: [frontmatter___date], order: DESC }
              limit: 3
          ) {
              totalCount
              edges {
                  node {
                      frontmatter {
                          date
                          title
                          tags
                      }
                      fields {
                          slug
                      }
                      excerpt(truncate: true pruneLength: 100)
                  }
              }
          }
      }
  `)

  return (
    <>
      <section className="featured">
        {articleQuery.allMarkdownRemark.edges.map(({ node }, idx) => (
          <div className="featured-inner" key={idx}>
            <div className="featured-tag">{node.frontmatter.tags}</div>
            <Link
              to={node.fields.slug}
            >
              <h3>
                {node.frontmatter.title}
              </h3>
              <p>{node.excerpt}</p>
            </Link>
            push: {node.frontmatter.date}
          </div>
        ))}
      </section>

      <section className="view-all-post">
        <AniLink
          paintDrip to="/blog"
          duration={0.64}
          hex="#FFBA84"
        >
          MORE
        </AniLink>
      </section>
    </>
  )
}

export default HomeFeaturedArticles