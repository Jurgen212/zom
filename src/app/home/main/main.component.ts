import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    this.win = window.open(`http://127.0.0.1:5500/Zum/index.html?room=${ this.roomNameForm.value.roomName }`, '_blank')!;    
    this.win.focus();
  }
}
