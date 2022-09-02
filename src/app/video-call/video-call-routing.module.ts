import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomComponent } from './room/room.component';
import { VideoRoomComponent } from './video-room/video-room.component';


const routes: Routes = [{
  path:'',
  children: [
    { path: 'video'   , component :   VideoRoomComponent},
    { path: 'room'          , component :   RoomComponent     },
    { path: '**'            , redirectTo:   'contacts'        }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoCallRoutingModule { }
