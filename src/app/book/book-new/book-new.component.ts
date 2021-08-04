import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Book} from "../../book";
import {debounceTime, tap} from "rxjs/operators";

@Component({
  selector: 'barm-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.scss']
})
export class BookNewComponent implements OnInit {

  form!: FormGroup;

  isbn!: FormControl;

  constructor() { }

  ngOnInit(): void {
    this.isbn = new FormControl('123-');

    this.form = new FormGroup({
      title: new FormControl(null, {
        validators: [
          Validators.required,
          Validators.minLength(2)
        ]
      }),
      isbn: this.isbn
    });

    this.isbn.valueChanges.pipe(
      debounceTime(300),
      tap(v => console.log(v))
    )
      .subscribe();
  }

  handleSubmit(value: Pick<Book, 'title' | 'isbn'>) {

    debugger;
  }

}
