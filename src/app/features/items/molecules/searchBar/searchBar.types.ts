export interface ISearchBar {
  value: string | number;
  onSubmit: (e: React.SyntheticEvent) => void;
  onChange: (e: React.SyntheticEvent) => void;
}
