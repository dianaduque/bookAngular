import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { AppPipesModule } from "../app-pipes/app-pipes.module";
import { CoreComponent } from './containers/core/core.component';
import { TopNavBarComponent } from './containers/top-nav-bar/top-nav-bar.component';
import { AsideLeftComponent } from './containers/aside-left/aside-left.component';
import { MainContentComponent } from './containers/main-content/main-content.component';
import { AsideLeftMenuComponent } from './components/aside-left-menu/aside-left-menu.component';
import { AsideLeftUserComponent } from './components/aside-left-user/aside-left-user.component';
import { routes } from "./routes.core";


const COMPONENTS = [
  CoreComponent,
  TopNavBarComponent,
  AsideLeftComponent,
  MainContentComponent,
  AsideLeftMenuComponent,
  AsideLeftUserComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AppPipesModule
  ],
  declarations: COMPONENTS
})
export class CoreModule { }
