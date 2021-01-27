import React from "react";
import {connect} from 'react-redux';
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../../redux/user/user.selectors";
import { Link } from 'react-router-dom';
import './user-dashboard.scss';


const UserDashboard = ({currentUser}) => {
    return ( 
        <div className='user-dashboard'>
            <h1>User Dashboard</h1>
            <h3>Welcome <span style={{color:'orange'}}>{currentUser.name}</span></h3>

            <div className="user-dashboard-content">
                <div className='user-dashboard-link'>
                    <Link to='/user/orders' >
                    Purchase history
                    </Link>
                    </div>
                    
                    {currentUser.isAdmin?
                    <div className='user-dashboard-link'>
                    <Link to='/admin'  >
                    Admin Dashboard
                    </Link>
                    </div>
                    : null}
               </div>
        </div>
     );
}


const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
  });

 
export default connect(mapStateToProps)(UserDashboard);
