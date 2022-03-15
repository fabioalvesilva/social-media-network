import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {CommentService} from "../../../Services/comment.service";
import {IUser} from "../../../Model/IUser";
import {UserService} from "../../../Services/user.service";

@Component({
  selector: 'app-comment-create',
  templateUrl: './comment-create.component.html',
  styleUrls: ['./comment-create.component.css']
})
export class CommentCreateComponent implements OnInit {

  @Input('postId') postId : string = "";

  private userId: any;
  public user = {} as IUser;

  constructor(private commentSvc: CommentService, private userSvc: UserService) { }

  ngOnInit(): void {
    this.userId = sessionStorage.getItem("id");

    if (this.userId != null) {
      this.userSvc.getUserById(this.userId).subscribe((data: any) => {
        this.user = data
      });
    }

  }

  addComment(form: NgForm) {

    let today = new Date().toLocaleDateString()
    let comment = form.value.comment
    let postId = this.postId

    console.log(comment)
    console.log(postId)
    console.log(today)

    this.commentSvc.createComment({
      text: comment,
      date: today,
      postId: postId,
      userId: this.userId,
      author: this.user.name
    }).subscribe((data: any) => {
      this.refresh()
    })
  }

  refresh(): void {
    window.location.reload();
  }
}
