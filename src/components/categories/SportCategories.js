import React from "react";
import SportCagtegory from "./SportCategory";
import { infoCategoriesBar } from "./infoCategory";

const SportCategories = (props) => {
  const info = [...infoCategoriesBar];
  let listOfCategory = info.map((i) => {
    return (
      <div >
        <SportCagtegory
          itemLink={i.link}
          color={i.color}
          // viewBoxInfo={i.viewBoxFromInfo}
          image={i.imageSvg}
          label={i.label}
        ></SportCagtegory>
      </div>
    );
  });

  return (
    <ul className="scrollCategory" >
      <div className="row align-center">
        <div className="btn-group">
      {listOfCategory}</div></div>
    </ul>
  );
};
export default SportCategories;
