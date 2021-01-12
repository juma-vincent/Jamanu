import React from "react";
import "./homepage.scss";
import Features from "../../components/features/features";
import Categories from "../../components/categories/categories";
import CategoriesSlider from "../../components/categories-slider/categories-slider";




const Homepage = () => {
  return (
    <div className="homepage">      
     
      <Features />
      <CategoriesSlider autoPlay={5}/>
    </div>
  );
};

export default Homepage;
