import { ICreatedCard } from '../../app/features/items/molecules/createdCard/createdCard.types';
export interface CreatedCardState {
  data: ICreatedCard[];
  name: string;
  date: string;
  category: string;
  price: number;
  isChecked?: boolean;
  publicDays?: string;
}
