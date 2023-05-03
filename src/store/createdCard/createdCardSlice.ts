import { ICreatedCard } from '../../app/features/items/molecules/createdCard/createdCard.types';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CreatedCardState } from './createdCardSlice.types';
const initialState: CreatedCardState = {
  data: [],
  name: '',
  price: 0,
  category: '',
  date: '',
  isChecked: false,
  publicDays: '',
};

const createdCardSlice = createSlice({
  name: 'createdCard',
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<ICreatedCard>) => {
      state.data = [...state.data, action.payload];
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setPrice: (state, action: PayloadAction<number>) => {
      state.price = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setDate: (state, action: PayloadAction<string>) => {
      state.date = action.payload;
    },
    setPublicDays: (state, action: PayloadAction<string>) => {
      state.publicDays = action.payload;
    },
    setIsChecked: (state, action: PayloadAction<boolean>) => {
      state.isChecked = !action.payload;
    },
  },
});

export const { addCard, setName, setPrice, setCategory, setDate, setPublicDays, setIsChecked } =
  createdCardSlice.actions;
export default createdCardSlice.reducer;
