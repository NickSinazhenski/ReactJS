

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

interface MenuUiState {
  visibleMeals: number;
  selectedCategory: string;
}

const initialState: MenuUiState = {
  visibleMeals: 6,
  selectedCategory: '',
};

const menuUiSlice = createSlice({
  name: 'menuUi',
  initialState,
  reducers: {
    setVisibleMeals(state, action: PayloadAction<number>) {
      state.visibleMeals = action.payload;
    },
    setSelectedCategory(state, action: PayloadAction<string>) {
      state.selectedCategory = action.payload;
    },
  },
});

export const { setVisibleMeals, setSelectedCategory } = menuUiSlice.actions;

export const selectVisibleMeals = (state: RootState) => state.menuUi.visibleMeals;
export const selectSelectedCategory = (state: RootState) => state.menuUi.selectedCategory;

export default menuUiSlice.reducer;