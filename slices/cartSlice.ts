import { createSlice } from '@reduxjs/toolkit';

interface CartState {
  items: number[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productToAdd = action.payload;
      state.items.push(productToAdd);
    },
    removeFromCart: (state, action) => {
      const productIdToRemove = action.payload;
      state.items = state.items.filter(item => item !== productIdToRemove);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;