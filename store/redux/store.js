import { configureStore } from '@reduxjs/toolkit';

import favoritesReducer from './favorites';

export const Store = configureStore({
  reducer: {
    favoriteMeals: favoritesReducer
  }
});