import { Quote } from '../models/quote.model';

export interface Book {
  id: number;
  title: string;
  quotes: Quote[];
}
