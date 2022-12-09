import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = JSON.parse(localStorage.getItem("allItems"))

export const item_sliceySlice = createSlice({
  name: "item_slicey",
  initialState: {
    value: initialStateValue,
  },
  reducers: {
    update: (state, action) => {
      state.value = action.payload;
    },
    editProduct: (state, action) => {
      const itemIndex = state.value.findIndex((item) => item.keyName === action.payload.keyName)
      state.value[itemIndex] = {
        ...state.value[itemIndex],
        title: action.payload.title,
        price: action.payload.price,
        quantity: action.payload.quantity
      }
    }
  },
});

export const { update, editProduct } = item_sliceySlice.actions;

export default item_sliceySlice.reducer;