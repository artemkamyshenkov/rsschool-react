import { ICreatedCard } from '../../app/features/items/molecules/createdCard/createdCard.types';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CreatedCardState {
  data: ICreatedCard[];
  name: string;
  date?: string;
  images?: string;
  category?: string;
  price: number;
  isChecked?: boolean;
  publicDays?: string;
}
const initialState: CreatedCardState = {
  data: [],
  name: '',
  price: 0,
  category: '',
  date: '',
  images: '',
  isChecked: false,
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
  },
});

export const { addCard, setName, setPrice, setCategory, setDate } = createdCardSlice.actions;
export default createdCardSlice.reducer;
