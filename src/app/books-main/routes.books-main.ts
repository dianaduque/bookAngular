import { Routes } from "@angular/router";
import { BookDetailComponent} from "./containers/book-detail/";
import { BooksListMainComponent} from "./containers/books-list-main/";


export const routes: Routes = [
    {
        path: "list",
        component: BooksListMainComponent
    },
    {
        path: "detail/:id",
        component: BookDetailComponent
    },
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    }
]