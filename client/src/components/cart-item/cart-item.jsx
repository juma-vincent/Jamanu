import React from "react";
import "./cart-item.scss";

const CartItem = ({ item }) => {
  const { name, price, quantity, imageurl } = item;
  return (
    <div className="cart-item">
      <img src={imageurl} alt="item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
