import { Photo } from '../../app/features/items/molecules/itemCardMain/itemCardMain.types';

interface SearchPhotosParams {
  query: string;
  page: number;
}

interface SearchPhotosResult {
  searchedPhotos: Photo[];
  totalResults: number;
}

interface PhotoState {
  images: Photo[];
  isLoading: boolean;
  searchText: string;
  totalResults: number;
  error: string | undefined;
}

export { PhotoState, SearchPhotosResult, SearchPhotosParams };
