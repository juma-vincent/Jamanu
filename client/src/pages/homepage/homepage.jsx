import React from "react";
import "./homepage.scss";

import HomeDirectory from '../../components/home-directory/home-directory'
import Features from "../../components/features/features";

const Homepage = () => {
  return (
    <div className="homepage">
      <HomeDirectory />
      <Features />
    </div>
  );
};

export default Homepage;
