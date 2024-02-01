// Header.js

import React from "react";
import styled from "styled-components";


const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <img src="../images/logo.png" />
      </Logo>
      <NavItemContainer>
        <NavItem href="/">Home</NavItem>
        <NavItem href="/about">About</NavItem>
        <NavItem href="/cars">Cars</NavItem>
        <NavItem href="/bikes">Bikes</NavItem>
        <NavItem href="/contact">Contact</NavItem>
      </NavItemContainer>
      <UserSection>
        <EarnButton href="/Owner">Earn with Us</EarnButton>
      </UserSection>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  background-color: #2c3e50;
  color: #ecf0f1;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  img {
    max-width: 100px;
    height: auto;
  }
`;

const NavItemContainer = styled.nav`
  display: flex;
  gap: 10px;
  margin-left: 20px; /* Adjusted margin */
  justify-content: flex-start; /* Align to the start (left) */
`;

const NavItem = styled.a`
  color: #ecf0f1;
  text-decoration: none;
  font-size: 16px;

  &:hover {
    text-decoration: underline;
  }
`;

const UserSection = styled.div`
  display: flex;
  align-items: center;
`;

const EarnButton = styled.a`
  background-color: #e74c3c;
  color: #ecf0f1;
  padding: 10px 15px;
  text-decoration: none;
  border-radius: 5px;

  &:hover {
    background-color: #c0392b;
    text-decoration: none;
  }
`;

export default Header;
