import React from "react";
import Promotion from "./Promotion";
import { promoCategory } from "./promoCategory";

const PromotionsContainer = (props) => {
  const info = [...promoCategory];
  let listOfCategory = info.map((i) => {
    return (
      <div className="flex-column">
        <Promotion
          itemLink={i.link}
          color={i.color}
          imageSvg1={i.imageSvg1}
          imageSvg2={i.imageSvg2}
          imageUrl={i.imageUrl}
          title={i.title}
          description={i.description}
        ></Promotion>
      </div>
    );
  });

  return (
    <div className="scrollCategory " >
    
    <div className="flex-row">
      {listOfCategory}
      </div>
    </div>
  );
};
export default PromotionsContainer;
