import { Routes } from "@angular/router";
import { BooksListMainComponent} from "./books-list-main/books-list-main.component";
import {FavoritesListComponent} from "./favorites-list/favorites-list.component";
import {CollectionListComponent} from "./collection-list/collection-list.component";
import {BookDetailComponent} from "./book-detail/book-detail.component";
import {AuthPageComponent} from "./auth-page/auth-page.component";
import { Component } from "@angular/core";

export const routes: Routes = [
    {
        path: "",
        component: BooksListMainComponent
    },
    {
        path: "favorites",
        component: FavoritesListComponent
    },
    {
        path: "collections",
        component: CollectionListComponent
    },
    {
        path: "detail/:id",
        component: BookDetailComponent
    },
    {
        path: "authentication",
        component: AuthPageComponent
    },
    {
        path: "**",
        redirectTo: ""
    }
]