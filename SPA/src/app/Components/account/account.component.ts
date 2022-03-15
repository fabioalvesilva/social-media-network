import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { IUser } from '../../Model/IUser';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  public userName: string = "";
  public userMood: string = "";
  public nUsers: number = 0;
  public userId: string = "";
  public userNetworktStrength: string = '';
  public user = {} as IUser;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    public authService: AuthService) { }

  ngOnInit(): void {
    this.userName = this.getUserName();
    this.userMood = this.getUserMood();
    this.userId = this.getUserId();
    this.getAllUsers();
    this.getUserNetworkStrength();

    if (this.userId != null) {
      this.userService.getUserById(this.userId).subscribe((data: any) => {
        this.user = data
      });
    }
  }

  getUserId(): string {
    let id = sessionStorage.getItem('id');
    if (id != null) {
      return id;
    }
    return '';
  }

  getUserName(): string {
    let name = sessionStorage.getItem('name');
    if (name != null) {
      return name;
    }
    return '';
  }

  getUserMood(): string {
    let mood = sessionStorage.getItem('mood');
    if (mood != null) {
      return mood;
    }
    return '';
  }

  getAllUsers() {
    this.userService.getAll()
        .subscribe((data : any) => {
          this.nUsers = data});
  }

  getUserNetworkStrength() {
    this.userService.getUserNetworkStrength(this.userId)
        .subscribe((data : any) => {this.userNetworktStrength = data});
  }

}
