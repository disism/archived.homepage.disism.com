import React from "react"
import "./style.scss"
import { graphql, useStaticQuery } from "gatsby"

const HomeRecommend = () => {
  const data = useStaticQuery(graphql`
      query SiteRecommendDataQuery {
        site {
          siteMetadata {
            recommend {
              date
              imgUrl
              name
              url
            }
          }
        }
      }
  `)

  const recommend = data.site.siteMetadata.recommend

  return (
    <>
      <section className="home-recommend">
        <div className="home-recommend-header">
          MORE INTERESTING
        </div>
        <div className="home-recommend-inner">
          {recommend.map(( rec ) => {
            const recImage = rec.imgUrl
            return (
              <div key={Math.random()} className="rec-card">
                <a href={rec.url} target="_blank" rel="noreferrer">
                  <img src={require('./home-recommend-images/' + recImage)} alt=""/>
                  <span style={{ fontSize: ".8rem" }}>{rec.date}</span>
                  <div style={{ margin: ".5rem 0",
                    fontSize: "1.3rem"
                  }}>{rec.name}</div>
                </a>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default HomeRecommend