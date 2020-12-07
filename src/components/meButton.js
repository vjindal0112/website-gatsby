import React, { Component } from "react"
import { rhythm } from "../utils/typography";
import styled from "styled-components"

export default class MeButton extends Component {
  
  constructor(props, context){
    super(props, context);
    this.adjust = this.adjust.bind(this);
    this.state = {
      bgColor: this.props.bgColor
    }
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
    const { bgColor, imgLink, link } = this.props

    var buttonStyle = {
      borderRadius: "5px",
      padding: "8px 14px",
      margin: '5px 10px',
    }
    
    var textDivStyle = {
      margin: "auto auto",
      minWidth: rhythm(2),
      textAlign: 'center',
    }

    const FlexDiv = styled.div`
      display: flex;
      justify-content: center;
      align-items:center;

    `

    const ButtonDiv = styled.div`
      border-radius: 5px;
      padding: 8px 18px;
      margin: 5px 10px;
      background-color: ${this.state.bgColor};
      @media only screen and (max-width: 996px) {
        padding: 8px 8px;
      }
      &:hover {
        background-color: ${this.adjust(this.props.bgColor, 14)}
      }
    `;

    const TextP = styled.p`
      color: white;
      font-weight: 600;
      margin: 0;
      font-size: 90%;
      @media only screen and (max-width: 996px) {
        font-size: 80%;
      }
    `;

    const Logo = styled.img`
      height: 28px;
      margin: 0;
      padding: 0;
    `

// onMouseOver={this.lightenBackground} onMouseOut={this.darkenBackground}

    return (
      <ButtonDiv>
        <a href={link}>
          <FlexDiv >
            <Logo src={imgLink} />
          </FlexDiv>
        </a>
      </ButtonDiv>
    )
  }
}
