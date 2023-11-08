import React from "react"

import Layout from "../../layouts"
import SEO from "../../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div style={{ padding: `1rem`}}>
      <h1>404 NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>
        <span role="img" aria-label="information">
          😺
        </span>
      </p>
    </div>

  </Layout>
)

export default NotFoundPage
