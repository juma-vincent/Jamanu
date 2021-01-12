import { UserActionTypes } from "./user.types";
import axios from 'axios';


export const fetchUser =()=>
    async dispatch =>{
        const res = await axios.get(`/api/current_user`); 
        console.log(res)       
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
    console.log("UPLOADED BY", res.data);  
}    


        
   