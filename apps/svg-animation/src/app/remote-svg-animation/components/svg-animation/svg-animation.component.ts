import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'svg-animation',
  templateUrl: './svg-animation.component.html',
  styleUrls: ['./svg-animation.component.scss']
})
export class SvgAnimationComponent implements OnChanges {
  @Input() public animationUrl: string | any;
  @Output() public onAnimationLoaded: EventEmitter<string>;
  public OpcionesAnimacion: AnimationOptions;

  constructor() {
    this.OpcionesAnimacion = {
      path: "https://assets5.lottiefiles.com/packages/lf20_obkemuop.json"
    };
    this.onAnimationLoaded = new EventEmitter<string>();
  }

  private updateAnimation() {
    this.OpcionesAnimacion = {
      path: this.animationUrl
    };

    setTimeout(() => {
      this.onAnimationLoaded.emit('Animation ready! :D from remote svg animation');
    }, 2000);
  }

  ngOnChanges(changes: SimpleChanges) {
    for(let property in changes) {
      if(property == 'animationUrl') {
        if(changes[property]) {
          this.updateAnimation();
        }
      }
    }
  }
}
