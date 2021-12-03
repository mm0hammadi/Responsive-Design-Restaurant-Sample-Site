import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background-color: #0d0909;
`;

export const FooterWrap = styled.div`
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
`;

export const SocialMedia = styled.div`
  max-width: 1300px;
  width: 100%;
`;
export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 16px auto 0 auto;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  font-size: 1.5rem;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`;

export const SocialIcons = styled.div`
  display: flex;
  width: 240px;
  align-items: center;
  justify-content: space-between;
`;
export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;
