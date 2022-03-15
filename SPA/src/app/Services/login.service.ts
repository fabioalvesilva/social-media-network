import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ILogin } from '../Model/ILogin';
import { IUser } from '../Model/IUser';

import * as environment from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //private loginUrl = 'https://localhost:5001/mdrs/auth/';
  private loginUrl = environment.environment.APIAuth;
  

  constructor(private http: HttpClient) { }

  login(login: ILogin): Observable<IUser> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post<IUser>(this.loginUrl, login, { headers, withCredentials: true });
  }
}
