export interface ICreatedForm {
  productName: string;
  date?: string;
  id: number;
  images?: FileList;
  category?: string;
  productPrice: number;
  isChecked?: boolean;
  publicDays?: string;
}
