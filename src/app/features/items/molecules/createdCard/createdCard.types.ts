export interface ICreatedCard {
  name: string;
  date?: string;
  id: number;
  images?: string;
  category?: string;
  price: number;
  isChecked?: boolean;
  publicDays?: string;
}
