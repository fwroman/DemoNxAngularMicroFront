import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SvgAnimationComponent } from './remote-svg-animation/components/svg-animation/svg-animation.component';
import { RemoteSvgAnimationModule } from './remote-svg-animation/remote-svg-animation.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
    RemoteSvgAnimationModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
