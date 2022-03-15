import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IUpdateUser } from '../../Model/IUpdateUser';
import { IUser } from '../../Model/IUser';
import { UserService } from '../../Services/user.service';
import { AuthService } from "../../Services/auth.service";

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  private userId: any;
  public user = {} as IUser;
  public updatedUser = {} as IUpdateUser;
  public tags: Array<string> = [];

  public successMessage = '';
  public errorMessage = '';

  public errorMoodMessage = '';


  constructor(private userSvc: UserService, public authService: AuthService) { }

  public moodUpdated: boolean | undefined;
  public detailsUpdated: boolean | undefined;

  ngOnInit(): void {
    this.userId = sessionStorage.getItem("id");
    if (this.userId != null) {
      this.userSvc.getUserById(this.userId).subscribe((data: any) => {
        this.user = data
      });
    }
  }

  updateProfile(form: NgForm) {

    this.userSvc.updateDetails(this.userId, {
      id: this.userId, name: form.value.name, email: this.user.email, password: this.user.password, birthdate: form.value.birthdate,
      phoneNumber: form.value.phoneNumber, facebook: form.value.facebook, linkedin: form.value.linkedin,
      mood: this.user.mood, tags: this.user.tags, avatar: this.user.avatar
    }).subscribe((data: any) => {
      this.user = data
      this.successMessage = "Your personal information has been updated successfully."
      this.detailsUpdated = true;
    }, error => {
      this.errorMessage = error.error.message;
      //this.errorMessage = "Error on updating. Please try again!"
      this.detailsUpdated = false;
    })

  }

  updateMood(form: NgForm) {

    this.updatedUser.id = this.userId;
    this.updatedUser.name = this.user.name;
    this.updatedUser.birthdate = this.user.birthdate;
    this.updatedUser.email = this.user.email;
    this.updatedUser.facebook = this.user.facebook;
    this.updatedUser.linkedin = this.user.linkedin;
    this.updatedUser.tags = this.user.tags;
    this.updatedUser.phoneNumber = this.user.phoneNumber;

    //The only atribute updated
    this.updatedUser.mood = form.value.mood;

    this.userSvc.updateMood(this.userId, {
      id: this.userId, name: this.user.name, email: this.user.email, password: this.user.password, birthdate: this.user.birthdate,
      phoneNumber: this.user.phoneNumber, linkedin: this.user.linkedin, facebook: this.user.facebook,
      mood: form.value.mood, tags: this.user.tags, avatar: this.user.avatar
    }).subscribe((data: any) => {
      this.user = data
      sessionStorage.setItem("mood", form.value.mood)
      this.moodUpdated = true
      this.refresh()
    }, error => {
      this.errorMoodMessage = error.error.message
      this.moodUpdated = false
    })
  }

  addTag(tag: string) {
    this.user.tags.push(tag)

    console.log(this.user.tags)
  }

  removeTag(tag: string) {
    const index: number = this.user.tags.indexOf(tag)
    this.tags.splice(index, 1)

    const indexn: number = this.user.tags.indexOf(tag)
    this.user.tags.splice(indexn, 1)
  }

  deactivateAccount() {
    this.userSvc.softDelete(this.userId).subscribe()
    this.authService.logout()
  }

  refresh(): void {
    window.location.reload();
  }
}
