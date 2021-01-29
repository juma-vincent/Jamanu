import React, { Component} from "react";
import "./App.css";
import Homepage from "./pages/homepage/homepage";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/header/header";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors";
import CheckoutPage from "./pages/checkout-page/checkout-page";
import Footer from "./components/footer/footer";
import ShopPage from "./pages/shop-page/shop-page"
import { fetchUser } from "./redux/user/user.actions";

import UserDashboard from "./components//user/user-dashboard/user-dashboard";
import Spinner from "./components/spinner/spinner";
import AdminDashboard from "./pages/admin-dashboard/admin-dashboard";
import UserOrders from "./components/user/user-orders/user-orders";
import PaymentPending from "./pages/payment-feedback/payment-pending/payment-pending";
import PaymentSuccess from "./pages/payment-feedback/payment-success/payment-success";
import PaymentFailure from "./pages/payment-feedback/payment-failure/payment-failure";
import UserOrderDetail from "./components/user/user-order-detail/user-order-detail";
import AdminOrders from "./components/admin/admin-orders/admin-orders";
import AdminOrderDetail from "./components/admin/admin-order-detail/admin-order-detail";
import AdminUploadedProducts from "./components/admin/admin-uploaded-products/admin-uploaded-products";
import UploadNewProduct from './components/admin/admin-upload-product/admin-upload-product';
import GoogleLogin from "./components/google-signin-option/login";
import { fetchAllProducts} from "./redux/shop/shop.actions";





class App extends Component {

  state = {
    isLoaded: false,
  }
  
   async componentDidMount() {
     await this.props.fetchUser();
     this.setState({isLoaded: true})
     this.props.fetchAllProducts();
    
  }

  render() {
    const { currentUser } = this.props;   
     


    return (

      <div>
            {
              this.state.isLoaded?
               (
                  <div className='App'>
                  <Header />
                    
                  <Switch>
                   
                      <Route exact path="/" component={Homepage} />
                      <Route path="/shop" component={ShopPage} />
                      <Route exact path="/checkout" component={CheckoutPage} />
                      <Route exact path="/payment_pending" component={PaymentPending} />
                      <Route exact path="/payment_success" component={PaymentSuccess} /> 
                      <Route exact path="/payment_failure" component={PaymentFailure} /> 
                      <Route exact path="/login" component={GoogleLogin} /> 
                                          
                      <Route                      
                      path="/admin"
                      render={() => (currentUser?                         
                         <>
                           <Route exact path="/admin" component={AdminDashboard} />
                           <Route exact path="/admin/orders" component={AdminOrders} />
                           <Route path='/admin/products' component={AdminUploadedProducts}/>
                           <Route path='/admin/new_product' component={UploadNewProduct}/>
                           <Route exact path="/admin/orders/:orderId" component={AdminOrderDetail} />  
                         </>
                          : 
                          <Redirect to="/"  />)}
                      />

                      <Route
                      exact
                      path="/dashboard"
                      render={(props) => (currentUser ? <UserDashboard {...props}/> : <Redirect to="/"  />)}
                      />
                      <Route                      
                          path="/user/"
                          render={() => (currentUser ?
                            <>
                            <Route exact path="/user/orders" component={UserOrders} />
                            <Route exact path="/user/orders/:orderId" component={UserOrderDetail} />  
                            </>
                              : 
                          <Redirect to="/"  />)}
                      />
                      
                   

                  </Switch>
                  <Footer />
                </div>

              ) :
              
                 <Spinner/>
            }
                    
            


        
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchUser: () => dispatch(fetchUser()),
  fetchAllProducts: () => dispatch(fetchAllProducts()),
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);






















// import React from "react";
// import './App.css';
// import Header from './components/Header';
// import { Route } from 'react-router-dom';
// import {connect} from 'react-redux';
// import * as actions from './actions';
// import UserDashboard from "./components/UserDashboard";
// import AdminDashboard from "./components/AdminDashboard";




// class App extends React.Component {
  

//   componentDidMount() {     
//     this.props.fetchUser();         
    
//   }       
        
    

//   render() {         
    
//     return (
//       <div className="App"  >
  
//         {/* <Route exact path='/'component={Home} /> */}
//         <Route exact path='/dashboard'component={UserDashboard} />
//         <Route exact path='/admin'component={AdminDashboard} />
        
//           <div className="" style={{height:'90px', backgroundColor:'#DAF7A6 ',
//           position:'relative'
//           }}>
//           <Header  user={this.props.auth}/>             
            
            
          
//           </div>
    
    

//       </div>
//     );
//   }
//     }

//     const mapStateToProps = ({auth})=>{
//       return {auth};
//     }
//     export default connect(mapStateToProps, actions)(App);
  



