import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from '../../../Services/post.service';
import {UserService} from "../../../Services/user.service";
import {IUser} from "../../../Model/IUser";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  public successMessage = '';
  public errorMessage = '';
  public postCreated: boolean | undefined;
  private userId: any;
  public user = {} as IUser;

  constructor(private postService: PostService, private userSvc: UserService) { }

  ngOnInit(): void {
    this.userId = sessionStorage.getItem("id");

    if (this.userId != null) {
      this.userSvc.getUserById(this.userId).subscribe((data: any) => {
        this.user = data
      });
    }
  }

  addPost(form: NgForm) {

    let today = new Date().toLocaleDateString()

	this.postService.addPost({
      text: form.value.post,
      date: today,
      userId: this.userId,
      author: this.user.name
    }).subscribe((data: any) => {
      this.postCreated = true
      this.successMessage = "Post created successfully."
      this.refresh()
    }, (erro: { message: string; }) => {
      this.postCreated = false;
      this.errorMessage = erro.message;
    })
  }

  refresh(): void {
    window.location.reload();
  }

}
