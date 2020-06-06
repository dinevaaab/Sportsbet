import React from "react";

const CasinoProvider = (props) => {
  return (
    <div>
      <li className="d-flex ">
        <a href={props.linkUrl} className="">
          <div className="cardProviders">
            <img
              src={props.imageUrl}
              alt=""
               sizes="82px"
            />
          </div>
        </a>
      </li>
    </div>
  );
};

export default CasinoProvider;
