import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import "./style.scss"
import HomeBannerImage from "../../images/home-banner-image"
import { graphql, useStaticQuery } from "gatsby"

const HomeBanner = () => {
  const data = useStaticQuery(graphql`
      query SiteBannerDataQuery {
        site {
          siteMetadata {
            homeBanner {
              bannerCN
              bannerEN
              bannerPinyin
              notice
              midBanner
              moreAbout
            }
          }
        }
      }
  `)

  return (
    <>
      <p className="home_notice">
        {data.site.siteMetadata.homeBanner.notice}
      </p>

      <section className="banner-header">
        {data.site.siteMetadata.homeBanner.bannerPinyin}
      </section>
      <section className="banner-inner">
        <div className="banner-image">
          <HomeBannerImage />
        </div>
        <div className="banner-text">
          <div className="banner-text-container">
            <h1>{data.site.siteMetadata.homeBanner.bannerCN}</h1>
            <h3>{data.site.siteMetadata.homeBanner.bannerEN}</h3>
            <div>{data.site.siteMetadata.homeBanner.midBanner}</div>
            <div>
              <AniLink
                paintDrip
                to="/about"
                duration={0.64}
                hex="#A96360"
              >
                <button type="button" className="now-start">
                  {data.site.siteMetadata.homeBanner.moreAbout}
                </button>
              </AniLink>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default HomeBanner