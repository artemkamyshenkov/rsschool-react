export interface Photo {
  id: string;
  alt_description: string | null;
  description: string | null;
  likes: number;
  created_at: string;
  urls: {
    regular: string;
    small: string;
  };
  user: {
    name: string;
    username: string;
  };
}
export interface ICardMain {
  item: Photo;
  onOpenModal: (id: string) => void;
}
