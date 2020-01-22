import React from "react"
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import styles from "./tour.module.scss"

const Tour = ({ tour }) => {
    const { name, country, images} = tour
    let mainImage = images[0].fluid
 
    return (
        <>
       
        <div>
        <Image fluid = {mainImage} />
        <h3>{name}</h3>
        <h4>{country}</h4>
        </div>
        </>
    )


}

export default Tour