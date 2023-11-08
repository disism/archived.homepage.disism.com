import React from "react"
import Layout from "../../layouts"
import SEO from "../../components/seo"
import SocialLinks from "../../components/social"
import "./style.scss"
import AboutDISISMImage from "../../images/about-disism-image"
import GoBackToHome from "../../components/back"
import Apps from "../../about/apps"
import WhatIs from "../../about/whatis"
import Thanks from "../../about/thanks"
import { graphql, useStaticQuery } from "gatsby"

const About = () => {
  const data = useStaticQuery(graphql`
      query SiteAboutDataQuery {
        site {
          siteMetadata {
            aboutData {
              whatIs
              timeline
              apps {
                link
                title
                comment
              }
              open
              link {
                link
                title
              }
            }
            author
          }
        }
      }
  `)

  return (
    <Layout>
      <SEO title="About" />
      <section style={{ margin: '1rem', borderBottom: '1px dashed #000' }}>
        <h1>About</h1>
      </section>

      <section className="about-content">
        <section className="about-banner">
          <div style={{ borderBottom: `1px dashed rgb(0, 0, 0)` }}>
            <WhatIs data={data}/>
          </div>
          <div style={{ borderBottom: `1px dashed rgb(0, 0, 0)`, paddingTop: `1rem` }}>
            <Apps data={data}/>
          </div>
          <div style={{ paddingTop: `1rem`}}>
            <Thanks />
          </div>


          <SocialLinks />
        </section>

        <section className="about-right">
          <AboutDISISMImage />
        </section>
      </section>

      <GoBackToHome />
    </Layout>
  )
}

export default About
