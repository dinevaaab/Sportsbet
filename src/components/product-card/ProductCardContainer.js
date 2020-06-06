import React from "react";
import ProductCard from "./ProductCard";
import { infoProductCards } from "./infoProductCards";

const ProductCardContainer = (props) => {
  const info = [...infoProductCards];
  let listOfCategory = info.map((i) => {
    return (
      <div className="flex-column">
        <ProductCard
          linkUrl={i.linkUrl}
          imageUrl={i.imageUrl}
          label={i.label}
        ></ProductCard>
      </div>
    );
  });

  return (
    // <ul className="">
    <div className="scrollCategory">
      <div className="row">
        {listOfCategory}
        </div>
   
      </div> 
      // </ul>
  );
};
export default ProductCardContainer;
