export default interface ICardsList {
  data: string[];
  isLoading: boolean;
  className: string;
  page?: number;
  onPageChange: (page: number) => void;
}
