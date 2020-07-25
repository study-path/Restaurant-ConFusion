import { CommentModel } from './comment-model';

export class DishModel {
  id: string;
  name: string;
  image: string;
  category: string;
  featured: boolean;
  label: string;
  price: string;
  description: string;
  comments: CommentModel[];
}
