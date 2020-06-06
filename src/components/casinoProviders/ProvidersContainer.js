import React from "react";
import { infoProviders } from "./infoProviders";
import CasinoProvider from "./CasinoProvider";

const ProvidersContainer = (props) => {
  const info = [...infoProviders];
  let listOfCategory = info.map((i) => {
    return (
      <div >
        <CasinoProvider
          linkUrl={i.linkUrl}
          imageUrl={i.imageUrl}
         
        ></CasinoProvider>
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
export default ProvidersContainer;
