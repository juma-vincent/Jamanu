
import React from 'react'
import leftArrow from '../../assets/left-arrow.svg'
import rightArrow from '../../assets/right-arrow.svg'
import {ArrowContainer} from './arrow.styled';

const Arrow = ({ direction='left', handleClick }) => (
  <ArrowContainer 
    onClick={handleClick}     
    className={`${direction === 'right'? 'right': 'left'}`}  
  >
     {direction ==='right' ? <img src={rightArrow}  /> : <img src={leftArrow}  />}
    
  </ArrowContainer>
)

export default Arrow