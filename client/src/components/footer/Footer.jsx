// Footer.js
import React from 'react';
import LDLogo from '../../assets/logo.png';
import './Footer.css';

function Footer() {
  const listItemStyle = {
    margin: '5px 0',
    color: 'white',
    textDecoration: 'none',
  };

  const listGroupStyle = {
    margin: '0 20px',
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="logo-container">
          <img src={LDLogo} alt="LD Logo" className="logo" />
          <div>
            <h1 className="footer-heading">Long Drive</h1>
            <h2 className="footer-subheading">Make Your Ride Sensual</h2>
            <p className="footer-contact-info">Abhay Sahani<br/>+91 9118660908<br/>abhay.cs.777@gmail.com</p>
          </div>
        </div>

        <div className="link-groups">
          <div className="link-group" style={listGroupStyle}>
            <h3>EXPLORE WITH US</h3>
            <ul>
              <li style={listItemStyle}>Super Cars</li>
              <li style={listItemStyle}>Car</li>
              <li style={listItemStyle}>Bikes</li>
              <li style={listItemStyle}>Scooty</li>
              <li style={listItemStyle}>Super Bikes</li>
            </ul>
          </div>

          <div className="link-group" style={listGroupStyle}>
            <h3>CONNECT WITH US</h3>
            <ul>
              <li style={listItemStyle}>Instagram</li>
              <li style={listItemStyle}>LinkedIn</li>
              <li style={listItemStyle}>Github</li>
              <li style={listItemStyle}>Facebook</li>
              <li style={listItemStyle}>Twitter</li>
            </ul>
          </div>

          <div className="link-group" style={listGroupStyle}>
            <h3>CUSTOMER SUPPORT</h3>
            <ul>
              <li style={listItemStyle}>Contact Us</li>
              <li style={listItemStyle}>Terms Of Use</li>
              <li style={listItemStyle}>Agreements</li>
              <li style={listItemStyle}>About Developer</li>
              <li style={listItemStyle}>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>

      <p className="copyright">&copy; 2024 LongDrive. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
