import { SHOP_DATA } from "./shop-data";
import { ShopActionTypes } from "./shop.types";
import { convertProductsArrayToObject } from "./shop.utils";


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
