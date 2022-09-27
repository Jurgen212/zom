import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalasPrivadasComponent } from './salas-privadas/salas-privadas.component';

const routes: Routes = [{
  path:'',
  children: [
    { path: 'ruta-sala', component : SalasPrivadasComponent },
    { path: '**'            , redirectTo:   'ruta-sala'        }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LinkSalaRoutingModule { }
