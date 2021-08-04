import {Inject, Injectable} from '@angular/core';
import {Book} from "../book";
import {Observable, of} from "rxjs";
import {delay, tap} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BookApiService {

  books: Book[] = [
    {
      isbn: '978-3-86680-192-9',
      title: 'How to win friends',
      author: 'Dale Carnegie',
      abstract: "How to Win Friends and Influence ..."
    },
    {
      isbn: '9783866801929',
      title: 'The Willpower Instinct: How Self-Control Works ...',
      author: 'Kelly McGonigal',
      abstract: 'Based on Stanford University ...'
    },
    {
      isbn: '978-3-86680-192-9',
      author: 'Simon Sinek',
      title: 'Start with WHY',
      abstract: "START WITH WHY shows that the leaders who've ..."
    }
  ];

  constructor(private readonly client: HttpClient, @Inject('API_URL') private readonly url: string) {
  }

  /**
   * Liefert eine Liste aller bekannten Bücher
   */
  getAll(): Observable<Book[]> {
    const resp$ = this.client.get<Book[]>(`${this.url}/books`, {

    });

    return resp$.pipe(
      delay(2000),
      tap(value => console.log(value)),
    );
  }
}
