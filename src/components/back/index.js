import AniLink from "gatsby-plugin-transition-link/AniLink"
import React from "react"
import "./style.scss"

const GoBackToHome = () => {
  return (
    <section className="go-back-homepage">
      <AniLink
        cover
        bg="#EB7A77"
        duration={.64}
        to="/"
      >
        Go back to the homepage
      </AniLink>
    </section>
  )
}

export default GoBackToHome