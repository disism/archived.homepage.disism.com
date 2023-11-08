import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import "./style.scss"

function Pagination({isFirst, prevPage, numPages, isLast, nextPage, currentPage}) {
  return (

    <section className="pagination">
      {!isFirst && (
        <AniLink cover duration={0.64} bg="#A96360" to={`/blog/${prevPage}`}>
          ⬅
        </AniLink>
      )}

      {Array.from({ length: numPages }, (_, i) => (
        <AniLink
          cover duration={0.64}
          bg="#A96360"
          className={currentPage === i + 1 ? 'current' : ''}
          key={`pagination-number${i + 1}`}
          to={`/blog/${i === 0 ? "" : i + 1}`}>
          {i + 1}
        </AniLink>
      ))}

      {!isLast && (
        <AniLink cover duration={0.64} bg="#A96360" to={`/blog/${nextPage}`}>
          ➡
        </AniLink>
      )}
    </section>
  )
}

export default Pagination