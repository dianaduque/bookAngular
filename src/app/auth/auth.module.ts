import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from "@angular/router";

import { AuthPageComponent } from './containers/auth-page/auth-page.component';
import { routes } from "./routes.auth";

const COMPONENTS = [
  AuthPageComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: COMPONENTS
})
export class AuthModule { }
