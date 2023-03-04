import React from "react";
import Contact from "./Contact";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__simplify">
        <div className="footer-container">
          <p>Simplify how your team works today.</p>
          <a href="#" className="primary-btn">
            Get Started
          </a>
        </div>
      </div>
      <div className="footer__about">
        <div className="footer-container">
          <Contact />
          <ul className="footer__about-contact">
            <div>
              <li>Home</li>
              <li>Pricing</li>
              <li>Products</li>
              <li>About us</li>
            </div>
            <div>
              <li>Careers</li>
              <li>Community</li>
              <li>Privacy Policy</li>
            </div>
          </ul>
          <div className="footer__about-socials">
            <img src="./assets/images/icon-facebook.svg" alt="" />
            <img src="./assets/images/icon-youtube.svg" alt="" />
            <img src="./assets/images/icon-twitter.svg" alt="" />
            <img src="./assets/images/icon-pinterest.svg" alt="" />
            <img src="./assets/images/icon-instagram.svg" alt="" />
          </div>
          <div className="footer__about-logo">
            <img src="./assets/images/logo-white.svg" alt="" />
          </div>
          <span className="footer__about-copyright">
            Copyrights 2020. All rights Reserved
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
