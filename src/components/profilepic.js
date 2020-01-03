import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const ProfilePic = () => {
  const data = useStaticQuery(graphql`
    query ProfileQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      site {
        siteMetadata {
          author
          description
          social {
            twitter
          }
        }
      }
    }
  `)
  const { author, social, description } = data.site.siteMetadata
  return (
    <Image
        fluid={data.avatar.childImageSharp.fluid}
        alt={author}
        style={{
          margin: '0 auto',
          minWidth: '300px',
          minHeight: '300px',
          maxWidth: '300px',
          maxHeight: '300px',
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
  )
}

export default ProfilePic;
