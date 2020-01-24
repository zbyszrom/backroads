import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Tour from "./tour"


const getTours = graphql`
query {
  allTours: allDatoCmsTour {
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

const Tours = ()=> {

  const response = useStaticQuery(getTours)
  const tours = response.allTours.edges

    return (
      <section>
      <div className='title'>
      <h4>All <span>Tours</span></h4>
      </div>
        <div className='center'>
        
        {tours.map(({ node }) => {
        return <Tour key={node.id} tour = {node}  /> 
        
      })}
        </div>
        </section>
    )

}
export default Tours