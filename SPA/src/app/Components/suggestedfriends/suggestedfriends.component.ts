import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/Model/IUser';
import { RelationshipRequestService } from 'src/app/Services/relationship-request.service';
import { UserService } from 'src/app/Services/user.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-suggestedfriends',
  templateUrl: './suggestedfriends.component.html',
  styleUrls: ['./suggestedfriends.component.css']
})
export class SuggestedfriendsComponent implements OnInit {

  public list: IUser[] = [];
  public userId: string = "";
  public requestSent: boolean | undefined;
  public editDetails = false;
  public clicked = false;
  public errorMessage = '';
  public successMessage = '';

  constructor(private userSvc: UserService, private relationshipRequestSvc: RelationshipRequestService, private router: Router) { }

  ngOnInit(): void {
    this.userId = this.getUserId();
    this.getSuggestedFriends();
  }

  getSuggestedFriends() {
    this.userSvc.getSuggestedFriendsById(this.userId).subscribe((data: IUser[]) => {
      this.list = data;
    });
  }

  viewUserProfile(id: string){
    this.router.navigateByUrl('/account/' + this.userId + '/profile/' + id );
  }

  getUserId(): string {
    var id = sessionStorage.getItem('id');
    if (id != null) {
      return id;
    }
    return '';
  }

  sendRequest(userToId: string) {
    this.relationshipRequestSvc.sendRequest({ userFrom: this.userId, userTo: userToId }).subscribe((data: any) => {
      this.requestSent = true
      this.successMessage = "Request sent successfully."
   }, erro => {
      this.requestSent = false;
      this.errorMessage = erro.erro.message
   })
   }

}
