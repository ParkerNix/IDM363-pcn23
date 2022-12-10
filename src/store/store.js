import { configureStore } from "@reduxjs/toolkit";
import item_sliceyReducer from "./slices/items";
import cart_sliceyReducer from "./slices/cart";


export default configureStore({
  reducer: {
    item_slicey: item_sliceyReducer,
    cart_slicey: cart_sliceyReducer,
  },
});