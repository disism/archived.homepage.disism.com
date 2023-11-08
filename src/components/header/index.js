import React, { useRef, useState } from "react"
import './style.scss'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import useOutsideClick from "../hooks/useOutsideClick"

const TitleLinkStyle = {
  backgroundSize: `0`,
  textDecoration: `none`
}
const HeaderTitle = ({title, desc}) => {
  return (
    <div>
      <AniLink cover duration={0.64} bg="#9E7A7A" to="/" style={TitleLinkStyle}>
        <div className="header-title">
          <p>{title}</p>
        </div>
        <div className="header-description">{desc}</div>
      </AniLink>
    </div>
  )
}

const HeaderMenu = () => {
  return (
    <section
      style={{ fontSize: `1.2rem` }}
      className="header-menu"
    >
      <AniLink cover to="/" duration={0.64} bg="#9E7A7A">HOME</AniLink>
      <AniLink paintDrip to="/blog" duration={0.64} hex="#FFBA84">BLOG</AniLink>
      <AniLink cover direction="top" to="/about" duration={0.5} bg="#F17C67">ABOUT</AniLink>
    </section>
  )
}

const ChangeSiteMenu = () => {
  return (
    <section className="header-select-menu">

      <a href="https://asa.disism.com" target="_blink">
        <button type="button">
          <div className="header-asa-icon"/>
          <div>Asa</div>
        </button>
      </a>

      {/*<a href="https://dudu.disism.com" target="_blink">*/}
      {/*  <button type="button">*/}
      {/*    <div className="header-dudu-icon"/>*/}
      {/*    <div>Dudu</div>*/}
      {/*  </button>*/}
      {/*</a>*/}

      <a href="https://install.disism.com" target="_blink">
        <button type="button">
          <div className="header-install-icon"/>
          <div>Install</div>
        </button>
      </a>

    </section>
  )
}

const HeaderChangeSite = () => {
  const [changeSite, setChangeSite] = useState(false)
  const changeRef = useRef(null)

  useOutsideClick(changeRef, () => {
    setChangeSite(!changeSite)
  });

  return (
    <>
      <section className="header-select">
        <div className="header-select-default">
          <button type="button" onClick={() => setChangeSite(!changeSite)}>
            <div className="header-select-icon"/>
            <div>MORE APPs</div>
          </button>
          {changeSite && <div ref={changeRef}><ChangeSiteMenu /></div>}
        </div>
      </section>
    </>
  )
}

const Header = ({ siteTitle, siteDescription }) => {
  return (
    <header className="header">
      <HeaderTitle title={siteTitle} desc={siteDescription} />
      <HeaderMenu/>
      <HeaderChangeSite/>
    </header>
  )
}

export default Header