import React from "react";
import "./category-item.scss";
import { withRouter } from "react-router-dom";

const CategoryItem = ({ title, imageUrl, linkUrl, history, match }) => {
  return (
    <div
      className="category-item"
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="content">
        <h1 className="title"> {title.toUpperCase()} </h1>
        <span className="subtitle">VIEW ALL</span>
      </div>
    </div>
  );
};

export default withRouter(CategoryItem);
