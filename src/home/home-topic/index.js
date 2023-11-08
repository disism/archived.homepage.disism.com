import React from "react"
import "./style.scss"
import { graphql, useStaticQuery } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const HomeTopic = () => {
  const data = useStaticQuery(graphql`
      query SiteTopicDataQuery {
        site {
          siteMetadata {
            topic {
              title
              desc
              link {
                link
                name
              }
            }
          }
        }
      }
  `)
  const topic = data.site.siteMetadata.topic

  return (
    <section className="topic">
      <div className="topic-text">
        <h1>{topic.title}</h1>
        <br/>
        <h3>{topic.desc}</h3>
      </div>
      <div className="topic-button">
        {topic.link.map((item, idx) => {
          return (
            <div key={idx}>
              {idx === 0 ? <AniLink
                paintDrip
                to={item.link}
                duration={0.64}
                hex="#A96360"
              >{item.name}</AniLink>
              : <a href={item.link} target="_blank" rel="noreferrer">{item.name}</a> }
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default HomeTopic