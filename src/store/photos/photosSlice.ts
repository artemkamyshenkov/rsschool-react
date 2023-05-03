import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Photo } from '../../app/features/items/molecules/itemCardMain/itemCardMain.types';
import { httpService } from '../../app/services/http.service';
import { PhotoState, SearchPhotosResult, SearchPhotosParams } from './photosSlice.types';

const photoService = {
  apiKey: '-xe8z1BYEBuBQTk-jMqe2U3eECgdj14Showo4hEm6xg',
  photoEndpoint: 'photos?',
  searchEndpoint: 'search/photos?',
};

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
      return rejectWithValue((error as Error).message);
    }
  }
);

export const searchPhotos = createAsyncThunk<
  SearchPhotosResult,
  SearchPhotosParams,
  { rejectValue: string }
>('photos/searchPhotos', async ({ query, page }, { rejectWithValue }) => {
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
    const searchedPhotos = data.data.results.map((photo: Photo) => photo);
    const totalResults = data.data.total;
    return { searchedPhotos, totalResults };
  } catch (error) {
    return rejectWithValue((error as Error).message);
  }
});

const setError = (state: PhotoState, action: PayloadAction<string | undefined>) => {
  state.isLoading = false;
  if (action.payload) {
    state.error = action.payload;
  }
};

const initialState: PhotoState = {
  images: [],
  isLoading: true,
  searchText: '',
  totalResults: 0,
  error: undefined,
};

const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    setSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadPhotos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loadPhotos.rejected, (state, action) => {
        setError(state, action);
      })
      .addCase(searchPhotos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(searchPhotos.rejected, (state, action) => {
        setError(state, action);
      })
      .addCase(loadPhotos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.images = action.payload;
      })
      .addCase(searchPhotos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.images = action.payload.searchedPhotos;
        state.totalResults = action.payload.totalResults;
      });
  },
});

export const { setSearchText } = photosSlice.actions;
export default photosSlice.reducer;
