import { Photo } from '../itemCardMain/itemCardMain.types';

export interface ICardModal {
  item: Photo | undefined;
  onCloseModal: () => void;
  showModal: boolean;
  onBackdropModal: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
