import { UserActionTypes } from "./user.types";
import axios from 'axios';


export const fetchUser =()=>
    async dispatch =>{
        const res = await axios.get(`/api/current_user`);             
        dispatch({type: UserActionTypes.FETCH_USER, payload: res.data})
    }

export const uploadProduct =({name, imageurl, price, category, unitType }, history)=> 
 async dispatch =>{
    const res = await axios.post(`/api/new_product`,
      {
      name,
      imageurl, 
      price, 
      category,
      unitType
      }
      );
    dispatch({type: UserActionTypes.FETCH_USER, payload: res.data});
    history.push('/admin/products');
    
}   

const checkOrderUpdate = (user) =>

    async dispatch=>{  
    console.log('------USER OBJECT BEFORE SENDING ORDER UPDATE------'); 
    console.log(res.data);    
    const res = await axios.post(`/api/check_order_update`, {
     user: user
    })
    console.log('------USER OBJECT AFTER SENDING ORDER UPDATE------');
    console.log(res.data);
    dispatch({type: UserActionTypes.FETCH_USER, payload: res.data})
   }



export const makePayment = ({mobileNumber,cartItems, total}, history)=>

    
    async dispatch =>{         
        const res = await axios.post(`/api/new_order`, {
        mobileNumber,
        cartItems,
        total
        });
        console.log('------USER OBJECT FROM ORDER FIRST PROCESSING, NOT COMPLETED------'); 
        console.log(res.data);       
        dispatch(checkOrderUpdate(res.data))
        
        history.push('/user/orders');
    }



        
   