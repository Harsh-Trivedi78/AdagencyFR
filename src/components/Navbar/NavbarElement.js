import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Logo component
const Logo = () => (
  <img
    src={require('file:///D:/megakit-bootstrap-main/frontend/favicon/android-chrome-192x192.png')}
    alt="Branding Boosters"
    style={{ width: '16px', height: '16px', marginRight: 5 }}
  />
);

// Icon component
const Icon = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #4d4dff;
  box-shadow: 0 0 10px rgba(77, 77, 255, 0.5);
  margin-right: 5px;
`;

// Nav component
export const Nav = styled.nav`
  background-color: #0e1b56;
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
  position: relative;
`;

// NavLink component
export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #4d4dff;
  }

  &.active {
    color: #4d4dff;
  }
`;

// Bars component
export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

// NavMenu component
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

// DropdownContainer component
export const DropdownContainer = styled.div`
  position: absolute;
  top: 90px;
  right: 12rem;
  background: #333;
  border-radius: 5px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  display: ${props => (props.$isOpen ? "block" : "none")};
  z-index: 100;
`;

// DropdownItem component
export const DropdownItem = styled(Link)`
  display: block;
  padding: 1rem;
  text-decoration: none;
  color: #fff;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

// Navbar component
const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useState(localStorage.getItem('loggedInUser'));
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('loggedInUser');
    if (user) {
      setLoggedInUser(user);
    } else {
      setLoggedInUser(null);
    }
  }, [loggedInUser]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    setLoggedInUser(null);
  };

  return (
    <Nav>
      <NavLink to="/home">
        <Logo />
        Branding Boosters
      </NavLink>
      <NavMenu>
        <NavLink to="/home">
          <Icon />
          Home
        </NavLink>
        <NavLink to="/about">
          <Icon />
          About
        </NavLink>
        <NavLink to="/contact">
          <Icon />
          Contact Us
        </NavLink>
        <NavLink to="/blogs">
          <Icon />
          Pricing
        </NavLink>
        {loggedInUser ? (
          <div>
            <NavLink to="/profile">
              <FontAwesomeIcon icon={faUser} style={{ marginRight: 5 }} />
              Welcome, {loggedInUser}!
            </NavLink>
            <NavLink to="/login" onClick={handleLogout}>
              Logout
            </NavLink>
          </div>
        ) : (
          <NavLink to="" onClick={toggleDropdown}>
            Sign Up
            <span className="caret">▼</span>
          </NavLink>
        )}
        <DropdownContainer $isOpen={isOpen}>
          {loggedInUser ? (
            <DropdownItem to="/login" onClick={handleLogout}>
              Logout
            </DropdownItem>
          ) : (
            <>
              <DropdownItem to="/sign-up">
                Sign Up
              </DropdownItem>
              <DropdownItem to="/login">
                Login
              </DropdownItem>
            </>
          )}
        </DropdownContainer>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;