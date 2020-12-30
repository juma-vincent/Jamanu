import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import homeDirectoryReducer from "./home-directory/home-directory.reducer";
import shopReducer from "./shop/shop.reducer";


const rootReducer = combineReducers({
  shop: shopReducer,
  user: userReducer,
  cart: cartReducer,
  homeDirectory: homeDirectoryReducer,
});

export default  rootReducer;
