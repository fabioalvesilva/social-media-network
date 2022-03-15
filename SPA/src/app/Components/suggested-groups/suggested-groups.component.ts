import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IGroup } from 'src/app/Model/IGroup';
import { IUser } from 'src/app/Model/IUser';
import { GroupService } from 'src/app/Services/group.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-suggested-groups',
  templateUrl: './suggested-groups.component.html',
  styleUrls: ['./suggested-groups.component.css']
})
export class SuggestedGroupsComponent implements OnInit {

  public list: IUser[] = [];
  public userName: string = "";
  public nrTags: number = 0;
  public nrUsers: number = 0;
  public groupSuggested: IGroup | undefined;
  public usersGroup: string[] | undefined;
  public tagsGroup: string[] | undefined;
  public groupFound: boolean | undefined;
  public errorMessage = '';
  public errorFound: boolean | undefined;

  constructor(private grpServ: GroupService, private userSvc: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userName = this.getUserId();
  }

  getUserId(): string {
    var id = sessionStorage.getItem('name');

    if (id != null) {
      return id;
    }
    return '';
  }

  getAllSuggestedGroups(form: NgForm) {

    this.grpServ.getAllSuggestedGroups(this.userName, form.value.tagA, form.value.minNumUsers, form.value.numCommonTags).subscribe((data: any) => {
      this.list = [];
      this.groupSuggested = data
      this.nrTags = data.tags.length;
      this.nrUsers = data.users.length;
      this.usersGroup = data.users;
      this.tagsGroup = data.tags;
      this.groupFound = true;
      this.errorFound = false;

      data.users.forEach((element: any) => {
        this.getUserByName(element);
      });

    }, erro => {

      this.groupFound = false;
      this.errorFound = true;
      this.errorMessage = "No group available"
    })
  }

  getUserByName(name: string) {
    this.userSvc.getUserByName(name).subscribe((data: any) => {
      this.list.push(data);
    })
  }

  viewUserProfile(id: string){
    this.router.navigateByUrl('/account/' + id + '/profile/' + id );
  }
}