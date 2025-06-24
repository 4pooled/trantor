import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { Book } from '../models/book.model';

@Component({
  selector: 'book-detail',
  template: ''
})
export class BookDetailComponent implements OnInit {
  book: Book | undefined;

  constructor(private route: ActivatedRoute, private dataService: DataService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.dataService.getBookById(id).subscribe((data: Book) => {
      this.book = data;
    });
  }
}
