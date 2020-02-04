import React from "react"
import { Link } from "gatsby"

export default () => (
    <div>
        <h1> Top Page </h1>
        <div className="flex-column">
            <Link to='/about'>About</Link>
            <Link to='/about-css-modules'>About CSS MODULES</Link>
            <Link to='/contact'>contact</Link>
        </div>
    </div>
)