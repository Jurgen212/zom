import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoCallRoutingModule } from './video-call-routing.module';
import { ContactsComponent } from './contacts/contacts.component';


@NgModule({
  declarations: [
    ContactsComponent
  ],
  imports: [
    CommonModule,
    VideoCallRoutingModule
  ]
})
export class VideoCallModule { }
