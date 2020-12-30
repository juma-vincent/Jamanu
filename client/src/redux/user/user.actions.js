import { UserActionTypes } from "./user.types";
import axios from 'axios';

export const signoutUser = {
  type: UserActionTypes.SIGN_OUT_USER,
};

export const fetchUser =()=>
    async dispatch =>{
        const res = await axios.get(`/api/current_user`);        
        dispatch({type: UserActionTypes.FETCH_USER, payload: res.data})
    }