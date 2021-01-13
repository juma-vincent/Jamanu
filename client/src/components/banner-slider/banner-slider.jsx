import React, { useState, useRef, useEffect } from 'react';
import Arrow from '../arrow/arrow';
import Slide from '../slide/slide';
import './banner-slider.scss';
import { ImageSliderContainer} from './banner-slider.styles';

const bannerData=[{title:'Jamanu Food Lover’s Market KENYA, the home of FRESH!', 
subtitle:'Get your delivery in minutes', 
buttonText:'SHOP WITH US',
link:'/shop',
imageUrl:'https://i.imgur.com/13TINcp.jpg'},
{title:'TRY OUR FRESH PRODUCTS', 
subtitle:'Quality Guaranteed.', 
buttonText:'',
link:'',
imageUrl:'https://i.imgur.com/XJRe1Bg.jpg'},

]



const BannerSlider = ({autoPlay}) => {
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
        x === 0? setX(-100*(bannerData.length -1)) : setX(x+100);
        
        console.log(x)
    }

    const goRight= ()=>{
        (x === -100*(bannerData.length -1))? setX(0) : setX(x-100);
        console.log(x)
    }

    return (
        <ImageSliderContainer>
            {bannerData.map(({imageUrl, title, subtitle, buttonText,link })=> 
                    
                       
                    <Slide key={imageUrl}
                    x={x}
                    imageUrl={imageUrl} 
                    title={title} 
                    subtitle={subtitle} 
                    buttonText={buttonText}
                    link={link}
                    />
                )
            }
            <Arrow direction='left' handleClick={goLeft}/>
            <Arrow direction='right' handleClick={goRight}/>
            
        </ImageSliderContainer>
      );
}
 
export default BannerSlider;