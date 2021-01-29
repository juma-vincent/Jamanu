import { ShopActionTypes } from "./shop.types";
import { convertProductsArrayToObject } from "./shop.utils";
import axios from 'axios';


export const fetchProductsStart = {
  type: ShopActionTypes.FETCH_PRODUCTS_START,
};

export const fetchProductsSuccess = (productsObject) => ({
  type: ShopActionTypes.FETCH_PRODUCTS_SUCCESS,
  payload: productsObject,
});

export const fetchProductsFailure = (errorMessage) => ({
  type: ShopActionTypes.FETCH_PRODUCTS_SUCCESS,
  payload: errorMessage,
});

export const fetchProductsStartAsync = () => {
  
  return (dispatch) => {
    dispatch(fetchProductsStart);
    
    fetch("/api/all_products")
      .then((response) => response.json())
      .then((data) => {
        const productsObject = convertProductsArrayToObject(data);        
        dispatch(fetchProductsSuccess(productsObject));
      })
      .catch((error) => dispatch(fetchProductsFailure(error.message)));
    
  };
};

export const fetchAllProducts = ()=>async dispatch=>{
  const res = await axios.get('/api/all_products');
  const prodObjects = convertProductsArrayToObject(res.data)
  dispatch({ type: ShopActionTypes.FETCH_PRODUCTS_SUCCESS, payload: prodObjects})
}

export const fetchOrders = ()=> async dispatch=>{
  const res = await axios.get('/api/admin/all_orders');
  dispatch({type: ShopActionTypes.FETCH_ORDERS, payload: res.data})
}

export const updateOrderStatus = ({orderId, status})=>async dispatch=>{
  await axios.put( `/api/update_order_status`,
  {
      orderId,
      newStatus: status,
  });
  dispatch(fetchOrders());
}



