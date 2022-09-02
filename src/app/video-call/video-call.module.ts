import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoCallRoutingModule } from './video-call-routing.module';
import { RoomComponent } from './room/room.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { VideoRoomComponent } from './video-room/video-room.component';



@NgModule({
  declarations: [
    RoomComponent,
    VideoRoomComponent
  ],
  imports: [
    CommonModule,
    VideoCallRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class VideoCallModule { }
