import {Component, Input, OnInit} from '@angular/core';
import {CommentService} from "../../../Services/comment.service";
import {IComment} from "../../../Model/Comments/IComment";
import {IPost} from "../../../Model/Posts/IPost";

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  @Input('postId') postId: string = "";

  public comments: IComment[] = [];
  public commentsFound: boolean | undefined;

  constructor(private commentSvc: CommentService) { }

  ngOnInit(): void {
    this.getComments(this.postId);
  }

  getComments(postId : string) {

    this.commentSvc.getCommentsByPost(postId).subscribe((data: IComment[]) => {
      this.comments = data
      if (this.commentsFound != null) {
        this.commentsFound = true;
      } else {
        this.commentsFound = false;
      }
    }, error => {
      this.commentsFound = false;
    })
  }
}
