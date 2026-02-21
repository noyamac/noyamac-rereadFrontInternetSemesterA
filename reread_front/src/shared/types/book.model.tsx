export interface BookPost {
  id: string;
  title: string;
  author: string;
  price: number;
  imageUrl: string;
  sellerId: string;
  description: string;
  comments: Comment[];
}
