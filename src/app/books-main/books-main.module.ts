import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { BooksListMainComponent } from './containers/books-list-main/books-list-main.component';
import { BookDetailComponent } from './containers/book-detail/book-detail.component';
import { routes } from "./routes.books-main";

const COMPONENTS = [
  BooksListMainComponent,
  BookDetailComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: COMPONENTS
})
export class BooksMainModule { }
