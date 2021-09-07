import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RemoteSvgAnimationRoutingModule } from './remote-svg-animation-routing.module';
import { SvgAnimationComponent } from './components/svg-animation/svg-animation.component';
import { LottieModule } from 'ngx-lottie';

export function playerFactory() {
  return import(/* webpackChunkName: 'lottie-web' */ 'lottie-web');
}

@NgModule({
  declarations: [
    SvgAnimationComponent
  ],
  imports: [
    CommonModule,
    RemoteSvgAnimationRoutingModule,
    LottieModule.forRoot({ player: playerFactory }),
  ],
  exports: [SvgAnimationComponent, LottieModule]
})
export class RemoteSvgAnimationModule { }
