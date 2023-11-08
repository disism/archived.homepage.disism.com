import React from "react"
import { Link } from "gatsby"
import "./style.scss"
import OrderCompleted from "../images/order-completed"

function BlogPage({posts}) {
  return (
    <div className="blog-body-layout">
      <div className="blog-list">
        {posts.map(({ node }) => {
          return (

            <div className="blog-list-inner" key={node.fields.slug}>
              <div className="tag-style">{node.frontmatter.tags}</div>
              <Link
                to={node.fields.slug}
              >
                <h3>
                  {node.frontmatter.title}
                </h3>
                <p>{node.excerpt}</p>
              </Link>
              <p>push: {node.frontmatter.date}</p>
            </div>
          )
        })}
      </div>
      <div className="blog-hot">
        <OrderCompleted />

        <div className="blog-list-inner" key={posts[0].node.fields.slug}>
          <Link
            to={posts[0].node.fields.slug}
          >
            <h3>
              {posts[0].node.frontmatter.title}
            </h3>
            <p>{posts[0].node.excerpt}</p>
          </Link>
          <p>push: {posts[0].node.frontmatter.date}</p>

        </div>

      </div>
    </div>
  )
}

export default BlogPage