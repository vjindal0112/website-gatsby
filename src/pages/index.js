import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Bio from "../components/bio"
import PortfolioLayout from "../components/portfolioLayout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import ProfilePic from "../components/profilepic"
import Currently from "../components/currently"
import Buttons from "../components/buttons"
import Greeting from "../components/greeting"
import AlmondBlobs from "../../content/assets/almondBlobFriends.svg"
import "../components/global.css"
import Projects from "../components/projects"
import Contact from "../components/contact"

class Landing extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    var ProPicStyle = {
      marginLeft: rhythm(2),
      marginTop: "200px",
    }

    var halfDivStyle = {
      display: "flex",
      width: "50%",
      flexFlow: "column nowrap",
      alignItems: "center",
    }

    var rightColumnDivStyle = {
      minWidth: "400px",
    }

    var leftColumnDivStyle = {
      justifyContent: "center",
      alignItems: "center",
    }

    const StyledDiv = styled.div`
      display: flex;
      flex-flow: row nowrap;
      width: 100%;
      @media only screen and (max-width: 900px) {
        flex-flow: column nowrap;
        align-items: center;
      }
    `;

    const HalfStyledDiv = styled.div`
      display: flex;
      width: 50%;
      flex-flow: column nowrap;
      align-items: center;
      @media only screen and (max-width: 900px) {
        width: 80%;
      }
    `;

    return (
      <>
        <PortfolioLayout location={this.props.location} title={siteTitle}>
          <StyledDiv>
            <HalfStyledDiv
              style={{
                justifyContent: "center",
                backgroundImage: `url(${AlmondBlobs})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
            >
              <div style={leftColumnDivStyle}>
                <Greeting />
              </div>
            </HalfStyledDiv>
            <HalfStyledDiv>
              <div style={rightColumnDivStyle}>
                <ProfilePic />
              </div>
              <div
                style={{
                  ...rightColumnDivStyle,
                  marginTop: "20px",
                }}
              >
                <Buttons />
              </div>
              <div
                style={{
                  ...rightColumnDivStyle,
                  alignItems: "flex-start",
                  paddingLeft: "4px",
                }}
              >
                <Currently />
              </div>
            </HalfStyledDiv>
          </StyledDiv>
          <Projects />
          <Contact />
        </PortfolioLayout>
        {/* <Link to="/blog">blog</Link> */}
      </>
    )
  }
}

export default Landing

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
