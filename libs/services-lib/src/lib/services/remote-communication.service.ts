import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RemoteCommunicationService {
  private contactUsInputSub = new BehaviorSubject<any>(null);
  contactUsInputOb$: Observable<any> = this.contactUsInputSub.asObservable();

  private contactUsOutputSub = new BehaviorSubject<any>(null);
  contactUsOutputOb$: Observable<any> = this.contactUsOutputSub.asObservable();

  constructor() { }

  public defineContactInputParams(data: any) {
    console.log("RECEIVING DATA", data);
    this.contactUsInputSub.next(data);
  }

  public defineContactOutputParams(data: any) {
    console.log("SENDING DATA", data);
    this.contactUsOutputSub.next(data);
  }
}
