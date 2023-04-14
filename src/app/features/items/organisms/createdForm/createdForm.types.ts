export interface ICreatedForm {
  name: string;
  date?: string;
  id: number;
  images?: FileList;
  select?: string;
  price: number;
  isChecked?: boolean;
  radio?: string;
}
