import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'angular12-micro-frontend-nx-workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public animationUrl: string | any;

  constructor() {
    this.animationUrl = "https://assets5.lottiefiles.com/packages/lf20_p1qiuawe.json";
  }
}
