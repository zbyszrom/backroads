import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
//import styles from "./template.module.scss"

const Template = ({ data }) => {
  const {
    name,
    
    description,
    images,
    country,
  } = data.tour

  

  return (
    <Layout>

  <h1>{name}</h1>
  <h4>{country}</h4>
  <p>{description}</p>
  
  <div className="center">
  
  {images.map((item, index) => {
              return (
                <Img
                  key={index}
                  fluid={item.fluid}
                  
                 
                />
              )
            })}
  </div>
  
  
  </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    tour: datoCmsTour(slug: { eq: $slug }) {
      name
      country 
      description     
      images {
        fluid {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
    }
  }
`

export default Template
