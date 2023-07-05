import React from 'react'
import "./contact.css"
export default function Contact() {
  return (
<>
    <div className="sidebar">
    <div className="sidebarItem">
      <span className="sidebarTitle">CONTACT US</span>
      <p>
        If you have any questions, suggestions, or feedback, we'd love to hear from you! <br /> Please feel free to get in touch with us using the contact details below:
      </p>
    </div>
    <div>
      <div className="contact-details">
        <h3>Email:</h3>
        <p>contact@websitename.com</p>
      </div>

      <div className="contact-details">
        <h3>Phone:</h3>
        <p>+91 3681659326</p>
      </div>

      <div className="contact-details">
        <h3>Address:</h3>
        <p>123 , Delhi, India, 110034</p>
      </div>
    </div>
    <div className="sidebarItem">
      <span className="sidebarTitle">FOLLOW US</span>
      <div className="sidebarSocial">
        <i className="sidebarIcon fab fa-facebook-square"></i>
        <i className="sidebarIcon fab fa-instagram-square"></i>
        <i className="sidebarIcon fab fa-pinterest-square"></i>
        <i className="sidebarIcon fab fa-twitter-square"></i>
      </div>
    </div>
  </div>

    </>
  )
}
