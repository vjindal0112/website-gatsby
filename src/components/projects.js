import React, { Grid } from "react"
import ProjectEntry from "./projectEntry"
import { Row, Col } from "react-simple-flex-grid"
import "react-simple-flex-grid/lib/main.css"
import { rhythm } from "../utils/typography"
import styled from "styled-components"

const Projects = () => {
  var projectData = [
    [
      "Loop Insurance",
      "SWE Intern at Austin-based startup trying to remove biases in the insurance industry. Worked on infrastructure team.",
      "https://ridewithloop.com",
    ],
    [
      "StudyBuddies",
      "Creating community in the classroom by matching students into study groups. Scaled to 23000+ users across UMich, UChicago, and UCLA.",
      "https://try.studybuddies.ai",
    ],
    [
      "Enlight",
      "Cohort-based way to gain technical skills for PMs and Marketers. Was founding engineer and participated in G-Tech Create-X Accelerator.",
      "https://enlight.nyc",
    ],
    [
      "Skateboard",
      "Built skateboard from scratch with wood vaneers (thin wood planks). Laser-ingraved wave on the underside of the board.",
      "https://www.notion.so/Skateboard-e70c661539a84a62815e3f58c6c0409f",
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
          <h2 style={{marginBottom: "0px", marginTop: "65px"}}>Work</h2>
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
