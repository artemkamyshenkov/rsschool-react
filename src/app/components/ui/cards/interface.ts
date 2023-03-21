export interface ICardItem {
  brand: string;
  category: string;
  id: number;
  price: number;
  title: string;
  stock: number;
  images: string[];
}

export interface ICreatedCard {
  title: string;
  date: string;
  id: number;
  images: string;
  category: string;
  price: number;
  isChecked: boolean;
  publicDays: string;
}
