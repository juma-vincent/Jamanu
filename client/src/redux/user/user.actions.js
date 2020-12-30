import { UserActionTypes } from "./user.types";
import axios from 'axios';


export const fetchUser =()=>
    async dispatch =>{
        const res = await axios.get(`/api/current_user`); 
        console.log(res)       
        dispatch({type: UserActionTypes.FETCH_USER, payload: res.data})
    }


        
   