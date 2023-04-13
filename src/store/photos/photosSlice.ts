import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Photo } from '../../app/features/items/molecules/itemCardMain/itemCardMain.types';
import { httpService } from '../../app/services/http.service';

const photoService = {
  apiKey: '-xe8z1BYEBuBQTk-jMqe2U3eECgdj14Showo4hEm6xg',
  photoEndpoint: 'photos?',
  searchEndpoint: 'search/photos?',
};
interface SearchPhotosParams {
  query: string;
  page: number;
}

export const loadPhotos = createAsyncThunk<Photo[], number, { rejectValue: string }>(
  'photos/loadPhotos',
  async (page: number, { rejectWithValue }) => {
    try {
      const data = await httpService.get(photoService.photoEndpoint, {
        headers: {
          Authorization: `Client-ID ${photoService.apiKey}`,
        },
        params: {
          page: page,
          per_page: 15,
        },
      });
      return data.data.map((photo: Photo) => photo);
    } catch (error) {
      return rejectWithValue('Error occurred while fetching photos');
    }
  }
);

export const searchPhotos = createAsyncThunk<Photo[], SearchPhotosParams, { rejectValue: string }>(
  'photos/searchPhotos',
  async ({ query, page }, { rejectWithValue }) => {
    try {
      const data = await httpService.get(photoService.searchEndpoint, {
        headers: {
          Authorization: `Client-ID ${photoService.apiKey}`,
        },
        params: {
          page: page,
          per_page: 15,
          query: query,
        },
      });
      return data.data.results.map((photo: Photo) => photo);
    } catch (error) {
      return rejectWithValue('Error occurred while fetching photos');
    }
  }
);

export interface PhotoState {
  images: Photo[];
  isLoading: boolean;
  page: number;
  searchText: string;
  isSearching: boolean;
}

const initialState: PhotoState = {
  images: [],
  isLoading: true,
  page: 1,
  searchText: '',
  isSearching: false,
};
const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    setSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setIsSearching: (state, action: PayloadAction<boolean>) => {
      state.isSearching = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadPhotos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loadPhotos.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(searchPhotos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(searchPhotos.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(loadPhotos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.images = action.payload;
      })
      .addCase(searchPhotos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.images = action.payload;
      });
  },
});

export const { setSearchText, setPage, setIsSearching } = photosSlice.actions;
export default photosSlice.reducer;
