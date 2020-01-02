import React, { Component } from "react"

export default class projectEntry extends Component {
  render() {
    const { title, description, link } = this.props
    return (
      <>
        <div>{title}</div>
        <div>{description}</div>
      </>
    )
  }
}
