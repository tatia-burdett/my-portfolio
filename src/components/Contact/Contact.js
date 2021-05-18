import React from 'react'

class Contact extends React.Component {
  render() {
    return (
      <section className='contact' id='contact'>
        <h3>Contact</h3>
        <div className='contact-section'>
          <form action="https://formspree.io/f/xzbkaken " method="POST">
            <label htmlFor="user-name">Name:</label>
            <input id="user-name" type="text" name="name" placeholder="Enter your name" />

            <label htmlFor="user-email">Email:</label>
            <input id="user-email" type="text" name="email" placeholder="Enter your email" />

            <label htmlFor="user-message">Message:</label>
            <textarea id="user-message" name="message" placeholder="Enter a short message" />

            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    )
  }
}

export default Contact