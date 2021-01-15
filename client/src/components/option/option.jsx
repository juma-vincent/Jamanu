import React from 'react';
import './option.scss';

const Option = ({text}) => {
    return (         
             <span className="option">
              {text}
              </span>
        
     );
}
 
export default Option;