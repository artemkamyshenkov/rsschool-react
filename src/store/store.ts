import { configureStore } from '@reduxjs/toolkit';
import photosReducer, { PhotoState } from './photos/photosSlice';
export const store = configureStore({
  reducer: {
    photo: photosReducer,
  },
});

export type RootState = {
  photo: PhotoState;
};

export type AppDispatch = typeof store.dispatch;
export default store;
