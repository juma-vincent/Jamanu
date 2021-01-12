import React from "react";
import {connect} from 'react-redux';
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { Link } from 'react-router-dom';



const UserDashboard = ({currentUser, history}) => {
    return ( 
        <div>
            <h1>User Dashboard</h1>
            <h3>Welcome {currentUser.name}</h3>
            
            {currentUser.isAdmin? <Link to='/admin'>Admin Dashboard</Link>: null}
        </div>
     );
}


const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
  });

 
export default connect(mapStateToProps)(UserDashboard);
