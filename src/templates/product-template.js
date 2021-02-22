import React from "react"
import { graphql, Link } from "gatsby"
import Layout from '../components/layout'
import Image from 'gatsby-image'


const ComponentName = ({ data:{product:{price, title, image:{fixed}, info:{info}}} }) => {
    return <Layout>
        <div>
            <Link to="/products">Back</Link>
            <h1>Single product</h1>
        </div>
        <section className="single-product">
            <article>
                <Image fixed={fixed} alt={title} />
            </article>
            <article>
                <h1>{title}</h1>
                <h3>${price}</h3>
                <p>{info}</p>
            </article>
        </section>
    </Layout>
}

export const query = graphql`
  query GetSingleProduct($slug:String) {
    product: contentfulProduct(slug: {eq: $slug}) {
      title
      price
      image {
        fixed (width:300){
          ...GatsbyContentfulFixed
        }
      }
      info {
        info
      }
    }
  }
`

export default ComponentName