import {Component} from '@angular/core';
import {Book} from "./book";

@Component({
  selector: 'barm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /**
   * Der Titel
   */
  title = 'barmenia-julius';
  visible = true;

  handleSelectBook(book: Book) {
  }
}
