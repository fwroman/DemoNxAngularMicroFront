import { Component, OnInit } from '@angular/core';
import { RemoteInstance } from './interfaces/remote-instance';

@Component({
  selector: 'angular12-micro-frontend-nx-workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public remoteLottieFileData: RemoteInstance | any;
  public remoteNavMenuData: RemoteInstance | any;

  constructor() {
  }

  ngOnInit() { }
}
