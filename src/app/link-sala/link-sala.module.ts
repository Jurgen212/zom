import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinkSalaRoutingModule } from './link-sala-routing.module';
import { SalasPrivadasComponent } from './salas-privadas/salas-privadas.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SalasPrivadasComponent
  ],
  imports: [
    CommonModule,
    LinkSalaRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LinkSalaModule { }
