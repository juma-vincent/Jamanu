import React from "react";
import './payment-pending.scss';



const PaymentPending = () => {
    return ( 
        <div>
            <h1>Payment Pending</h1>
            
            <span className='payment-pending-spinner-overlay'>
                <div id='payment-pending-spin'>
                </div>
            </span>
            
            <div style={{marginBottom:'20px'}}>
                <h3>This might take up to a minute, Kindly be patient as we process the payment. <br/>
                    If you don't receive a pop up, please try the payment again.
                </h3>
             </div>
            
            
        </div>
     );
}




 
export default PaymentPending;
