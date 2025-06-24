import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Book } from '../models/book.model';

@Component({
  selector: 'book-list',
  template: ''
})
export class BookListComponent implements OnInit {
  books: Book[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getBook().subscribe((data: Book[]) => {
      this.books = data;
    });
  }
}
