import React from "react";
import { FeatureConrainer, FeatureButton } from "./featureElements";

const Feature = () => {
  return (
    <FeatureConrainer>
      <h1>pizza of the day</h1>
      <p>Truffle alfredo sauce topped with 24 carat dold dust.</p>
      <FeatureButton>Order Now</FeatureButton>
    </FeatureConrainer>
  );
};

export default Feature;
