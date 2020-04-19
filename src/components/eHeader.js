import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './eHeader.css'

const eHeader = ({ siteTitle }) => (
  <div className="emailHeader">
    <div className="EmailHeaderGroup">
      <div className="ProductLogo">
          <img src={require('../images/content-hub-logo.png')} width="176" />
      </div>
      <div className="titleInfo">
        <h4>Nobody's Looking: Season 1</h4>
        <h5>Original Name: Ninguem Ta Olhando: Season 1</h5>
        <h5>MID: 81159258</h5>
      </div>
    </div>
  </div>
)

eHeader.propTypes = {
  siteTitle: PropTypes.string,
}

eHeader.defaultProps = {
  siteTitle: ``,
}

export default eHeader
