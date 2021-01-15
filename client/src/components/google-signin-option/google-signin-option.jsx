import React from 'react';
import { ReactComponent as GoogleIcon } from "../../assets/icons/google.svg";
import './google-signin-option.scss';

const GoogleOption = () => {
    return (         
            <a href={`/auth/google`} className='google' >
                  <div  className='google-icon-and-text-container'>                    
                    <div id='google-icon-wrapper'>  <GoogleIcon className='icon'/>  </div>
                     <div id='google-text' >Sign in with Google</div>                                        
                   
                  </div>
            </a>
        
     );
}
 
export default GoogleOption;