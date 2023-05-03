import { Photo } from '../../molecules/itemCardMain/itemCardMain.types';
export default interface ICardsList {
  data: Photo[];
  isLoading: boolean;
  className: string;
  page?: number;
  onPageChange: (page: number) => void;
}
