import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IRelationship } from '../../Model/IRelationship';
import { IRelationshipCard } from '../../Model/IRelationshipCard';
import { IUser } from '../../Model/IUser';
import { RelationshipRequestService } from '../../Services/relationship-request.service';
import { RelationshipService } from '../../Services/relationship.service';
import { UserService } from '../../Services/user.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-relationships',
  templateUrl: './relationships.component.html',
  styleUrls: ['./relationships.component.css']
})
export class RelationshipsComponent implements OnInit {

  public userSearched = {} as IUser;
  public relationshipSelected?: any;
  public userFound: boolean | undefined;
  public userId: string = "";
  public friends: IRelationshipCard[] = [];
  public friendsFound: boolean | undefined;
  public requestSent: boolean | undefined;
  public editDetails = false;
  public clicked = false;
  public errorMessage = '';
  public successMessage = ''; 

  constructor(private userSvc: UserService, private relationshipSvc: RelationshipService,
              private relationshipRequestSvc: RelationshipRequestService,
              private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.userId = this.getUserId();
    this.getUserConnections();
  }

  searchUser(form: NgForm) {

    this.userSvc.getUserByEmail(form.value.userEmail).subscribe((data: any) => {
      this.userSearched = data
      this.userFound = true
      this.clicked = false;
    }, error => {
      this.userFound = false
      this.errorMessage = error.message
    })
  }

  viewUserProfile(id: string){
    this.router.navigateByUrl('/account/' + this.userId + '/profile/' + id );
  }

  getUserConnections() {
    this.relationshipSvc.getAllRelationshipsByUser(this.userId).subscribe((data: IRelationshipCard[]) => {
      this.friends = data

      if (this.friends != null) {
        this.friendsFound = true;
      } else {
        this.friendsFound = false;
      }
    }, error => {
      this.friendsFound = false;
    })
  }

  getUserId(): string {
    let id = sessionStorage.getItem('id');
    if (id != null) {
      return id;
    }
    return '';
  }

  relationshipSelect(r: any) {
    this.relationshipSelected = r
  }


  sendRequest(userToId: string) {
    this.relationshipRequestSvc.sendRequest({ userFrom: this.userId, userTo: userToId }).subscribe((data: any) => {
      this.requestSent = true
      this.successMessage = "Resquest sent successfully."
      this.clicked = true;
   }, erro => {
      this.requestSent = false;
      this.errorMessage = erro.erro.message
      this.clicked = false;
   })
   }

}
