import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestRoutingModule } from './guest-routing.module';
import { LeftNavComponent } from './components/left-nav/left-nav.component';
import { AboutComponent } from './components/about/about.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LeftNavComponent,
    AboutComponent,
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    GuestRoutingModule,
    SharedModule
  ],
})
export class GuestModule { }
