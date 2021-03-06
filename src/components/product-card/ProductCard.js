import React from "react";

const ProductCard = (props) => {
  return (
    // <section>
      <a href={props.linkUrl} className="card-link">
        <div className="row card">
          <div className="card-popular col">
            <img className="card-img" src={props.imageUrl} alt="" />
          </div>
          <div className="card-title col">
            <h6 className="">{props.label}</h6>
          </div>
        </div>
      </a>
    // </section>
  );
};

export default ProductCard;
