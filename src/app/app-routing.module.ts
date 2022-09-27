import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinkSalaModule } from './link-sala/link-sala.module';


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
    path:'addruta',
    loadChildren: () => import('./link-sala/link-sala.module')  .then( m => LinkSalaModule )
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
