import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Tour from "./tour"


const getTours = graphql`
query {
  featuredTours: allDatoCmsTour(filter: { featured: { eq: true } }) {
    edges {
      node {
        images {
          fluid {
            ...GatsbyDatoCmsFluid
          }
        }
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
        return <Tour key={node.id} tour = {node} className="card" /> 
        
      })}
        </setion>
        </>
    )

}
export default FeaturedTours