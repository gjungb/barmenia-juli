import { Component, OnInit } from '@angular/core';
import {Book} from "../book";
import {BookApiService} from "../books/book-api.service";

@Component({
  selector: 'barm-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {

  books: Book[] = [];

  constructor(private api: BookApiService) { }

  ngOnInit(): void {
    this.api.getAll().then((value) => {
      this.books = value;
    });
  }

}
