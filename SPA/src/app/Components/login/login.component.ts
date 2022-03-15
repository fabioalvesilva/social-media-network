import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ILogin } from '../../Model/ILogin';
import { LoginService } from '../../Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loginCredentials = {} as ILogin;
  public flag: boolean | undefined;
  public successMessage = '';
  public errorMessage = '';

  constructor(private loginSvc: LoginService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  login(form: NgForm) {

    if (form.value.email != '' && form.value.password != '') {

      this.loginCredentials.email = form.value.email;
      this.loginCredentials.password = form.value.password;

      this.loginSvc.login(this.loginCredentials)
        .subscribe((data: any) => {
            sessionStorage.setItem("id", data.id);
            sessionStorage.setItem("name", data.name);
            sessionStorage.setItem("mood", data.mood);
            sessionStorage.setItem("avatar", data.avatar);
            this.router.navigateByUrl('/account/' + data.id + '/feed');
        }, error => {
          this.errorMessage= error.error.message;
          this.flag = false
        });

    } else {
      this.errorMessage = "Missing email or password";
      this.flag = false
    }
  }
}
