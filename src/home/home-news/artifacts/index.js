import React from "react"
import "./style.scss"
import SocialLinks from "../../../components/social"
import FlamencoDone from "../../../images/flamenco-done"
import { graphql, useStaticQuery } from "gatsby"

const  Artifacts = () => {

  const data = useStaticQuery(graphql`
      query SiteAppsDataQuery {
        site {
          siteMetadata {
            aboutData {
              apps {
                link
                title
                comment
              }
              developer
            }
          }
        }
      }
  `)

  return (
    <>
      <FlamencoDone />
      <ul className="artifact-list">
        {data.site.siteMetadata.aboutData.apps.map((item, idx) => {
          return (
            <li key={idx}>
              <h3>
                <a href={item.link} target="_blink">
                  {item.title}
                </a>
              </h3>
              <span className="artifact-list-description">{item.comment}</span>
            </li>
          )
        })}
      </ul>
      <div style={{
        fontSize: `1.38316rem`,
        fontWeight: `bold`,
        borderTop: `2px dashed #B5495B`,
        padding: `.69rem 0 .554rem 0`
      }}>
        Developer {data.site.siteMetadata.aboutData.developer} on social media
      </div>
      <SocialLinks />
    </>
  )
}

export default Artifacts