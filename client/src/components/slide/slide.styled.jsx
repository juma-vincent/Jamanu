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
      text-shadow: 1px 1px 1px black;
      
      
      

      h1{
            font-weight:bold;
            color: white;
            text-align: start;
            text-shadow: 1px 1px 1px rgba(21, 28, 58, 0.98) ;
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

  @media screen and (max-width: 800px) {   
   top: 20%;
   left: 20%;
   font-size: 13px;
      button{
            margin-left: -50%;
      }
      
  }

      

`;

