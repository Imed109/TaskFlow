import { configureStore } from '@reduxjs/toolkit';
import listsReducer from './ListsSlice';

const store = configureStore({
  reducer: {
    lists: listsReducer,
    // Add other reducers here if you have more slices
  },
});

export default store;
