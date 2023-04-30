import React from 'react'
import './Contact.css'
const Contact = () => {
  

  return (
    <>
        <section id="contact" className="contact sec-pad dynamicBg">
        <div className="main-container_contact">
          <h2 className="heading heading-sec heading-sec__mb-med">
            <span className="heading-sec__main">CONTACT</span>
            <span class="about__title-line"></span>
            <span className="heading-sec__sub">
              Feel free to Contact me by submitting the form below and I will get
              back to you as soon as possible
            </span>
          </h2>
          <div className="contact-form">
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" required placeholder='Enter your name'/>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required placeholder='Enter your E-mail' />
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required defaultValue={" "} placeholder='Write your message'/>
          <button type="submit" >Submit</button>
        </form>
      </div>
        </div>
      </section>
    </>
  )
}

export default Contact