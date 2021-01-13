import styled from 'styled-components'

export const ImageWrapper = styled.div` 
    min-width: 100vw;
    height: 70vh;
    transition: .2.5s ease-in-out ;
    overflow: hidden;      
       
        
    background-size: cover;
    object-fit: cover;
    background-repeat: no-repeat;
    background-position: center;   
    background-image: linear-gradient(
            rgba(21, 28, 58, 0.38),
            rgba(21, 28, 58, 0.68)
            ),
            url(${props=> props.imageUrl});    
    
    
    
    
`;

export const TextAndButtonContainer = styled.div`
      position: absolute;
      top: 10%;
      left: 25%;
      
      
      

      h1{
            font-weight:bold;
            color: white;
            text-align: start;
            text-shadow: 2px 2px rgba(21, 28, 58, 0.28) ;
      }
      p{
            font-size:20px;
            color: white;
            text-align: start;
            
      }

      button{
        margin: 10px;                 
        padding: 10px;
        margin-left: -85%;
        border-radius: 2px;
        background: rgba(21, 28, 58, 0.78);
        outline: none;
        color: white;
        border: rgba(21, 28, 58, 0.38);
        cursor: pointer;
        font-family: Yu Gothic UI;
        

      }

      

`;

