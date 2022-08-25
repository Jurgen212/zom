import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  @ViewChild("container") container !: ElementRef;
  

  constructor() {
  }

  ngOnInit(): void {
  }



  animationMovement ( index: number ) {

    if( index == 0 )  this.container.nativeElement.classList.add   ("right-panel-active");
    else              this.container.nativeElement.classList.remove("right-panel-active");
  }
}
