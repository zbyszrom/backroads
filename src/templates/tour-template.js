import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import styled from 'styled-components'
//import styles from "./template.module.scss"

const Template = ({ data }) => {
  const {
    name,
    descriptionNode,
    video,
    images,
    country,
  } = data.tour
  const Iframe = styled.div`
    padding-bottom: 56.25%; 
    position: relative; 
    display: block; 
    width: 100%;`

//if (video.url = "https://www.youtube.com/watch?v=YS3-untznOo"){
//video.url = 'brak'}



  return (
    <Layout>

  <h1>{name}</h1>
  <h4>{country}</h4>
  <div dangerouslySetInnerHTML={{ __html: descriptionNode.childMarkdownRemark.html }}/>

  <div className="center"> 
  {images.map((item, index) => {
              return (
                <Img
                  key={index}
                  fluid={item.fluid}
                  
                 
                />
              )
            })}
 
 <Iframe >
    <iframe className ='frame'  frameborder = '0' src={video.url}></iframe>
  </Iframe>
  </div>
  </Layout>
  
  )
          }


export const query = graphql`
  query($slug: String!) {
    tour: datoCmsTour(slug: { eq: $slug }) {
      name
      country 
      descriptionNode {
        childMarkdownRemark {
          html
        }
      }
      video {
        url
      }
      images {
        fluid {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
    }
  }
`

export default Template
