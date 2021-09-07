import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavMenuRoutingModule } from './nav-menu-routing.module';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';


@NgModule({
  declarations: [
    NavMenuComponent
  ],
  imports: [
    CommonModule,
    NavMenuRoutingModule
  ]
})
export class NavMenuModule { }
