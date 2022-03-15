import {Component, Input, OnInit} from '@angular/core';
import {IUser} from "../../Model/IUser";
import {UserService} from "../../Services/user.service";
import {Observable} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './public-profile.component.html',
  styleUrls: ['./public-profile.component.css']
})
export class PublicProfileComponent implements OnInit {

  public friendsThirdLevel: IUser[] = [];
  public user = {} as IUser;
  public userId = "" as string;
  constructor(private userSvc: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userId = String(this.route.snapshot.paramMap.get('id'));
    this.getUser()
    this.getUserFriendsThirdLevel();
  }

  getUser() : void{
    if (this.userId != null) {
       this.userSvc.getUserById(this.userId).subscribe(data => this.user = data);
    }
  }

  getUserFriendsThirdLevel() : void{
    if (this.userId != null) {
       this.userSvc.getUserFriendsThirdLevel(this.userId).subscribe((data: any) => {
        this.friendsThirdLevel = data
      })
    }
  }

}
