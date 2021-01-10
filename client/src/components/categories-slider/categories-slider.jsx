import React, { useState, useRef, useEffect } from 'react';
import CategoryItem from '../category-item/category-item';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCategories } from '../../redux/category-data/category-data.selectors';

// import Arrow from '../arrow/arrow';


import { SliderContainer} from './categories-slider.styles';


const CategoriesSlider = ({autoPlay, categoryData}) => {
    const [x, setX] = useState(0);

    const autoPlayRef = useRef();

    useEffect(()=>{
        autoPlayRef.current= goRight;
    })

    useEffect(()=>{
        const play = ()=>{
          autoPlayRef.current()
        }
        if(autoPlay){
          const interval = setInterval(play, autoPlay* 1000);
          return ()=> clearInterval(interval)
        }
        
      },[])

    const goLeft= ()=>{
        x === 0? setX(-100*(categoryData.length -1)) : setX(x+100);
        
        console.log(x)
    }

    const goRight= ()=>{
        (x === -100*(categoryData.length -1))? setX(0) : setX(x-100);
        console.log(x)
    }

    return (
        <SliderContainer>
            {categoryData.map(({id, ...otherProps })=> 
                    
                       
                    // <Slide key={imageUrl}
                    // x={x}
                    // imageUrl={imageUrl} 
                    // title={title} 
                    // subtitle={subtitle} 
                    // buttonText={buttonText}/>

                    <CategoryItem key={id} {...otherProps}/>
                )
            }
            {/* <Arrow direction='left' handleClick={goLeft}/>
            <Arrow direction='right' handleClick={goRight}/> */}
            
        </SliderContainer>
      );
}

const mapStateToProps = createStructuredSelector({
    categoryData: selectCategories,
  });
  
 
export default connect(mapStateToProps)(CategoriesSlider);