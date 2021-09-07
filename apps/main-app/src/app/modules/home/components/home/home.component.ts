import { Component, ComponentRef, OnInit } from '@angular/core';
import { RemoteAttribute, RemoteInstance } from 'apps/main-app/src/app/interfaces/remote-instance';

@Component({
  selector: 'angular12-micro-frontend-nx-workspace-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public remoteLottieFileData: RemoteInstance | any;
  public remoteNavMenuData: RemoteInstance | any;

  constructor() { }

  ngOnInit() {
    this.defineRemoteLottieFileComponent();
    this.defineRemoteNavMenuComponent();
  }

  public getComponentRef(event: ComponentRef<any>) {
    this.updateRemoteAnimation(event);
  }

  private updateRemoteAnimation(componentRef: ComponentRef<any>) {
    componentRef.instance.updateAnimation();
  }

  private getRemoteOutputData(data: any) {
    console.log("remote data => ", data);
  }

  private defineRemoteNavMenuComponent() {
    const navList = [
      { name: "Sign in", route: "/auth/sign-in" },
      { name: "Sign up", route: "/auth/sign-up" },
      { name: "Guest", route: "/guest" },
    ];
    const inputAttrib: RemoteAttribute[] = [{
      propertyName: 'navList',
      propertyValue: navList
    }];

    this.remoteNavMenuData = {
      url: 'http://localhost:4701',
      filePath: '/remoteGlobalNavEntry.js',
      instanceName: 'remoteGlobalNav',
      instancePath: './',
      componentName: 'NavMenuComponent',
      inputAttributes: inputAttrib
    };
  }

  private defineRemoteLottieFileComponent() {
    const inputAttrib: RemoteAttribute[] = [{
      propertyName: 'animationUrl',
      // propertyValue: 'https://assets3.lottiefiles.com/packages/lf20_dyppatws.json'
      propertyValue: 'https://assets8.lottiefiles.com/packages/lf20_kkmdryze.json'
      // propertyValue: 'https://assets5.lottiefiles.com/packages/lf20_p1qiuawe.json'
      // propertyValue: 'https://assets5.lottiefiles.com/packages/lf20_obkemuop.json'
    }];

    const outputAttrib: RemoteAttribute[] = [{
      propertyName: 'onAnimationLoaded',
      propertyValue: (remoteData: any) => {
        this.getRemoteOutputData(remoteData);
      }
    }];

    this.remoteLottieFileData = {
      url: 'http://localhost:4700',
      filePath: '/svgAnimationEntry.js',
      instanceName: 'remoteSvgAnimation',
      instancePath: './',
      moduleName: 'RemoteSvgAnimationModule',
      componentName: 'SvgAnimationComponent',
      inputAttributes: inputAttrib,
      outputEvents: outputAttrib,
    };
  }
}
