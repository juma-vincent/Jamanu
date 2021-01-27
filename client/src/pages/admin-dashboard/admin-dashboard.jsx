import React from "react";
import { Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import './admin-dashboard.scss';



  
  const AdminDashboard = ({currentUser}) => {
    return ( 
  <div className='admin-dashboard'>
    
      <h2>Welcome Admin <span style={{color:'orange'}}>{currentUser.name}</span> 
        <span> you have <span style={{color:'orange'}}>{currentUser.uploadedProducts}</span> uploads</span>
      </h2>
      <div className='admin-dashboard-content'>
      <Link to='/admin/new_product' className='admin-dashboard-link'>Add new product</Link>
      <Link to='/admin/products' className='admin-dashboard-link'>View upload history</Link>
      <Link to='/dashboard' className='admin-dashboard-link'>Back to User Dashboard</Link>
      <Link to='/admin/orders' className='admin-dashboard-link'>View all orders</Link>
      </div>
    
    
  </div>
     );
  }

  const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
  });

  
  export default connect(mapStateToProps)(AdminDashboard);




