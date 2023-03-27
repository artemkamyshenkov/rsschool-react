import { ICardItem } from '../../molecules/item-card/item-card.types';
export default interface ICardsList {
  data: { products: ICardItem[] };
  isLoading: boolean;
  className: string;
}
