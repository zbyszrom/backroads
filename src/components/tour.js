import React from "react"
import Image from "gatsby-image"
import { Link} from 'gatsby'
import styles from "./tour.module.scss"

const Tour = ({ tour }) => {
    const { name, country, images, slug} = tour
    let mainImage = images[0].fluid
 
    return (
        <>
       
        <div className ="">
        <div className={styles.imgContainer}>  
        <Image fluid = {mainImage} />
        </div>
        <Link to={`/tours/${slug}`}> 
        <h3>{name}</h3>
        </Link>
        <h4 className= {styles.country}>{country}</h4>
        </div>
        </>
    )


}

export default Tour