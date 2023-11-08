import React from "react"
import "./style.scss"
import FlamencoUnsubscribe from "../../images/flamenco-unsubscribed"
import { graphql, useStaticQuery } from "gatsby"

const Subscription = () => {
  const data = useStaticQuery(graphql`
      query SiteSubDataDataQuery {
        site {
          siteMetadata {
            subscription
          }
        }
      }
  `)
  return (
    <>
      <FlamencoUnsubscribe />
      <section>
        <h2>SUBSCRIBE</h2>
        <p>
          {data.site.siteMetadata.subscription}
        </p>

        <form
          className="subscribe"
          action="https://disism.us19.list-manage.com/subscribe/post?u=cde2e6708dfa8b7d76e89535e&amp;id=f8e16bc3da"
          method="post" id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          target="_blank" noValidate
        >
          <input
            type="email"
            name="EMAIL"
            id="mce-EMAIL"
            placeholder="E-Mail Address..." />
          <button>Submit</button> or <a href="https://t.me/disism_chan" target="_blink">TELEGRAM</a> Channel.
        </form>

      </section>
    </>
  )
}

export default Subscription