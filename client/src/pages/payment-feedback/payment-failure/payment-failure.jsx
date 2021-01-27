import React from "react";
import {ReactComponent as Error } from  '../../../assets/icons/error.svg'



const PaymentFailure = () => {
    return ( 
        <div>
            <h1>Payment Failed</h1>
           <Error style={{fill:'red', height:'150px', width:'100px'}}/>
            
            <div style={{marginBottom:'20px'}}>
                <h3>There was an error processing your payment </h3>
             </div>
            
            
        </div>
     );
}




 
export default PaymentFailure;
