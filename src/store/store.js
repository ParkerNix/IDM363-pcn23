import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/items"


export default configureStore({
  reducer: {
    user: userReducer,
  }
})