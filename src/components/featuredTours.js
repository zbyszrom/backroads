import React from "react"
import { useStaticQuery, graphql } from "gatsby"


const getTours = graphql`
query {
  featuredTours: allDatoCmsTour(filter: { featured: { eq: true } }) {
    edges {
      node {
        name
        slug
        country
       id          
      }
    }
  }
}
`

const FeaturedTours = ()=> {

  const response = useStaticQuery(getTours)
  const tours = response.featuredTours.edges

    return (
      <>
      <div className='title'>
      <h4>Featured <span>Tours</span></h4>
      </div>
        <setion className='cards'>
        
        {tours.map(({ node }) => {
        return <div key={node.id} className="card"> 
        <h3>{node.name} </h3>
        <p>{node.country} </p>
        </div>
      })}
        </setion>
        </>
    )

}
export default FeaturedTours