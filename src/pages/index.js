import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Header from "../components/header"
import SEO from "../components/seo"
import Card from "../components/card"
import styled from "styled-components"
import Section from "../components/Section"
import Wave from "../components/Wave"

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
        <div className="logos">
          <img src={require('../images/logo-sketch.png')} width="50"/>
          <img src={require('../images/logo-figma.png')} width="50"/>
          <img src={require('../images/logo-studio.png')} width="50"/>
          <img src={require('../images/logo-framer.png')} width="50"/>
          <img src={require('../images/logo-react.png')} width="50"/>
          <img src={require('../images/logo-swift.png')} width="50"/>
        </div>
        <Wave />
      </div>
    </div>  
    <div className="Cards">
      <h2>11 courses, more coming</h2>
      <div className="CardGroup">
        <Card
          title="Design Systems"
          text="12 sections"
          image={require('../images/wallpaper.jpg')}
        />
        <Card
          text="12 sections"
          title="React for Designers"
          image={require('../images/wallpaper.jpg')}
        />
        <Card
          title="Sound Design"
          text="12 sections"
          image={require('../images/wallpaper.jpg')}
        />
        <Card
          title="React for Designers"
          text="12 sections"
          image={require('../images/wallpaper.jpg')}
        />
      </div>
    </div>
    <Section
        image={require('../images/wallpaper2.jpg')}
        logo={require('../images/logo-react.png')}
        title="React for Designers"
        text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with components, Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netfliy."
    />
  </div>
)

export default IndexPage