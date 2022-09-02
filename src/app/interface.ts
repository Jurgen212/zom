
export interface GetUsers {
    total: number;
    users: User[];
}

export interface GetUser {
    user: User;
}


export interface User {
    nombre  : string    ;
    correo  : string    ;
    estado  : boolean   ;
    google  : boolean   ;
    uid     : string    ;
}

export interface CreateUser {
    nombre  :   string;
    correo  :   string;
    password:   string;
}


export interface sendUser{
    correo  : string;
    password: string;
}


  