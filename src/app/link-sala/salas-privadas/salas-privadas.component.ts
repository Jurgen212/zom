import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-salas-privadas',
  templateUrl: './salas-privadas.component.html',
  styleUrls: ['./salas-privadas.component.css']
})
export class SalasPrivadasComponent implements OnInit {

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
  }


  rutaLinkForm: FormGroup = this.fb.group({
    
    linkConnection: [ , Validators.required ]
  })



  sendLink(){

    console.log( this.rutaLinkForm.value.linkConnection )
    localStorage.setItem("path1", this.rutaLinkForm.value.linkConnection )
  }
}
