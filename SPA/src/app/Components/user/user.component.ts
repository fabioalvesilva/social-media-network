import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/Model/IUser';
import { UserService } from 'src/app/Services/user.service';
import { NgForm } from '@angular/forms';
import { IntroductionRequestService } from 'src/app/Services/introduction-request.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public userTo: string = '';
  public userToId: string = '';
  public list: IUser[] = [];
  public commonFriends: IUser[] = [];
  public userId: string = "";
  public successMessage = '';
  public errorMessage = '';
  public requestSent: boolean | undefined;

  constructor(private userSvc: UserService, private itReqSvc: IntroductionRequestService, private router: Router) { }

  ngOnInit(): void {
    this.userId = this.getUserId();
    this.getAllUsers();
  }

  getAllUsers() {
    this.userSvc.getAllUsers(this.userId).subscribe((data: IUser[]) => {
    this.list = data;
    });
  }

  getUserId(): string {
    var id = sessionStorage.getItem('id');

    if (id != null) {
      return id;
    }
    return '';
  }

  viewUserProfile(id: string){
    this.router.navigateByUrl('/account/' + this.userId + '/profile/' + id );
  }

  sendRequest(form: NgForm) {
    var arrayForm = Array<string>();
    arrayForm = form.value;

    var userM: string = Object.values(arrayForm)[1];
    var reqMess: string = Object.values(arrayForm)[2];
    var presMess: string = Object.values(arrayForm)[3];

    this.itReqSvc.sendIntroductionRequest({
      userFrom: this.userId, userMiddle: userM,
      userTo: this.userTo, requestMessage: reqMess, presentationMessage: presMess,
      introductionRequestState: 'PENDING'
    }).subscribe((data: any) => {
      this.requestSent = true
      this.successMessage = "Introduction request sent successfully."
    }, erro => {
      this.requestSent = false;
      this.errorMessage = erro.erro.message;
    })
  }

  getCommonFriends(userToId: string) {
    this.userToId = userToId;
    this.userSvc.getCommonFriends(this.userId, this.userToId).subscribe((data: any) => {
      this.commonFriends = data
    })
  }
}
