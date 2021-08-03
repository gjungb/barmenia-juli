import {Component, OnDestroy, OnInit} from '@angular/core';
import {Book} from "../book";
import {BookApiService} from "../books/book-api.service";
import {Observable, Subscription, timer} from "rxjs";
import {tap} from "rxjs/operators";

@Component({
  selector: 'barm-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit, OnDestroy {

  books: Book[] = [];

  books$?: Observable<Book[]>;

  timer$ = timer(5_000, 1_000);

  private sub?: Subscription;

  constructor(private api: BookApiService) {
  }

  ngOnInit(): void {
    // mit async pipe
    this.books$ = this.api.getAll().pipe(
      tap({
        complete: () => console.log('Ist komplett')
      })
    );

    // old school
    const books$ = this.api.getAll();

    books$.pipe(

    ).subscribe({
      next: value => this.books = value,
      error: (err) => console.error(err)
    });

    this.sub = timer(1_000, 2_000)
      .pipe(tap(v => console.log(v)))
      .subscribe();
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

}
