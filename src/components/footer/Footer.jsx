import React from 'react';
import {Link} from "react-router-dom";

function Footer() {
  return (
    <div>
      
      <footer className="newsletter mt-60">
        <div className="newsletter-container">
          <img
            src="https://images.unsplash.com/photo-1532413992378-f169ac26fff0?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="footer-image"
            className="footer-img"
          />
          <div className="newsletter-info">
            <h4>
              記得
              <br />
              訂閱以獲取更多資訊！
            </h4>
            <div className="input-container">
              <input
                type="text"
                placeholder="Your email address"
                className="email-input"
              />
              <Link className="subscribe-button">Subscribe</Link>
            </div>
          </div>
        </div>

        <div className="footer-navbar">
          <div className="footer_navbar-container container">
            <div className="footer_logo-container">
              <a href="/index.html">
                <img src="images/d’Perfumew.png" alt="footer_logo-image" />
              </a>
              <p>© 2020. All Rights Reserved.</p>
            </div>
            <ul className="footer_navbar-links fz-20">
              <li>
                <Link to="/products.html">Product</Link>
              </li>
              <li>
                <Link to="#">Blog</Link>
              </li>
              <li>
                <Link to="#">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
