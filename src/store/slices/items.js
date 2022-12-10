import { createSlice } from "@reduxjs/toolkit";

export const item_sliceySlice = createSlice({
  name: "item_slicey",
  initialState: {
    value: [],
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
        text: action.payload.text
      }
    }
  },
});

export const { update, editProduct } = item_sliceySlice.actions;

export default item_sliceySlice.reducer;