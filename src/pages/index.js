import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SimpleHero from "../components/SimpleHero"
import About from "../components/about"
import Services from '../components/services'




const IndexPage = () => (
  <Layout>
    <SimpleHero />
    <About />
    <Services />
  
  </Layout>
)

export default IndexPage
