import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module')            .then( m  => m.HomeModule     )
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module')            .then( m  => m.AuthModule     )
  },
  {
    path: 'videoCall',
    loadChildren: () => import('./video-call/video-call.module').then( m  => m.VideoCallModule )
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
