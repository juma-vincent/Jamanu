import React from "react";
import {connect} from 'react-redux';
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../../redux/user/user.selectors";
import { Link } from 'react-router-dom';



const UserDashboard = ({currentUser}) => {
    return ( 
        <div>
            <h1>User Dashboard</h1>
            <h3>Welcome <span style={{color:'orange'}}>{currentUser.name}</span></h3>
            <div style={{marginBottom:'20px'}}>
                <Link to='/user/orders' style={{padding:'10px', marginBottom:'20px', backgroundColor:'whitesmoke'}}>
                Purchase history
                </Link>
             </div>
            
            {currentUser.isAdmin? 
            <div style={{ padding:'20px', width: '30%', margin:'5px auto', display:'flex', 
            justifyContent:'space-around'}}>
            <Link to='/admin/' style={{padding:'10px', marginBottom:'20px', backgroundColor:'whitesmoke'}}>
            Admin Dashboard
            </Link>            
            </div>
            : null}
        </div>
     );
}


const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
  });

 
export default connect(mapStateToProps)(UserDashboard);
