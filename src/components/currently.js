import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

import SchoolBag from "../../content/assets/school-bag.svg"
import MirrorBall from "../../content/assets/mirror-ball.svg"
import Laptop from "../../content/assets/laptop.svg"
import OpenBook from "../../content/assets/open-book.svg"
import MusicNotes from "../../content/assets/music-notes.svg"
import { flattenDiagnosticMessageText } from "typescript"

const Currently = () => {

  var SVGStyle = {
    width: "20px",
    height: "20px",
    marginBottom: "10px",
  }

  var statement = {
    display: "flex",
    flexFlow: "row nowrap",
  }
  
  return (
    <>
    <h2>Currently</h2>
    <div
      style={{
        display: "flex",
        flexFlow: "column nowrap",
      }}
    >
      <div style={statement}>
        <img src={SchoolBag} style={SVGStyle} />
        <span>
          &nbsp;
          Working on <b>Reflect.me</b>
        </span>
      </div>
      <div style={statement}>
        <img src={MirrorBall} style={SVGStyle} />
        <span>
          &nbsp;
          Working on <b>Reflect.me</b>
        </span>
      </div>
      <div style={statement}>
        <img src={Laptop} style={SVGStyle} />
        <span>
          &nbsp;
          Working on <b>Reflect.me</b>
        </span>
      </div>
      <div style={statement}>
        <img src={OpenBook} style={SVGStyle} />
        <span>
          &nbsp;
          Working on <b>Reflect.me</b>
        </span>
      </div>
      <div style={statement}>
        <img src={MusicNotes} style={SVGStyle} />
        <span>
          &nbsp;
          Working on <b>Reflect.me</b>
        </span>
      </div>
    </div>
    </>
  )
}

export default Currently
