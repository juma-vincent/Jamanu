import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import GoogleOption from "../google-signin-option/google-signin-option";
import Option from "../option/option";



const Header = ({ currentUser, hidden}) => {  
  return (
    
        
    <div className="header">
      <Link to="/" className="logo-container">
        <img src="/images/jamanu-logo.jpg" alt="" className="logo" />         
      </Link>
      
      <div className='sub-header'> 
          <div className='no-options'>
            <div className='welcome'>
            {currentUser?(
                <div className='header-profile-container' style={{display:'flex', alignItems:'center'}}>
                  <Link to='/dashboard' id='header-profile-link'>{currentUser.name}
                    <img width='30'height='30' src={currentUser.imageurl}
                    style={{borderRadius:'50%', marginTop:'5px',marginBottom:'-9px', marginLeft:'5px'  }} alt=""/>
                  </Link>
                </div>
              )
              :null
              }
            </div>
              
          </div>

          <div className="options">
            <Link to="/" >
             <Option text='Home'/>              
            </Link>
            <Link to="/shop">
            <Option text='Shop'/> 
            </Link>
            {currentUser ? (
              <a  href="/api/logout" >
               <Option text='Signout'/> 
              </a>
            ) : (
              <>               
                
                  <GoogleOption text='Sign in with Google'/>                 
                
              </>
            )}

            <CartIcon className="option cart-icon" />
          </div>
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
    
  );
};

// const mapDispatchToProps = (dispatch) => ({
//   signoutUser: () => dispatch(signoutUser),
// });

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
