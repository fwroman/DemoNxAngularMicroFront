import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RemoteInstance } from './interfaces/remote-instance';
import { RemoteCommunicationService } from '@angular12-micro-frontend-nx-workspace/services-lib';

@Component({
  selector: 'angular12-micro-frontend-nx-workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private communicationSubscription: Subscription;

  public remoteLottieFileData: RemoteInstance | any;
  public remoteNavMenuData: RemoteInstance | any;

  constructor(
    private _RemoteCommunicationService: RemoteCommunicationService
  ) {
    this.communicationSubscription = this._RemoteCommunicationService.contactUsOutputOb$.subscribe((contactData) => {
      console.log("CONTACT DATA: ", contactData);
    });
  }

  ngOnInit() {
    this._RemoteCommunicationService.defineContactInputParams("APP DATA (Y)");
  }
}
