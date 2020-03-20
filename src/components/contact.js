import React from "react"
import { Row, Col } from "react-simple-flex-grid"
import "react-simple-flex-grid/lib/main.css"
import { rhythm } from "../utils/typography"
import styled from 'styled-components'

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
    backgroundColor: "#C28CC0",
    color: "white", //#636c72
    padding: "10px 35px",
    fontFamily: "Futura"
  }

  const SubmitButton = styled.button`
    border-radius: 10px;
    border: none;
    outline: none;
    text-align: center;
    background-color: #C28CC0;
    color: white; //#636c72
    padding: 10px 35px;
    font-family: Futura;
    :hover {
      background-color: #E2ACE0;
    }
  `;

  return (
    <div>
      <Row>
        <Col
          xs={{ offset: 0, span: 12 }}
          sm={{ offset: 3, span: 6 }}
          md={{ offset: 3, span: 6 }}
          lg={{ offset: 3, span: 6 }}
        >
          <h2>Contact</h2>
        </Col>
      </Row>
      <Row>
        <Col
          xs={{ offset: 0, span: 12 }}
          sm={{ offset: 3, span: 6 }}
          md={{ offset: 3, span: 6 }}
          lg={{ offset: 3, span: 6 }}
        >
          <p>A random email would brighten my day :)</p>
        </Col>
      </Row>
      <Row>
        <Col
          xs={{ offset: 0, span: 12 }}
          sm={{ offset: 3, span: 6 }}
          md={{ offset: 3, span: 6 }}
          lg={{ offset: 3, span: 6 }}
        >
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
            <SubmitButton style={buttonStyle}>Send</SubmitButton>
          </form>
        </Col>
      </Row>
    </div>
  )
}

export default Contact
