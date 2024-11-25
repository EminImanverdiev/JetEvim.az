import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
}; 

const likedProductsSlice = createSlice({
  name: 'likedProducts',
  initialState,
  reducers: {
    addLikedProduct: (state, action) => {
      const newItem = action.payload;
      const existingItemIndex = state.items.findIndex(item => item.id === newItem.id);
      if (existingItemIndex !== -1) {
        state.items.splice(existingItemIndex, 1);  // Remove the item if it exists
      } else {
        state.items.push({ ...newItem, quantity: 1 });  // Add new item with quantity 1
      }
    },
    removeLikedProduct: (state, action) => {
      const idToRemove = action.payload;
      state.items = state.items.filter(item => item.id !== idToRemove);
    },
  },
});

export const { addLikedProduct, removeLikedProduct } = likedProductsSlice.actions;
export const selectLikedProducts = (state) => state.likedProducts.items;
export default likedProductsSlice.reducer;
