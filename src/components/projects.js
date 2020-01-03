import React, { Grid } from "react"
import ProjectEntry from "./projectEntry"
import { Row, Col } from "react-simple-flex-grid"
import "react-simple-flex-grid/lib/main.css"
import { rhythm } from "../utils/typography"
import styled from "styled-components"

const Projects = () => {
  var projectData = [
    [
      "SafeFront",
      "The next generation 911",
      "https://github.com/shamdasani/SafeFront",
    ],
    [
      "Robotic Arm",
      "Picks up pennies and precisely deposits on a target",
      "https://github.com/vjindal0112/WM_robo",
    ],
    [
      "Mousetrap Vehicle",
      "Entirely 3D printed vehicle that is accurate to ~3 cm over 8 m forwards and backwards",
      "https://github.com/vjindal0112/Mousetrap18-19",
    ],
    [
      "FTC Movement Library",
      "Created for the 18-19 FTC competition",
      "https://bitbucket.org/vjindal8/islandbots19/src/master/",
    ],
  ]

  var columnDivStyle = {
    padding: "0px 0px 0px 14px",
  }

  const StyledCol = styled(Col)`
    padding: 0px 0px 0px 14px;
    @media only screen and (max-width: 900px) {
      padding: 0px 0px 0px 23px;
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
          <h2>Projects</h2>
        </Col>
      </StyledRow>
      <StyledRow gutter={50}>
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
