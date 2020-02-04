import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
    <div style={{ color: `teal` }}>
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