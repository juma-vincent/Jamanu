import React from "react";
import "./products-preview.scss";
import ProductItem from "../product-item/product-item";




const ProductsPreview = ({ title, items }) => {
  return (
    <div className="products-preview">
      <h2 className="title">{title.toUpperCase()}</h2>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <ProductItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default ProductsPreview;
