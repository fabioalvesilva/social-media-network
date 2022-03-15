import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  userIsLogged(): boolean {
    return !!sessionStorage.getItem("id");
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['']);
  }
}
