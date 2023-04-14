import { configureStore } from '@reduxjs/toolkit';
import photosReducer from './photos/photosSlice';
import createdCardReducer from './createdCard/createdCard.slice';
import { PhotoState } from './photos/photosSlice.types';
import { CreatedCardState } from './createdCard/createdCard.slice';

export const store = configureStore({
  reducer: {
    photo: photosReducer,
    createdCard: createdCardReducer,
  },
});

export type RootState = {
  photo: PhotoState;
  createdCard: CreatedCardState;
};

export type AppDispatch = typeof store.dispatch;
export default store;
