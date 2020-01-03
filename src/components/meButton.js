import React, { Component } from "react"
import { rhythm } from "../utils/typography";

export default class MeButton extends Component {
  
  constructor(props, context){
    super(props, context);
    this.lightenBackground = this.lightenBackground.bind(this);
    this.darkenBackground = this.darkenBackground.bind(this);
    this.adjust = this.adjust.bind(this);
    this.state = {
      bgColor: this.props.bgColor
    }
  }

  lightenBackground() {
    this.setState(state => ({
      bgColor: this.adjust(state.bgColor, 14)
    }));
  }

  darkenBackground() {
    this.setState(state => ({
      bgColor: this.props.bgColor
    }));
  }

  adjust(color, amount) {
    return (
      "#" +
      color
        .replace(/^#/, "")
        .replace(/../g, color =>
          (
            "0" +
            Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(
              16
            )
          ).substr(-2)
        )
    )
  }

  render() {
    const { bgColor, text, link } = this.props

    var buttonStyle = {
      borderRadius: "5px",
      padding: "8px 14px",
      margin: '5px 10px',
    }

    var textStyle = {
      color: 'black',
      margin: '0',
      fontSize: "90%",
    }
    
    var textDivStyle = {
      margin: "auto auto",
      minWidth: rhythm(2),
      textAlign: 'center',
    }

    return (
      <div onMouseOver={this.lightenBackground} onMouseOut={this.darkenBackground} style={{ ...buttonStyle, backgroundColor: this.state.bgColor }}>
        <a href={link}>
          <div style={textDivStyle}>
            <p style={textStyle}>{text}</p>
          </div>
        </a>
      </div>
    )
  }
}
