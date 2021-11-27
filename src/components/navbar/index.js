//  type rfce and press tab
import React from "react";
import { Nav, NavIcon, NavLink, Bars } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">Pizza</NavLink>
        <NavIcon>
          <p>Menu</p>
          <Bars/>
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
