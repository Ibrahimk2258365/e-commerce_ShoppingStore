import React from "react";
import "./Style.css"; 
import Head from "../Header/Head";
const Footer = () => {
  return (
    
    <footer className="footer">
      <Head />
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-col">
            
            <h3 className="footer-heading">Mall<span>Bonze</span></h3>
            <p className="footer-description">
  <strong>Bonanza</strong> is derived from the Urdu word "bonanza" which means a source of great wealth or abundance. At Bonanza, we believe in the power of dressing well and feeling confident. Our shop was founded by Maaz with a mission to provide high-quality clothing that combines style and comfort.
</p>
            <div className="footer-icons">
              <a href="#" className="footer-icon">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#" className="footer-icon">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#" className="footer-icon">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="#" className="footer-icon">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#" className="footer-icon">
                <i className="fa fa-youtube"></i>
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Message From the CEO</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h3 className="footer-heading">Contact Info</h3>
            <ul className="footer-contact">
              <li><i className="fa fa-map-marker"></i>Islamabad, Pakistan</li>
              <li><i className="fa fa-phone"></i>+92 3365613777</li>
              <li><i className="fa fa-envelope"></i>
              <a href="mailto:sagar00001.co@gmail.com" style={{color: "black"}}>malbus@gmail.com</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
  <p className="footer-text">
    &copy; © 2012 - 2023 [Bonanza] All Rights Reserved. | Designed by [Mz.designer]
  </p>
</div>
    </footer>
  );
};

export default Footer;

