import React from 'react';
import {Link} from "react-router-dom";

import "./footer.scss";

function Footer() {
  return (
    <div>
      
      <footer className="newsletter mt-60">
        <div className="newsletter-container position-relative">
          <img
            src="https://images.unsplash.com/photo-1532413992378-f169ac26fff0?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="footer-image"
            className="footer-img img-fluid"
          />
          <div className="newsletter-info position-absolute">
            <h4 className="fw-semibold text-secondary mb-3">
              記得
              <br />
              訂閱以獲取更多資訊 ！
            </h4>
            <div className="input-container">
              <input
                type="text"
                placeholder="Your email address"
                className="email-input rounded-start py-2 px-3 border border-2 border-primary"
              />
              <Link className="subscribe-button">
              <button className="bg-primary rounded-end py-2 px-6 text-white border border-2 border-primary">
              Subscribe
                </button></Link>
            </div>
          </div>
        </div>

        <div className="footer-navbar bg-primary">
          <div className="footer_navbar-container container d-xl-flex justify-content-between">



            <div className="footer-info d-flex align-items-center justify-content-evenly gap-lg-3">
              <Link to="/">
                <img src="images/d’Perfumew.png" alt="footer_logo-image"  className="d-inline-block align-middle"/>
              </Link>
              <p className="text-white copyright m-0">© 2020. All Rights Reserved.</p>
            </div>



            <ul className="d-none d-xl-flex align-items-center justify-content-center footer_navbar-links">
              <li>
                <Link to="/products">
                <span className='text-white fs-5'>Product</span>
                </Link>
              </li>
              <li>
                <Link to="#">
                
                <span className='text-white fs-5'>Blog</span>
              
                
                </Link>
              </li>
              <li>
                <Link to="#">
                <span className='text-white fs-5'>Contact</span>
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </footer>
    </div>
  )
}

export default Footer
