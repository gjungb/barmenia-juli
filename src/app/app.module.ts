import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookCardComponent } from './book-card/book-card.component';
import { BookListComponent } from './book-list/book-list.component';
import { BarmIsbnPipe } from './shared/barm-isbn.pipe';
import { BookNewComponent } from './book/book-new/book-new.component';
import {ReactiveFormsModule} from "@angular/forms";
import { BookDetailComponent } from './book-detail/book-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BookCardComponent,
    BookListComponent,
    BarmIsbnPipe,
    BookNewComponent,
    BookDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: 'API_URL',
      useValue: 'http://localhost:4730'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
