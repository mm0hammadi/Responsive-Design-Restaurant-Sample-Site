import React from "react";

import {
  SidebarContainer,
  SidebarRoute,
  SideBtnWrap,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElements";

const Sidebar = ({ toggle, isOpen }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to="/">Pizzas</SidebarLink>
        <SidebarLink to="/">Desserts</SidebarLink>
        <SidebarLink to="/">Full menu</SidebarLink>
        <SidebarLink to="/">Pastas</SidebarLink>
        <SidebarLink to="/">Hambergers</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to="/">Order Now</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
