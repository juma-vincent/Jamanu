import React from "react";
import "./checkout-page.scss";
import { connect } from "react-redux";
import { selectCartItems, selectTotal } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/checkout-item/checkout-item";
import { makePayment } from "../../redux/user/user.actions";
import FormInput from "../../components/form-input/form-input";
import {withRouter} from 'react-router-dom';
import {clearCart} from '../../redux/cart/cart.actions';
import { selectCurrentUser } from "../../redux/user/user.selectors";





class CheckoutPage extends React.Component {

  state = { 
    mobileNumber:'',
    buttonText: 'Pay with Mpesa'
   }
     

  handleChange = (event)=>{
    const { name, value} = event.target;
    this.setState({...this.state, [name]: value})
    

  }

  handleSubmit= (event)=>{
    event.preventDefault();
    const { makePayment,clearCart, cartItems, total, history } = this.props; 
    const {mobileNumber} = this.state;    
    // makePayment({mobileNumber,cartItems, total},history);
    // clearCart()
    // this.setState({...this.state, mobileNumber:''})    
    

  }

  render() { 
    const { cartItems, total, currentUser, history } = this.props;
    const { buttonText } = this.state;
    return ( 
      <div className="checkout-page">
      <div className="checkout-header">
        <div className="head">
          <span>Product</span>
        </div>
        <div className="head">
          <span>Description</span>
        </div>
        <div className="head">
          <span>Quantity</span>
        </div>
        <div className="head">
          <span>Price</span>
        </div>
        <div className="head">Remove</div>
      </div>

      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem._id} cartItem={cartItem} />
      ))}

      <div className="total">
        <span>Total: KES {total}</span>
      </div>
      <div>
        <FormInput label='Mobile Number in 07xxx or 011xxx'
        type='text' 
        handleChange={this.handleChange}
        value={this.state.mobileNumber}
        name='mobileNumber'
        style={{width:'250px'}}
        />
      </div>
      <div className={`${ buttonText === 'Sending' ? 'sending': null }`}>
        <button  id='mpesa-btn' onClick={(event)=>{
          if(!currentUser){history.push('/login')}
          this.setState({...this.state, buttonText: 'Sending'})
          this.handleSubmit(event);          
        }}>
          {buttonText} <span className='spin'></span>
        </button>
      </div>
    </div>
     );
  }
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectTotal,
  currentUser: selectCurrentUser
});

const mapDispatchToProps = (dispatch) => ({
  makePayment: ({mobileNumber,cartItems, total},history) =>
    dispatch(makePayment({mobileNumber,cartItems, total},history)),
  clearCart:()=>{
    dispatch(clearCart())
  }
});

 
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CheckoutPage))






