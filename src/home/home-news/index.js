import React from "react"
import "./style.scss"
import Artifacts from "./artifacts"
import HomeFeaturedArticles from "./home-featured-articles"
import Subscription from "../../components/subscription"

const HomeNews = () => {

  return (
    <section className="home-news">
      <section className="home-news-header">
        NEWS
      </section>
      <section className="news-layout">

        <section className="artifacts">
          <Artifacts />
        </section>

        <section className="featured">
          <HomeFeaturedArticles />
        </section>

        <section className="subscription">
          <Subscription />
        </section>
      </section>
    </section>
  )
}

export default HomeNews