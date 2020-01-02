import React from "react"
import { Row, Col } from "react-simple-flex-grid"
import "react-simple-flex-grid/lib/main.css"
import { rhythm } from "../utils/typography"

const Contact = () => {
  var inputStyle = {
    width: "100%",
    borderRadius: "10px",
    outline: "none",
    border: "none",
    padding: "10px 14px",
    resize: "none",
  }

  var buttonStyle = {
    borderRadius: "10px",
    border: "none",
    outline: "none",
    textAlign: "center",
    backgroundColor: "white",
    color: "#636c72",
    padding: "10px 14px",
  }

  return (
    <div>
      <Row>
        <Col span={6} offset={3}>
          <h2>Contact</h2>
        </Col>
      </Row>
      <Row>
        <Col span={6} offset={3}>
          <p>A random email would brighten my day :)</p>
        </Col>
      </Row>
      <Row>
        <Col span={6} offset={3}>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            enctype="application/x-www-form-urlencoded"
            action="./formSubmission"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p>
              <label>
                <input
                  style={inputStyle}
                  type="email"
                  name="email"
                  placeholder="Your Email"
                />
              </label>
            </p>
            <p>
              <label>
                <textarea
                  style={{
                    ...inputStyle,
                    marginBottom: "0px",
                  }}
                  name="message"
                  rows="10"
                  placeholder="Say hello!"
                />
              </label>
            </p>
            <p>
              <button style={buttonStyle}>Send</button>
            </p>
          </form>
        </Col>
      </Row>
    </div>
  )
}

export default Contact
