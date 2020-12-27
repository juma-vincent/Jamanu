import axios from 'axios';
import { homeUrl } from '../utils';
import {FETCH_USER} from './types';


export const fetchUser =()=>
    async dispatch =>{
        const res = await axios.get(`${homeUrl}/api/current_user`);
        console.log(res);
        dispatch({type: FETCH_USER, payload: res.data})
    }

export const uploadProduct =(user, history)=> dispatch =>
{
    dispatch({type: FETCH_USER, payload: user});
    history.push('/products');
    console.log("UPLOADED BY", user);  
}

     

    // export const logInUser =()=>fetchUser();
    //  async dispatch =>{
    //     const res = await axios.get(`${homeUrl}/auth/google`);
    //     console.log(res)
    //     dispatch({type: FETCH_USER, payload: res.data})
        
        

    // }
    
