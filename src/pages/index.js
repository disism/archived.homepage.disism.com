import React from "react"

import Layout from "../layouts"
import SEO from "../components/seo"
import HomeBanner from "../home/home-branner"
import HomeNews from "../home/home-news"
import HomeShowcase from "../home/home-showcase"
import HomeRecommend from "../home/home-recommend"
import HomeTopic from "../home/home-topic"

const Home = () => (
  <Layout>
    <SEO title="Home" />
    {/* Homepage components group. */}
    <HomeBanner />
    <HomeNews />
    <HomeShowcase />

    <HomeTopic />
    <HomeRecommend />
  </Layout>
)

export default Home
