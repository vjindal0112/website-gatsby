/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ spoiler, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            spoiler
            author
          }
        }
      }
    `
  )

  const metaSpoiler = spoiler || site.siteMetadata.spoiler

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: `I'm a learner and a developer. I love to dance, play sports, run, and build. I'm currently building Enlight, a platform to help anyone learn to code for free.`
        },
        {
          name: `spoiler`,
          content: metaSpoiler,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:spoiler`,
          content: metaSpoiler,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:spoiler`,
          content: metaSpoiler,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  spoiler: ``,
}

SEO.propTypes = {
  spoiler: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
