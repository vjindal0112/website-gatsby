import React, { Grid } from "react"
import ProjectEntry from "./projectEntry"
import { Row, Col } from "react-simple-flex-grid"
import "react-simple-flex-grid/lib/main.css"
import { rhythm } from "../utils/typography"

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

  return (
    <>
      <Row>
        <Col offset={3} span={6}>
          <h2>Projects</h2>
        </Col>
      </Row>
      <Row gutter={50}>
        <Col span={3} offset={3} style={columnDivStyle}>
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
        </Col>
        <Col span={3} style={columnDivStyle}>
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
        </Col>
      </Row>
    </>
  )
}

export default Projects
