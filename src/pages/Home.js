import React from "react";
import PromoContainer from "../components/promo-banner/PromoContainer";
import SportCategories from "../components/categories/SportCategories";
import ProductCardContainer from "../components/product-card/ProductCardContainer";
import PromotionsContainer from "../components/promotions/PromotionsContainer";
import ProvidersContainer from "../components/casinoProviders/ProvidersContainer";

class Home extends React.Component {
  render() {
    return (
      <div className="backgroundPage" >
       
        <div className="row">
          <div className="col">
            <PromoContainer />
          </div>
        </div>
        <div className="row">
          <h3>Sports categories</h3>
        </div>
        <div>
          <SportCategories />
        </div>
        <div className="row">
          <h3>Popular</h3>
          <ProductCardContainer />
        </div>
        <div>
          <h3>Exciting promotions start here</h3>
          <PromotionsContainer />
        </div>
        <div>
          <h3>Game Providers</h3>
          <ProvidersContainer />
        </div>
      </div>
    );
  }
}

export default Home;
