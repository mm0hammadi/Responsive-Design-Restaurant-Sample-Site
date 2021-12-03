import styled from "styled-components";
import featurPic from "../../images/feature3.jpg";

export const FeatureConrainer = styled.div`
  height: 100vh;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${featurPic});
  max-height: 500px;

  //   background-position: 500px;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  h1 {
    font-size: clamp(3rem, 5vw, 5rem);
  }
  p {
    margin-bottom: 1rem;
    font-size: clamp(1rem, 3vw, 2rem);
  }
`;

export const FeatureButton = styled.div`
  font-size: 1.3rem;
  padding: 0.6rem 3rem;
  border: none;
  background: #ffc500;
  color: #000;
  tranition: 0.2s ease-out;
  cursor: pointer;
  &:hover {
    color: #000;
    background: #fff;
    tranition: 0.2s ease-out;
    cursor: pointer;
  }
`;
