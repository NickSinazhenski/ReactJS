import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

interface CartItem {
  id: number;
  count: number;
  [key: string]: any;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      if (existingItem) {
        existingItem.count += newItem.count;
      } else {
        state.items.push(newItem);
      }
    },
  },
});

export const { addItem } = cartSlice.actions;
export const selectTotalCount = (state: RootState): number =>
  (state.yourData?.items ?? []).reduce((total: number, item: CartItem) => total + item.count, 0);
export default cartSlice.reducer;