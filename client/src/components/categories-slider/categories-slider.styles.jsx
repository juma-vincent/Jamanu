import styled from 'styled-components';

export const SliderContainer = styled.div`  
    width: 100vw;
    height: 60vh;
    margin:auto;
    background-color: whitesmoke;
    position: relative;
    

    #wrapper{
        width: 90%;
        height: 100%;
        box-sizing: border-box;
        margin: 0 auto;
        display: flex;          
        overflow: hidden;    
        align-items: center;
        

        @media screen and (max-width: 800px) {
            width:95%;
            
            
        }
        
    }
    
    
    
    

`;