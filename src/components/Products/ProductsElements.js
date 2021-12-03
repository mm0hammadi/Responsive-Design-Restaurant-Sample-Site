import styled from "styled-components";

export const ProductsContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 5rem calc((100-vw-1300px) / 2);
  background: #150f0f;
  color: #fff;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const ProductCart = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
  display: flex;
  flex-direction: column;
`;
export const ProductImg = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: 8px 8px #fdc500;
  border-radius: 5px;
  cursor: pointer;
`;

export const ProductHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  padding-top: 20px;
`;

export const ProductTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
  text-align: center;
`;

export const ProductInfo = styled.div`
  diplay: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

export const ProductDesc = styled.p`
  margin-bottom: 1rem;
  text-align: center;
`;

export const ProductPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
  text-align: center;
`;

export const ProductButton = styled.button`
  margin-bottom: 1rem;
  font-size: 1rem;
  border: none;
  padding: 1rem 1rem;
  background: #e31837;
  color: #fff;
  transition: 0.2s ease-in-out;
  &:hover {
    background: #ffc500;
    color: #010606;
    transition: 0.2s ease-in-out;
    cursor: pointer;
    color: #000;
  }
`;
