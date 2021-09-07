import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RemoteCommunicationService } from '@angular12-micro-frontend-nx-workspace/services-lib';

@Component({
  selector: 'angular12-micro-frontend-nx-workspace-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  private inputRemoteSubscription: Subscription;

  public contactMessage: { name: string; email: string; message: string };

  constructor(
    private _RemoteCommunicationService: RemoteCommunicationService
  ) {
    this.inputRemoteSubscription = this._RemoteCommunicationService.contactUsInputOb$.subscribe((remoteData: any) => {
      console.log("This is the received main data: ", remoteData);
    });
    this.contactMessage = { name: '', email: '', message: '' }
  }

  ngOnInit(): void {
    this.inputRemoteSubscription.unsubscribe();
  }

  public sendContactMsg() {
    const contactData = { msg: "This is the remote contact data", data: this.contactMessage }
    console.log("contactData", contactData);
    this._RemoteCommunicationService.defineContactOutputParams(contactData);
  }

}
