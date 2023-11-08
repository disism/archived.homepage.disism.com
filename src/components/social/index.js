import React from "react"
import "./style.scss"
import { graphql, useStaticQuery } from "gatsby"

const SocialLinks = () => {
  const data = useStaticQuery(graphql`
      query SiteSocialDataQuery {
        site {
          siteMetadata {
            socialData {
              link {
                style
                link
              }
              list
            }
          }
        }
      }
  `)

  return (
    <section className="social-link">
      <div className="social-link-list">
        {data.site.siteMetadata.socialData.link.map((item, idx) => {
          return (
            <div key={idx}>
              <a href={item.link} target="_blink">
                <div className={item.style}> </div>
              </a>
            </div>
          )
        })}
      </div>
      <div className="social-link-text">
        {data.site.siteMetadata.socialData.list}
      </div>
    </section>
  )
}

export default SocialLinks