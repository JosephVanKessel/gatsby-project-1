import React from "react"
import { StaticQuery, graphql } from "gatsby"

const ComponentName = () => (
  <StaticQuery
    query={graphql`
      {
        site {
          info: siteMetadata {
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
    `}
    render={data => <h4>{data.site.info.description}</h4>}
  ></StaticQuery>
)

export default ComponentName