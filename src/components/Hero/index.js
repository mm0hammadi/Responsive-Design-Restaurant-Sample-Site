import React from "react";
import Navbar from "../navbar";
import {
  Herop,
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroBtn,
} from "./HeroElements";

const Hero = () => {
  return (
    <HeroContainer>
      <Navbar />
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
