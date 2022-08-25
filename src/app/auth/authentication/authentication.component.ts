import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { sendUser, CreateUser } from '../../interface';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  @ViewChild("container") container !: ElementRef;
  

  constructor( private fb: FormBuilder, private authServ: AuthService ) {
  }

  ngOnInit(): void {
  }

  loginUser: sendUser = {
    correo  : '',
    password: ''
  }

  registerUser: CreateUser = {
    nombre  : '',
    correo  : '',
    password: ''
  }


  loginForm: FormGroup = this.fb.group({

    email   : [ , [ Validators.required ] ],
    password: [ , [ Validators.required ] ]
  })


  registerForm: FormGroup = this.fb.group({

    name    : [   , [ Validators.required                   ] ],
    email   : [   , [ Validators.required, Validators.email ] ],
    password: [   , [ Validators.required, Validators.minLength( 6 ) ] ]
  })


  login(){

    if( this.inputsValidation( false ) ){
      //Dosman manipulara el DOM para mostrar error
    }

    this.loginUser.correo = this.loginForm.value.email;
    this.loginUser.password = this.loginForm.value.password;
    this.getLoginInfo();
  };

  register(){

    if( this.inputsValidation( true ) ){
      //Dosman manipulara el DOM para mostrar error
    }

    this.registerUser.nombre    = this.registerForm.value.name    ;
    this.registerUser.correo    = this.registerForm.value.email   ;
    this.registerUser.password  = this.registerForm.value.password;

    this.sendRegisterInfo();
  };
  



  inputsValidation( isValidatingName: boolean ): boolean {

   const resultado = (isValidatingName ) ? !this.registerForm.invalid  : !this.loginForm.invalid;
   return resultado;
  };



  getLoginInfo(){

    this.authServ.getUserByMail( this.loginUser  )
    .subscribe( data => console.log( data ));

    this.cleanForms();
  };



  sendRegisterInfo(){
    
    this.authServ.setUser( this.registerUser )
    .subscribe( data => console.log( data ) );

    this.cleanForms();
  };



  cleanForms(){

    this.loginForm.reset();
    this.registerForm.reset();
  }
  animationMovement ( index: number ) {

    if( index == 0 )  this.container.nativeElement.classList.add   ("right-panel-active");
    else              this.container.nativeElement.classList.remove("right-panel-active");
  };
};
