import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from "../book";

@Component({
  selector: 'barm-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {

  @Input()
  author = '';

  @Input()
  book!: Book;

  @Output()
  bookSelected = new EventEmitter<Book>();

  color = 'blue';

  styles = {
    backgroundColor: 'yellow',
    fontSize: '24px'
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  handleDetailClick(ev: MouseEvent) {
    console.log('Yep', ev.clientX);
    this.bookSelected.emit(this.book);
  }

}
