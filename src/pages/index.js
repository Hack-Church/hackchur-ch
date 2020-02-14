import React from "react"
import { Helmet } from "react-helmet"
import HackChurch from "./hackchurch"

const containerStyle = {
  position: `absolute`,
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  display: `flex`,
  alignItems: `center`,
  justifyContent: `center`,
  backgroundColor: `#bf2020`,
}

export default () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>hackchur.ch</title>
        <link rel="canonical" href="https://hackchur.ch" />
      </Helmet>
      <div style={containerStyle}>
        <HackChurch />
      </div>
    </>
  )
}
