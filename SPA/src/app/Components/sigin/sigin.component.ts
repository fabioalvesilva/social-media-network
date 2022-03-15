import { HttpClient } from '@angular/common/http';
import { AfterViewInit, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IUser } from 'src/app/Model/IUser';
import { UserService } from 'src/app/Services/user.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.css']
})
export class SiginComponent implements OnInit {

  ngOnInit() {
  }

  tags: Array<string> = [];
  username = "";
  registerSuccess: boolean | undefined;
  addedTag: boolean | undefined;
  errorMessage = "";

  constructor(private userSvc: UserService) { }

  AddTag(tag: string) {

    this.tags.unshift(tag);
    this.addedTag = true;
  }

  create(form: NgForm) {
    this.userSvc.createUser({
      name: form.value.userName, email: form.value.email, password: form.value.password, birthdate: form.value.birthdate,
      phoneNumber: form.value.phoneNumber, facebook: form.value.facebook, linkedin: form.value.linkedin,
      mood: form.value.mood, tags: this.tags, avatar: form.value.avatar
    })
      .subscribe((data: any) => {
        this.username = data.name;
        this.registerSuccess = true;

      }, error => {
        this.errorMessage = error.error.message;
        this.registerSuccess = false;
      })
  }
}
