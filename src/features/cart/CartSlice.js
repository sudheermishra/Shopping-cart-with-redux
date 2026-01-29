import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItemToCart: (cart, action) => {
      return [...cart, action.payload];
    },
    increaseitem: (cart, action) => {
      return cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
    },
    decreaseitem: (cart, action) => {
      return cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
    },
    deleteitem: (cart, action) => {
      return cart.filter((item) => item.id !== action.payload.id);
    },
  },
});
export const { addItemToCart, decreaseitem, increaseitem, deleteitem } =
  cartSlice.actions;
export default cartSlice.reducer;
