import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    // Add Item to Cart
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++; // Increase quantity if item already exists
      } else {
        // Add new item with quantity set to 1
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },
    
    // Remove Item from Cart
    removeItem: (state, action) => {
      // Remove item from the cart by its name
      state.items = state.items.filter(item => item.name !== action.payload);
    },
    
    // Update the Quantity of an Item
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity; // Update the item quantity
      }
    },
  },
});

// Exporting Action Creators
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Exporting the reducer to be used in store.js
export default CartSlice.reducer;
