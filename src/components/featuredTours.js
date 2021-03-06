import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Tour from "./tour"
import { Link } from "gatsby"


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
      <section>
      <div className='title'>
      <h4>Featured <span>Tours</span></h4>
      </div>
        <div className='center'>
        
        {tours.map(({ node }) => {
        return <Tour key={node.id} tour = {node}  /> 
        
      })}
        </div>
        <div style={{textAlign: 'center'}}>
      <Link to="/tours" className = 'btn-primary'>
        All tours
      </Link>
      </div>
        </section>
    )

}
export default FeaturedTours