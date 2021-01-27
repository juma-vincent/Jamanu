import React from 'react';
import GoogleOption from './google-signin-option';

const GoogleLogin = () => {
    return ( 
        <div 
        style={{display:'flex',height:'40vh', flexDirection:'column',alignItems:'center', margin:'20px auto'}}>
            <h1>To proceed, you must be logged in.</h1>
            < GoogleOption  />
        </div>
     );
}
 
export default GoogleLogin;