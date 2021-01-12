import React from "react";
import { Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { Route } from 'react-router-dom';
import UploadNewProduct from "../../components/admin/admin-upload-product/admin-upload-product";
import AdminUploadedProducts from "../../components/admin/admin-uploaded-products/admin-uploaded-products";


  
  const AdminDashboard = ({currentUser, match}) => {
    return ( 
      <div>
        
        <h2>Welcome Admin {currentUser.name}</h2>
        <Link to='/admin/new_product'>Add new product</Link>
        <Link to='/admin/products'>View upload history</Link>
        <Link to='/dashboard'>Back to User Dashboard</Link>

        <Route path={`${match.url}/products`} component={AdminUploadedProducts}/>
        <Route path={`${match.url}/new_product`} component={UploadNewProduct}/>
       
        
      </div>
     );
  }

  const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
  });

  
  export default connect(mapStateToProps)(AdminDashboard);




