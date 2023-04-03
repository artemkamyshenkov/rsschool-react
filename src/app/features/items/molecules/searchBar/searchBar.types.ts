export interface ISearchBar {
  value: string | number;
  onSubmit: (query: string | number) => void;
}
