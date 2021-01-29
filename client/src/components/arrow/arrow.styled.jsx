import styled from 'styled-components';

export const ArrowContainer = styled.div`

          display: flex;
          position: absolute;
          top: 40%;

          &.right{
              right: 25px;          
          }

          &.left{
            left: 25px;        
          }
                    

          height: 40px;
          width: 40px;
          justify-content: center;
          background: rgba(116, 124, 116, 0.58);      
          border-radius: 50%;
          cursor: pointer;
          align-items: center;
          transition: transform ease-in 0.1s;
          &:hover {
            transform: scale(1.1);
          }
          &.left{
            img {
                transform: translateX(-2px);
                fill: green;
                &:focus {
                  outline: 0;
                }
              } 
          }
          &.right{
            img {
                fill: green;
                transform: translateX(2px);
                &:focus {
                  outline: 0;
                }
              }
          }

    @media screen and (max-width: 550px) {
      &#belongs-to-category{
        top: 80%;   
      }
    }
`;
