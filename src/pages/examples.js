import React from 'react'
import Header from '../examples/Header'
import HeaderStatic from '../examples/HeaderStatic'
import Layout from '../components/layout'
import {graphql} from "gatsby"

const examples = ({data}) => {
    const {
        site:{
            info:{
                author
            }
        }
    } = data
    return (
        <Layout>
            <p>Examples page</p>
            <Header/>
            <HeaderStatic/>
            <h5>Author:{author}</h5>
        </Layout>
    )
}

export const data = graphql`
    query MyQuery
    {
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
export default examples
