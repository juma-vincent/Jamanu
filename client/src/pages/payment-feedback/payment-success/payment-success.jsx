import React from "react";
import { Link } from 'react-router-dom';
import { clearCart } from "../../../redux/cart/cart.actions";
import {connect} from 'react-redux';
import { ReactComponent as CheckMark } from '../../../assets/icons/checkmark.svg';
import './payment-success.scss';

class PaymentSuccess extends React.Component {
    componentDidMount(){
        this.props.clearCart()
    }
    
    render() { 
        return ( 
            <div>
            <h1>Payment Successful</h1>
            <div>
                <CheckMark style={{fill:'green',marginBottom:'20px', height:'150px', width:'100px'}}/>
            </div>
            
            <div>
                <Link to='/user/orders' >
                  <button id='btn-success-page'>See Purchase history</button>
                </Link>
             </div>
            
            
        </div>
         );
    }
}
 
const mapDispatchToProps = (dispatch) => ({    
    clearCart:()=>{
      dispatch(clearCart())
    }
  });

export default connect(null, mapDispatchToProps)(PaymentSuccess);



