import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../../environments/environment.prod';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  
  win !: Window;
  constructor( private fb: FormBuilder ) { }
  
  ngOnInit(): void {
  }

  roomNameForm: FormGroup = this.fb.group({
    roomName: [ , Validators.required ]
  })


  sendRoom(){
    console.log( this.roomNameForm.value.roomName );
    this.win = window.open(`${ environment.agoraUrl }${ this.roomNameForm.value.roomName }`, '_blank')!;    
    this.win.focus();
  }
}
