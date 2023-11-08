import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../components/header"
import "../styles/global.scss"
import "./style.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
      query SiteTitleQuery {
          site {
              siteMetadata {
                  title
                  description
                  author
              }
          }
      }
  `)

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata.title}
        siteDescription={data.site.siteMetadata.description}
      />

      <main>{children}</main>

      <footer className="footer">
        © {new Date().getFullYear()} {data.site.siteMetadata.author} All Rights Reserved.
        Built with <a href="https://www.gatsbyjs.org" target="_blink">Gatsby</a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
