import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { Link } from "gatsby"
import MeButton from "./meButton"
import "./global.css"

import { rhythm } from "../utils/typography"

const Buttons = () => {
  var buttonStyle = {
    borderRadius: "5px",
    padding: "5px 10px",
  }

  var textStyle = {
    color: "black",
    margin: '0',
  }

  var buttonInfo = [
    ["/img/linkedinLogo.svg", "https://www.linkedin.com/in/varun-jindal/", "#9fa0ab"], // #9fa0ab
    ["/img/quillLogo.svg", "./blog", "#A8D2C1"], // #A8D2C1
    [
      "/img/youtubeLogo.svg",
      "https://www.youtube.com/channel/UC-zRUcaMrRfS9x_JsiMa7Mg?view_as=subscriber",
      "#F0D5B3"
    ], // #F0D5B3
    ["/img/githubLogo.svg", "https://github.com/vjindal0112", "#E2ACE0"], // #E2ACE0
  ]

  return (
    <div
      style={{
        display: "flex",
        flexFlow: "row wrap",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <MeButton imgLink={buttonInfo[0][0]} link={buttonInfo[0][1]} bgColor={buttonInfo[0][2]}/>
      <MeButton imgLink={buttonInfo[1][0]} link={buttonInfo[1][1]} bgColor={buttonInfo[1][2]}/>
      <MeButton imgLink={buttonInfo[2][0]} link={buttonInfo[2][1]} bgColor={buttonInfo[2][2]}/>
      <MeButton imgLink={buttonInfo[3][0]} link={buttonInfo[3][1]} bgColor={buttonInfo[3][2]}/>
    </div>
  )
}

export default Buttons
