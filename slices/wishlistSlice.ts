import { createSlice } from '@reduxjs/toolkit';

interface WishlistState {
  items: number[];
}

const initialState: WishlistState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const productToAdd = action.payload;
      state.items.push(productToAdd);
    },
    removeFromWishlist: (state, action) => {
      const productIdToRemove = action.payload;
      state.items = state.items.filter(item => item !== productIdToRemove);
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
