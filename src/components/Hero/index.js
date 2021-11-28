import React, { useState } from "react";
import Navbar from "../navbar";
import Sidebar from "../Sidebar";
import {
  Herop,
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroBtn,
} from "./HeroElements";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <HeroContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItems>
          <HeroH1>Greatest Pizza Ever</HeroH1>
          <Herop>Ready in 60 seconds</Herop>
          <HeroBtn>Place Order</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
