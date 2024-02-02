// Footer.js

import React from "react";
import styled from "styled-components";
import LD from  "../../assets/logo.png";


const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <LogoContainer>
          <img src= {LD}  />
        </LogoContainer>
        <ContactInfo>
          <h3>Contact Us</h3>
          <p>Email: abhay.cs.777@gmail.com</p>
          <p>Phone: +91 9118660908</p>
        </ContactInfo>
        <DeveloperInfo>
          <h3>Developed by</h3>
          <p>Abhay Sahani</p>
        </DeveloperInfo>
        <SocialMedia>
          <h3>Follow Us</h3>
          <SocialLinks>
            <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
              <img src="./images/facebook_icon.png" alt="Facebook" />
            </SocialIcon>
            <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
              <img src="./images/twitter_icon.png" alt="Twitter" />
            </SocialIcon>
            <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
              <img src="./images/instagram_icon.png" alt="Instagram" />
            </SocialIcon>
          </SocialLinks>
        </SocialMedia>
      </FooterContent>
      <CopyrightText>
        &copy; {new Date().getFullYear()} Developed by Abhay Sahani
      </CopyrightText>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: #482c50; /* Dark color */
  color: #bdc3c7; /* Light text color */
  padding: 20px 0;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: flex-start;
`;

const LogoContainer = styled.div`
  width: 250px; /* Adjust as needed */
  img {
    max-width: 100%;
  }
`;

const ContactInfo = styled.div`
  text-align: left;
  flex: 1;
  padding: 0 20px;

  h3 {
    color: #fff;
    margin-bottom: 10px;
  }

  p {
    margin: 5px 0;
    color: #bdc3c7;
  }
`;

const DeveloperInfo = styled.div`
  text-align: left;
  flex: 1;
  padding: 0 20px;

  h3,
  p {
    color: #fff;
    margin-bottom: 10px;
  }
`;

const SocialMedia = styled.div`
  text-align: left;
  flex: 1;
  padding: 0 20px;

  h3 {
    color: #fff;
    margin-bottom: 10px;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const SocialIcon = styled.a`
  img {
    max-width: 30px; /* Adjust as needed */
    border-radius: 50%;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

const CopyrightText = styled.div`
  text-align: center;
  margin-top: 20px;
  color: #bdc3c7;
`;

export default Footer;
