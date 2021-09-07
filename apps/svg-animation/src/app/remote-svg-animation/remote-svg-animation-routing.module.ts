import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SvgAnimationComponent } from './components/svg-animation/svg-animation.component';

const routes: Routes = [{
  path: 'animation', component: SvgAnimationComponent, pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RemoteSvgAnimationRoutingModule { }
