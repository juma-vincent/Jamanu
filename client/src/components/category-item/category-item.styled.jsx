import styled from 'styled-components';

export const CategoryItemContainer = styled.div`  
  position: relative;
  display: flex;    
  height: 200px;
  flex: 1 1 30%; 
  justify-content: center;
  align-items: center;
  margin: 0px 7.5px 15px;
  overflow: hidden;
  min-width: 21.4vw;    
  transition: .9s ease-in-out ;    
       

  

  &:hover {
    cursor: pointer;

    .background-image {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    .content {
      opacity: 0.9;
    }
  }

  .background-image {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
  }

  .content {
    position: absolute;
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: rgb(63, 60, 60) solid 1px;
    border-radius: 2px;
    background-color: white;
    opacity: 0.7;

    @media screen and (max-width: 800px) {
      height: 60px;
      width: 100px;
      padding: 0 15px;
    }
  }

  .title {
    font-weight: bold;
    margin-bottom: 6px;
    font-size: 22px;
    color: rgb(146, 84, 3);

    @media screen and (max-width: 800px) {
      font-weight: bold;
      margin-bottom: 3px;
      font-size: 14px;
    }
  }

  .subtitle {
    font-weight: 600;
    font-size: 16px;

        @media screen and (max-width: 800px) {
        font-weight: bold;
        margin-bottom: 3px;
        font-size: 14px;        
        }
   }

@media screen and (max-width: 800px) {
    min-width: 40vw;
}
`;