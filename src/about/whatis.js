import React from "react"

const WhatIs = ({ data }) => {

  return (
    <>
      <h2>{data.site.siteMetadata.author} ？</h2>
      <h4>{data.site.siteMetadata.author} {data.site.siteMetadata.aboutData.whatIs}</h4>
      <div style={{
        borderTop: `1px dashed rgb(0, 0, 0)`,
        paddingTop: `1rem`
      }}>
        <h2>Timeline</h2>
        {data.site.siteMetadata.aboutData.timeline.map((item, idx) => {
          return (
            <div key={idx}>
              <h4>{item}</h4>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default WhatIs