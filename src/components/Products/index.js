import React from "react";
import {
  ProductsContainer,
  ProductWrapper,
  ProductHeading,
  ProductTitle,
  ProductDesc,
  ProductImg,
  ProductPrice,
  ProductButton,
  ProductCart,
} from "./ProductsElements";
const Products = ({ heading, data }) => {
  return (
    <ProductsContainer>
      <ProductHeading>{heading}</ProductHeading>
      <ProductWrapper>
        {data.map((product, index) => {
          return (
            <ProductCart key={index}>
              <ProductImg src={product.img} alt={product.alt} />
              <ProductTitle>{product.name}</ProductTitle>
              <ProductDesc>{product.desc}</ProductDesc>
              <ProductPrice>{product.price}</ProductPrice>
              <ProductButton>{product.button}</ProductButton>
            </ProductCart>
          );
        })}
      </ProductWrapper>
    </ProductsContainer>
  );
};

export default Products;
