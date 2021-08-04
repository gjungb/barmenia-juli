import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BookApiService} from "../books/book-api.service";
import {Observable} from "rxjs";
import {Book} from "../book";

@Component({
  selector: 'barm-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  book$?: Observable<Book>;

  constructor(private route: ActivatedRoute, private api: BookApiService) { }

  ngOnInit(): void {
    const value = this.route.snapshot.paramMap.get('foo');

    this.route.queryParamMap.subscribe();
    // TODO use api to retrieve single book by isbn
    debugger;
  }

}
