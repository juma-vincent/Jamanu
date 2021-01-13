import styled from 'styled-components';

export const FormContainer = styled.div`    
    font-family: Yu Gothic UI;
    color: rgb(78, 73, 73);
    max-width: 70%;
    margin: 2.5rem auto;    
    padding: 2rem ;    
    text-align: start;
    display: flex;
    flex-direction: column;    
    box-shadow: 0px 3px 5px rgba(63, 46, 46, 0.4);

    label{
        display: block;  
        display: flex;
        flex-direction: column;      
        
        .label-name{
            margin-top: 35px;
            margin-bottom: 0;
            font-weight: 500;
            font-size: 18px;
        }
        
        
    }
        
    input, select {
        width: 80%;
        border: none;
        padding-top: 10px;
        margin-right: 30px;        
        color: rgb(78, 73, 73);
        border-bottom: solid lightblue 2px;
        font-size: 16px;
        &:focus {
            outline: none;
            border-bottom: solid lightblue 1px;
          }
          
    }

    #btn {
        border-radius: 4px;
        margin-right: 30%;
        margin-top: 30px;
        letter-spacing: 5px;
        font-family: Cochin, Georgia, Times, "Times New Roman", serif;
        background-color: #cf8a09;
        border: solid 1px#cf8a09;
    
        &:hover {
          background-color: rgba(105, 199, 42, 0.918);
          border: solid 1px rgba(105, 199, 42, 0.918);
          color: black;
        }
      }

    .uploading{
      position: relative;

      .spin{
          position: absolute;
          top: 56.5%;
          right: 53%;
          display: inline-block;
          width: 25px;
          height: 25px;
          border: 3px dotted rgba(63, 68, 61, 0.678);
          border-radius: 50%;
          border-top-color: #0d9213;
          animation: spin 1s ease-in-out infinite;
          -webkit-animation: spin 1s ease-in-out infinite;
          @keyframes spin {
            to {
              -webkit-transform: rotate(360deg);
            }
          }
          @-webkit-keyframes spin {
            to {
              -webkit-transform: rotate(360deg);
            }
          }
       }
    }  
      
    
    

`;