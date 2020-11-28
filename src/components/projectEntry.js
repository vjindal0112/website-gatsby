import React, { Component } from "react"
import { rhythm } from "../utils/typography"
import { textColorPrimary } from "../constants"
import styled from "styled-components"

const Link = styled.a`
  text-decoration: none;
  color: ${textColorPrimary};
`

const H3 = styled.h3`
  margin-bottom: 6px;
  font-size: 20px;
  text-decoration: ${props => (props.underline ? "underline" : "none")};
`

export default class projectEntry extends Component {
  constructor(props) {
    super(props)
    this.lightenText = this.lightenText.bind(this)
    this.darkenText = this.darkenText.bind(this)
    this.state = {
      textColor: textColorPrimary,
      underline: false,
    }
  }

  lightenText() {
    this.setState(state => ({
      textColor: "#666",
      underline: true,
    }))
  }

  darkenText() {
    this.setState(state => ({
      textColor: textColorPrimary,
      underline: false,
    }))
  }

  render() {
    const { title, description, link } = this.props

    var wrapperStyle = {
      minHeight: rhythm(5),
      padding: "0",
    }
    return (
      <div
        style={wrapperStyle}
        onMouseOver={this.lightenText}
        onMouseOut={this.darkenText}
      >
        <Link href={link}>
          <div style={{ color: this.state.textColor }}>
            <H3 underline={this.state.underline}>{title}</H3>
          </div>
          <div style={{ color: this.state.textColor }}>{description}</div>
        </Link>
      </div>
    )
  }
}
