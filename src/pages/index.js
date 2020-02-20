import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default () => (
    <div>
        <h1> Top Page </h1>
        <div className="flex-column">
            <Link to='/about'>About</Link>
            <Link to='/about-css-modules'>About CSS MODULES</Link>
            <Link to='/contact'>contact</Link>
            <Link to='/mark-down'>mark-down</Link>
            <Link to='/my-files'>my-files</Link>
        </div>
        <Layout>
            <h1>Amazing Pandas Eating Things</h1>
            <div>
                <img
                    src="https://2.bp.blogspot.com/-BMP2l6Hwvp4/TiAxeGx4CTI/AAAAAAAAD_M/XlC_mY3SoEw/s1600/panda-group-eating-bamboo.jpg"
                    alt="Group of pandas eating bamboo"
                />
            </div>
        </Layout>
    </div>
)