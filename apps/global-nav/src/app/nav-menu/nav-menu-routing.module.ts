import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';

const routes: Routes = [
  { path: 'nav-menu', component: NavMenuComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavMenuRoutingModule { }
