import React from 'react'
import "./style.scss"
import { graphql, useStaticQuery } from "gatsby"

function HomeShowcase() {
  const data = useStaticQuery(graphql`
    query SiteShowcaseDataQuery {
      site {
        siteMetadata {
          showcase {
            id
            date
            imgUrl
            name
            url
          }
        }
      }
    }
  `)

  return (
    <section>
      <section className="home-showcase-list-header">
        SHOWCASE
      </section>

      <section className="home-showcase-list">
        {data.site.siteMetadata.showcase.map(( project ) => {
          const img = project.imgUrl
          return (
            <div key={project.id + Math.random()}>
              <a href={project.url} target="_blink">
                <div className="showcase-card">
                  <img src={require('./showcase-images/' + img)} alt=""/>
                    <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                      <div style={{
                        textDecoration: 'underline',
                        fontSize: '4rem'
                      }}>
                        {project.id}
                      </div>
                      <div style={{ marginLeft: '.5rem' }}>
                        <div
                          style={{
                            borderBottom: '1px solid #734338',
                          }}
                        >
                          {project.name}
                        </div>
                        <span style={{ fontSize: '.6rem' }}>{project.date}</span>
                      </div>
                </div>
                </div>
              </a>
            </div>
          )
        })}
      </section>
    </section>
  )
}

export default HomeShowcase