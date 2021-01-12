import React from "react";
import "./product-item.scss";
import CustomButton from "../custom-button/custom-button";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

const ProductItem = ({ item, addItem }) => {
  const { name, price, perunit, imageurl } = item;

  return (
    <div className="product-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageurl}) ` }}
      ></div>
      <div className="product-footer">
        <div className="name">{name}</div>
        <div className="price">
          KES {price}
          {perunit}
        </div>
      </div>
      <CustomButton inverted onClick={() => addItem(item)}>
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(ProductItem);
