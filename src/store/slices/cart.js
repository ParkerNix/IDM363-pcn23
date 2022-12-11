import { createSlice } from "@reduxjs/toolkit";

export const cart_sliceySlice = createSlice({
  name: "cart_slicey",
  initialState: {
    value: []
  },
  reducers: {
    updateItem: (state, action) => {
      const itemIndex = state.value.findIndex(item => item.id === action.payload.id)

      if(itemIndex >= 0){
        state.value[itemIndex] = {
          ...state.value[itemIndex],
          title: action.payload.title,
          price: action.payload.price
        }
      }
    },
    addToCart: (state, action) => {
      const itemInCart = state.value.find((item) => item.id === action.payload.id)

      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.value.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const removeItem = state.value.filter((item) => item.id !== action.payload);
      state.value = removeItem;
    }
  },
});

export const { addToCart, removeFromCart, updateItem } = cart_sliceySlice.actions;

export default cart_sliceySlice.reducer;