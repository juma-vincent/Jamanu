import React, { Component } from "react";
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


class App extends Component {
  componentDidMount() {
    fetchUser()
  }

  render() {
    const { currentUser } = this.props;
    console.log(currentUser)
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          {/* <Route
            exact
            path="/signin"
            render={() => (currentUser ? <Redirect to="/" /> : <SigninPage />)}
          />
          <Route
            exact
            path="/signup"
            render={() => (currentUser ? <Redirect to="/" /> : <SignupPage />)}
          /> */}
        </Switch>
        <Footer />
      </div>
    );
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   setCurrentUser: (user) => dispatch(setCurrentUser(user)),
// });

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(App);






















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
  



