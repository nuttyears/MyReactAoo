import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/eHeader"
import '../components/Email.css'

const SecondPage = () => (
  <div className="emailHeader">
    <div>
      <SEO title="Email" />
      <Header />
      <div className="EmailContent">
        <div className="EmailImage">
        </div>
        <div className="EmailHeadline">
          <p>Hi Christina!</p>
          <h5><b>2 files and 3 folders</b> are shared with you</h5>
        </div>
        <div className="EmailUser">
          <p>Shared by</p> 
          <div className="EmailUserImage"></div>
          <h3>Marti Valencia</h3>
          <h4>Assistant Editor</h4>
          <a href="email">marti.valencia@nls-s1.com</a>
        </div>
      </div>
    </div>    
  </div>
)

export default SecondPage
