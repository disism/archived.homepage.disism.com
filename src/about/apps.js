import React from "react"

const Apps = ({ data }) => {
  return (
    <>
      <h2>APPs</h2>
      {data.site.siteMetadata.aboutData.apps.map((item, idx) => {
        return (
          <div key={idx}>
            <h3>
              <a href={item.link} target="_blink">
                {item.title}
              </a>
            </h3>
            <h4>{item.comment}</h4>
          </div>
        )
      })}

      <h2>OPEN SOURCE</h2>
      <p>{data.site.siteMetadata.aboutData.open}</p>
        <div>
          {data.site.siteMetadata.aboutData.link.map((item, idx) => {
            return (
              <div key={idx}>
                <h4><a href={item.link}>{item.title}</a></h4>
              </div>
            )
          })}
        </div>

    </>
  )
}

export default Apps