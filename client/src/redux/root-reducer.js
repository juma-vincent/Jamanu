import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import shopReducer from "./shop/shop.reducer";
import categoryDataReducer from "./category-data/category-data.reducer";


const rootReducer = combineReducers({
  shop: shopReducer,
  user: userReducer,
  cart: cartReducer,
  categoryData: categoryDataReducer,
});

export default  rootReducer;
