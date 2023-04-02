export interface ICreatedForm {
  productName: string;
  date?: string;
  id: number;
  images?: FileList;
  select?: string;
  productPrice: number;
  isChecked?: boolean;
  radio?: string;
}
