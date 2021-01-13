import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import { ReactComponent as GoogleIcon } from "../../assets/icons/google.svg";


const Header = ({ currentUser, hidden}) => {  
  return (
    
        
    <div className="header">
      <Link to="/" className="logo-container">
        <img src="/images/logo.png" alt="" className="logo" />
      </Link>
      
      <div className='sub-header'> 
          <div className='no-options'>
            <div className='welcome'>
            {currentUser?(
                <div style={{display:'flex', alignItems:'center'}}>
                  <Link to='/dashboard' style={{color:'green', fontWeight:'bold'}}>{currentUser.name}
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
            <Link to="/" className="option">
              Home
            </Link>
            <Link to="/shop" className="option shop">
              Shop
            </Link>
            {currentUser ? (
              <a  href="/api/logout" className="option " >
                Signout
              </a>
            ) : (
              <>
                {" "}
                {
                  <a href={`/auth/google`} className='google' >
                  <div  className='btn-icon-container'>                    
                    <GoogleIcon className='icon'/>
                     <span className='button-text' >Sign in with Google</span> 
                                       
                   
                  </div>
                  </a>
                  
                }
              </>
            )}

            <CartIcon className="option" />
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
