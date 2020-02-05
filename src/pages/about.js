import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default ({ data }) => (
    <div style={{ color: `teal` }}>
        <Layout>
            <h1>About {data.site.siteMetadata.title}</h1>
            <p>
                We're the only site running on your computer dedicated to showing the best
                photos and videos of pandas eating lots of food.
    </p>
        </Layout>
        <div className="flex-column">
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
        </div>
        <Header headerText="About Gatsby" />
        <Header headerText="It's pretty cool" />
        <h1>About Gatsby</h1>
        <p>Such wow. Very React.</p>
    </div>
)