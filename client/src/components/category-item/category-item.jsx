import React from "react";
import { withRouter } from "react-router-dom";
import { CategoryItemContainer } from "./category-item.styled.jsx";

const CategoryItem = ({ title, imageUrl, linkUrl, history, match , x }) => {
   
  return (
    <CategoryItemContainer
    
    //  style={ doTranslate ? { transform: `translateX(${x}%)`} : { transform: 'translateX(0)'} }            
      onClick={() => history.push(`${match.url}${linkUrl}`)}
      style={{transform:`translateX(${x}%)`}}      
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
    </CategoryItemContainer>
  );
};

export default withRouter(CategoryItem);
