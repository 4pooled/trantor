import { Book } from '../models/book.model';

export interface Quote {
  id: number;
  title: string;
  book: Book;
}
