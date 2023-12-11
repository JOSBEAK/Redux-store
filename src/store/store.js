//import all the reducers of slices in here
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productReducer from "./productSlice";
const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    //add all the reducers
  },
});

export default store;
