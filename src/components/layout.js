/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import '../styles/layout.scss'

const Layout = ({ children }) => {
 

  return (
  
        <main>
      <Navbar />
      {children}
      <Footer />
    </main>
       
  )
}



export default Layout
