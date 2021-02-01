import React from "react";
import "./Home.scss";
import primeLogo from "./prime_now.png";
import ProductContainer from "../ProductContainer/ProductContainer";


const Home = () => {
  return (
    <div className="home">
      <div className="home__banner" />
      <div className="home__bannerBottom" />
      <img className="home__bannerLogo" src={primeLogo} alt="" />
      <ProductContainer />

    </div>
  );
};

export default Home;
