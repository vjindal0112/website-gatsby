import React from "react"

const Contact = () => {
  return (
    <div>
      <form
        name="contact"
        netlify
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        method="post"
      >
        <p>
          <label>
            Name <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Email <input type="email" name="email" />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  )
}

export default Contact
