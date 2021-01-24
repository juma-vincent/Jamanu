import React from "react";
import { Link } from 'react-router-dom';



const PaymentSuccess = () => {
    return ( 
        <div>
            <h1>Payment Successful</h1>
            
            <div style={{marginBottom:'20px'}}>
                <Link to='/user/orders' style={{padding:'10px', marginBottom:'20px', backgroundColor:'whitesmoke'}}>
                Go to Purchase history
                </Link>
             </div>
            
            
        </div>
     );
}




 
export default PaymentSuccess;
