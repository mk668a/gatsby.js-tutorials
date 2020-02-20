import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (

    <div css={css`
        background: #fff;
        margin: 2rem auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
    `}>
      <Link to={`/`}>
        <h3 css={css`
          margin-bottom: ${rhythm(2)};
          display: inline-block;
          font-style: normal;
        `}>{data.site.siteMetadata.title}</h3>
      </Link>

      <Link
        to={`/`}
        css={css`
        float: right;
      `}>HOME</Link>

      {children}
    </div>
  )
}