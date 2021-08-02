import {Injectable} from '@angular/core';
import {Book} from "../book";

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

  constructor() {
  }

  /**
   * Liefert eine Liste aller bekannten Bücher
   */
  getAll(): Promise<Book[]> {
    return Promise.resolve(this.books);
  }
}
