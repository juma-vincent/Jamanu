import React from "react";
import "./homepage.scss";
import Features from "../../components/features/features";
import Categories from "../../components/categories/categories";
import CategoriesSlider from "../../components/categories-slider/categories-slider";
import BannerSlider from "../../components/banner-slider/banner-slider";
import About from "../../components/about/about";




const Homepage = () => {
  return (
    <div className="homepage"> 
    <BannerSlider autoPlay={10}/>
    <About/>

     <CategoriesSlider autoPlay={15}/>
      <Features />
      
    </div>
  );
};

export default Homepage;
