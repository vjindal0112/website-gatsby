import React, { Grid } from "react"
import ProjectEntry from "./projectEntry"
import { Row, Col } from "react-simple-flex-grid"
import "react-simple-flex-grid/lib/main.css"
import { rhythm } from "../utils/typography"
import styled from "styled-components"

const Projects = () => {
  var projectData = [
    [
      "StudyBuddies",
      "Helping students find study buddies in class in a time of extreme isolation. Launched at UMich; currently at UChicago and UCLA.",
      "https://umichstudybuddies.com",
    ],
    [
      "Robotic Arm",
      "Picks up pennies and precisely deposits on a target. Check out the Youtube Video!",
      "https://github.com/vjindal0112/WM_robo",
    ],
    [
      "Mousetrap Vehicle",
      "Entirely 3D printed vehicle that is accurate to ~3 cm over 8 m forwards and backwards",
      "https://github.com/vjindal0112/Mousetrap18-19",
    ],
    [
      "Enlight",
      "Created *the* place to learn to code. As a co-founder, it was my first revenue making company!",
      "https://enlight.nyc",
    ],
  ]

  const StyledCol = styled(Col)`
    padding: 0px 25px 0px 2px;
    @media only screen and (max-width: 600px) {
      padding: 0px 25px 0px 2px;
    }
  `;

  const StyledRow = styled(Row)`
    @media only screen and (max-width: 1200px) {
      flex-flow: column nowrap;
    }
  `;

  return (
    <>
      <StyledRow>
        <Col
          xs={{ offset: 0, span: 12 }}
          md={{ offset: 3, span: 6 }}
          sm={{ offset: 3, span: 6 }}
          lg={{ offset: 3, span: 6 }}
        >
          <h2 style={{marginBottom: "0px", marginTop: "65px"}}>Projects</h2>
        </Col>
      </StyledRow>
      <StyledRow>
        <StyledCol
          xs={{ offset: 0, span: 12 }}
          md={{ offset: 3, span: 6 }}
          sm={{ offset: 3, span: 6 }}
          lg={{ offset: 3, span: 3 }}
        >
          <ProjectEntry
            title={projectData[0][0]}
            description={projectData[0][1]}
            link={projectData[0][2]}
          />
          <ProjectEntry
            title={projectData[1][0]}
            description={projectData[1][1]}
            link={projectData[1][2]}
          />
        </StyledCol>
        <StyledCol
          xs={{ offset: 0, span: 12 }}
          md={{ offset: 3, span: 6 }}
          sm={{ offset: 3, span: 6 }}
          lg={{ offset: 0, span: 3 }}
        >
          <ProjectEntry
            title={projectData[2][0]}
            description={projectData[2][1]}
            link={projectData[2][2]}
          />
          <ProjectEntry
            title={projectData[3][0]}
            description={projectData[3][1]}
            link={projectData[3][2]}
          />
        </StyledCol>
      </StyledRow>
    </>
  )
}

export default Projects
