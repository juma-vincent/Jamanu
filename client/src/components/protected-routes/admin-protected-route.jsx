// import React from 'react';
// import {Route, Redirect} from 'react-router-dom';
// import { connect } from "react-redux";
// import { selectCurrentUser } from '../../redux/user/user.selectors';
// import { createStructuredSelector } from 'reselect';

// const AdminProtectedRoute = ({ component: Component, currentUser, ...rest}) => {
//     console.log(currentUser)
//     return (        
//         <Route
//             {...rest}   
                  
//             render={(props) => currentUser  ? 
//             <Component {...props}/> :
//             <Redirect to="/"  />}
//           />
//      );
// }

// const mapStateToProps = createStructuredSelector({
//     currentUser: selectCurrentUser,
//   });
  
 
// export default AdminProtectedRoute;