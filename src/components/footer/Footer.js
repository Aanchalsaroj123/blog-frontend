import React from 'react'
import "./footer.css" 

export default function Footer() {
  return (
    <footer className="footer">
    <div className="footer-container">
      <div className="footer-left">
        <h2>Star-Blogs</h2>
        <p>Share the brightest ideas, insights, and stories. Step into a world of inspiration and knowledge.</p>
      </div>

      <div className="footer-middle">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>

      <div className="footer-right">
        <h3>Contact Info</h3>
        <p>Email: Star@gmail.com</p>
        <p>Phone: +91 45612-78908</p>
        
        <h3>Follow Us</h3>
      <div className="Social-footer">
        <i className="sidebarIcon fab fa-facebook-square"></i>
        <i className="sidebarIcon fab fa-instagram-square"></i>
        <i className="sidebarIcon fab fa-pinterest-square"></i>
        <i className="sidebarIcon fab fa-twitter-square"></i>
      </div>
     
      </div>
    </div>
  </footer>
  )
}


