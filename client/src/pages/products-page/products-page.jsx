import React,{useEffect, useState} from "react";
import "./products-page.scss";
import { connect } from "react-redux";
import ProductItem from "../../components/product-item/product-item";
import { selectEachProduct } from "../../redux/shop/shop.selectors";


const ProductsPage = ({ categoryItems}) => {
  const { title, items } = categoryItems; 
  
  return (    
   
      <div className="products-page">
        <h2 className="title"> {title.toUpperCase()}</h2>
          <div className="items">
          {items.map((item) => (
          <ProductItem
          className="product-item"
          key={item.id}
          item={item}
          />
          ))}
        </div>
     </div>
    
  );
};

const mapStateToProps = (state, ownProps) => ({
  categoryItems: selectEachProduct(ownProps.match.params.productId)(
    state
  ),
});



export default connect(mapStateToProps)(ProductsPage);
