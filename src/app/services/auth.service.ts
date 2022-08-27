import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { User, sendUser, GetUser, GetUsers, CreateUser } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient ) { }
  
  userBaseUrl: string = environment.userBaseUrl;


  //Get user ( login )
  getUserByMail( body: sendUser ): Observable< GetUser >{
    return this.http.post< GetUser >( `${ this.userBaseUrl }api/login`, body );
  };

  getUserById( id: string ): Observable< GetUser >{
    
    return this.http.get< GetUser >( `${ this.userBaseUrl }api/login`  );
  };

  //Get users
  getUsers(): Observable< GetUsers >{
    return this.http.get< GetUsers >( `${ this.userBaseUrl }api/usuarios`);
  };


  //Create users ( register )

  setUser( user: CreateUser ): Observable < sendUser >{
    return this.http.post< sendUser >( `${ this.userBaseUrl }api/usuarios`, user );
  };
};
