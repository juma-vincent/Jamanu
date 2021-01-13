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
    
  <h2>Welcome Admin <span style={{color:'orange'}}>{currentUser.name}</span></h2>
  <div style={{display:'flex',justifyContent:"space-around",width:'50%',margin:'auto',padding:'20px'}}>
  <Link to='/admin/new_product' style={{backgroundColor:'whitesmoke',padding:'10px'}}>Add new product</Link><br/>
  <Link to='/admin/products' style={{backgroundColor:'whitesmoke',padding:'10px'}}>View upload history</Link><br/>
  <Link to='/dashboard' style={{backgroundColor:'whitesmoke',padding:'10px'}}>Back to User Dashboard</Link>
  </div>

  <Route path={`${match.url}/products`} component={AdminUploadedProducts}/>
  <Route path={`${match.url}/new_product`} component={UploadNewProduct}/>
    
    
  </div>
     );
  }

  const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
  });

  
  export default connect(mapStateToProps)(AdminDashboard);




