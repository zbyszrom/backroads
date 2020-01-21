import React from "react"
//import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SimpleHero from "../components/simpleHero"
import About from "../components/about"
import Services from '../components/services'
import FeaturedTours from '../components/featuredTours'


const IndexPage = () => (
  <Layout>
    <SimpleHero />
    <About />
    <Services />
    <FeaturedTours/>

  
  </Layout>
)

export default IndexPage
