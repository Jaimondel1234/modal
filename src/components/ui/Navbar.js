import React from "react";
import { Link } from "react-router-dom";
import { NavbarList, NavbarElement, ButtonStyle } from "../../styles/core";
import styled from "styled-components";

const ButtonLogoutStyle = styled(ButtonStyle)`
  display: block;
  font-weight: bold;
  font-size: 40px;
  text-align: center;
  letter-spacing: 5px;
  line-height: 60px;
`;

/* 
   Navbar
 */

export const Navbar = () => {
  return (
    <>
      <NavbarList>
        <NavbarElement>
          <Link to='/home'>Home</Link>
        </NavbarElement>
        <NavbarElement>
          <Link to='/notes'>Notes</Link>
        </NavbarElement>
        <NavbarElement float='right'>
          <ButtonLogoutStyle m='5px' p='5px 10px'>
            Logout
          </ButtonLogoutStyle>
        </NavbarElement>
      </NavbarList>
    </>
  );
};
