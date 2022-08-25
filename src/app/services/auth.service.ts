import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { User, sendUser, GetUser, GetUsers } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient ) { }
  
  userBaseUrl: string = environment.userBaseUrl;


  //Get user

  getUserById( id: string ): Observable< GetUsers >{
    return this.http.get< GetUsers >( `${ this.userBaseUrl }api/usuarios/${ id }`);
  };

  //Get users

  getUsersById(): Observable< GetUser >{
    return this.http.get< GetUser >( `${ this.userBaseUrl }api/usuarios`);
  };


  //Create users

  setUser( user: sendUser ): Observable < sendUser >{
    return this.http.post< sendUser >( `${ this.userBaseUrl }api/usuarios`, user );
  };
};
