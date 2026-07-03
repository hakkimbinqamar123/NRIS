import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UiState {
  isDarkMode: boolean;
  isMobileMenuOpen: boolean;
}

const initialState: UiState = {
  isDarkMode: false,
  isMobileMenuOpen: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
    setMobileMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.isMobileMenuOpen = action.payload;
    },
  },
});

export const { toggleDarkMode, setMobileMenuOpen } = uiSlice.actions;
export default uiSlice.reducer;
