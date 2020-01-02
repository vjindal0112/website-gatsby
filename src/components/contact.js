import React from "react"

const Contact = () => {
  return (
    <div>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        enctype="application/x-www-form-urlencoded"
        action= "./formSubmission"
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
          <button>Send</button>
        </p>
      </form>
    </div>
  )
}

export default Contact
