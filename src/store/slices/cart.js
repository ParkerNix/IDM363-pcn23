import { createSlice } from "@reduxjs/toolkit";

function getValue() {
  const initialStateValue = [];
  const allItems = localStorage.getItem("allItems")
  if (typeof allItems !== 'undefined' && allItems !== null) {
    const initialStateValue = [
      ...JSON.parse(localStorage.getItem("allItems")).map((product) => ({
      ...product,
      in_cart: 0,
    }))];
    return initialStateValue;
  }
  return initialStateValue;
}

const initialStateValue = getValue();

console.log(initialStateValue)

export const item_sliceySlice = createSlice({
  name: "cart_slicey",
  initialState: {
    value: initialStateValue,
  },
  reducers: {
    addToCart: (state = initialStateValue, action) => {
      const itemToAdd = state.value.find((item) => item.keyName === action.payload.keyName)
      if (itemToAdd) {
        itemToAdd.in_cart++;
      } else {
        console.log("You tried to add it...")
        console.log("But you don't have any!")
      }
    },
    removeFromCart: (state, action) => {
      const itemToRemove = state.value.find((item) => item.keyName === action.payload.keyName)
      if (itemToRemove) {
        itemToRemove.in_cart--;
      } else {
        console.log("You tried to remove it...")
        console.log("But you don't have any!")
      }
    },
  },
});

export const { addToCart, removeFromCart } = item_sliceySlice.actions;

export default item_sliceySlice.reducer;