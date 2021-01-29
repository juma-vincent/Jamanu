import React from "react";
import "./products-preview.scss";
import ProductItem from "../product-item/product-item";
import { withRouter } from "react-router-dom";




const ProductsPreview = ({ title, items, history, match }) => {
  return (
    <div className="products-preview">
      <h2 className="title">{title.toUpperCase()}</h2>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <ProductItem key={item._id} item={item} />
          ))}
      </div>
      <h5 onClick={()=> history.push(`${match.path}/${title}`)}>View all {title}</h5>
    </div>
  );
};

export default withRouter(ProductsPreview);
