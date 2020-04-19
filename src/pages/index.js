import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Header from "../components/header"
import SEO from "../components/seo"

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <Header />
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Learn to <br /> design and code react apps</h1>
        <p>Complete courses about the best tools and design systems. Prototype and build apps with React and Swift.</p>
        <p>Now go build something great.</p>
        <a href="/page-2/">Watch the video</a>
      </div>
    </div>  
  </div>
)

export default IndexPage