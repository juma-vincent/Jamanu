import React,{useState} from "react";
import "./product-item.scss";
import CustomButton from "../custom-button/custom-button";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import checkmark from '../../assets/icons/checkmark.svg';



const ProductItem = ({ item, addItem }) => {
  const { name, price, unitType, imageurl } = item;
  const [btnText, setBtnText] = useState('Add to cart')

  return (
    <div className="product-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageurl}) ` }}
      ></div>
      <div className="product-footer">
        <div className="name">{name}</div>
        <div className="price">
          KES {price}  {unitType}
        </div>
      </div>
      <CustomButton style={ btnText==='Added to cart' ? 
       { backgroundColor:'rgb(39, 209, 39)', border: 'rgb(39, 209, 39)'} : 
       null} inverted onClick={() => {
        addItem(item) ;
        setBtnText('Added to cart')
        }}>
        <span id='btn-text'>{btnText}</span>  <img src={checkmark} alt="" style={ btnText==='Added to cart' ? {opacity: '1'}: {opacity:'0'}}/>
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(ProductItem);
