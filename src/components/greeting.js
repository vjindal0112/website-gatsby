import React, { Component } from "react"

import SplitText from "react-pose-text"
import { rhythm } from "../utils/typography"

const greetingPose = {
  exit: { opacity: 0 },
  enter: {
    opacity: 1,
    delay: 300,
  },
}

const descriptionPose = {
  exit: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ charIndex }) => charIndex * 20 + 500,
  },
}

var descriptionStyle = {
  fontSize: rhythm(0.8),
  fontWeight: "normal",
  display: "inline",
}

var greetingStyle = {
  fontSize: rhythm(3),
  display: "inline",
}

var divStyle = {
  maxWidth: rhythm(20),
}

const Greeting = () => (
  <>
    <div style={divStyle}>
      <h1>
        <SplitText
          initialPose="exit"
          pose="enter"
          charPoses={greetingPose}
          style={greetingStyle}
        >
          Hi, I'm Varun
        </SplitText>
      </h1>
    </div>
    <div style={divStyle}>
      <p style={{ display: "block" }}>
        <SplitText
          initialPose="exit"
          pose="enter"
          charPoses={descriptionPose}
          style={descriptionStyle}
        >
          I dance, code, work out, read, eat yummy food, and love living life.
        </SplitText>
      </p>
    </div>
  </>
)

export default Greeting
