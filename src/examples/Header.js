import React from 'react'
import {useStaticQuery,graphql} from 'gatsby'

const getData = graphql`
  query FirstQuery {
    site {
      info:siteMetadata {
        description
        title
        author
        person {
          age
          name
        }
      }
    }
  }
`
const Header = () => {
  const {
    site:{
      info:{
        title,
        person:{
          name
        }
      }
    }
  } = useStaticQuery(getData)
  
  return (
    <div>
      <h1>{title}</h1>
      <h1>{name}</h1>
    </div>
  )
}

export default Header


