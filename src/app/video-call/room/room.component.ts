import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink, RouterLinkWithHref } from '@angular/router';
import { environment } from '../../../environments/environment.prod';


@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  
  

  constructor(  private fb: FormBuilder,
                private router: Router  ) { }

  ngOnInit(): void {
  }

  seleccionSala: FormGroup = this.fb.group({
    roomInput: [ , Validators.required ]
  })
  

  enviarSala(){

    //Navigate to the route: https//:----/videoCall/video/"RoomID"
    this.router.navigate([`/videoCall/video`],  { queryParams: { room: this.seleccionSala.value.roomInput} } )
  };


  
}
