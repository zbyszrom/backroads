import React from 'react'
//import img from "../images/defaultBcg.jpg"
import styles from './about.module.scss'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const getAbout = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "defaultBcg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`


const About =()=>
{
  const { aboutImage } = useStaticQuery(getAbout)
    return (
        <section>
        <div className='title'>
        <h4>About <span>Us</span></h4>
        </div>
        <div className={styles.center}>
        <article className={styles.img}>
        <div className={styles.imgContainer}>
        <Img
              fluid={aboutImage.childImageSharp.fluid}
              alt="awesome landscape"
            />
        </div>
        </article>
        <article className={styles.info}>
        <h4>explore the difference</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
            doloribus enim necessitatibus?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
            doloribus enim necessitatibus?
          </p>
          <button type="button" className="btn-primary">
            read more
          </button>  
        </article>
        </div>
        </section>
    )
}

export default About