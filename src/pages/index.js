import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import { Row, Col } from "react-simple-flex-grid"
import "react-simple-flex-grid/lib/main.css"

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

    // var leftColumnDivStyle = {
    //   justifyContent: "center",
    //   alignItems: "center",
    // }

    const StyledRow = styled(Row)`
      @media only screen and (max-width: 996px) {
        flex-flow: column nowrap;
        align-items: center;
      }
    `

    const HalfStyledCol = styled(Col)`
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
    `

    return (
      <>
        <SEO title="Varun Jindal" spoiler="Product builder, dancer, foodie" />
        <PortfolioLayout location={this.props.location} title="Varun Jindal">
          <StyledRow justify="end">
            <HalfStyledCol
              style={{
                justifyContent: "center",
                backgroundImage: `url(${AlmondBlobs})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                margin: "auto",
                height: "80vh",
              }}
              xs={{ offset: 0, span: 12 }}
              sm={{ offset: 0, span: 12 }}
              md={{ offset: 0, span: 6 }}
              lg={{ offset: 0, span: 6 }}
            >
              <div>
                <Greeting />
              </div>
            </HalfStyledCol>
            <HalfStyledCol
              xs={{ offset: 0, span: 12 }}
              sm={{ offset: 0, span: 12 }}
              md={{ offset: 0, span: 6 }}
              lg={{ offset: 0, span: 6 }}
            >
              <div>
                <ProfilePic />
              </div>
              <div
                style={{
                  marginTop: "20px",
                  marginRight: "auto",
                  marginLeft: "auto",
                }}
              >
                <Buttons />
              </div>
              <div
                style={{
                  alignItems: "flex-start",
                  paddingLeft: "4px",
                }}
              >
                <Currently />
              </div>
            </HalfStyledCol>
          </StyledRow>
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
  }
`
