import React from "react";
import "./checkout-item.scss";
import { ReactComponent as UpArrow } from "../../assets/icons/up-arrow.svg";
import { ReactComponent as DownArrow } from "../../assets/icons/down-arrow.svg";
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart.actions";
import { connect } from "react-redux";

const CheckoutItem = ({ cartItem, clearItemFromCart, addItem, removeItem }) => {
  const { name, imageurl, price, quantity, unit } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageurl} alt="item" />
      </div>
      <div className="name">{name}</div>
      <div className="quantity-container">
        <div className="quantity">
          <UpArrow className="up-arrow" onClick={() => addItem(cartItem)} />
          {quantity}

          <DownArrow
            className="down-arrow"
            onClick={() => removeItem(cartItem)}
          />
        </div>
        <span className="unit">{unit}</span>
      </div>
      <div className="price">{price}</div>
      <div
        className="remove-button"
        onClick={() => clearItemFromCart(cartItem)}
      >
        &#10006;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
