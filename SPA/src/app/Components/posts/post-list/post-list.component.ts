import {Component, Input, OnInit} from '@angular/core';
import { PostService } from '../../../Services/post.service';
import {IPost} from "../../../Model/Posts/IPost";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  private userId: any;
  public posts: IPost[] = [];
  public postsFound: boolean | undefined;

  /*
  * userPostsFlag
  * If 'true' - Get users Posts only
  * If 'false' - Get feed of user
  * */

  @Input('userPostsFlag') flag! : boolean
  @Input('userPostsId') userPostsId! : string

  constructor(private postService: PostService) { }

  ngOnChanges(): void {
    this.userId = sessionStorage.getItem("id");

    if (!this.flag) {
      this.getFeed();
    } else {
      this.getUserPosts(this.userPostsId);
    }
  }

  getFeed() {
    this.postService.getFeed().subscribe((data: IPost[]) => {
      this.posts = data
      if (this.posts != null) {
        this.postsFound = true;
      } else {
        this.postsFound = false;
      }
    }, error => {
      this.postsFound = false;
    })
  }


  getUserPosts(id : string) {
    this.postService.getUserPosts(id).subscribe((data: IPost[]) => {
      this.posts = data
      if (this.posts != null) {
        this.postsFound = true;
      } else {
        this.postsFound = false;
      }
    }, error => {
      this.postsFound = false;
    })
  }

  ngOnInit(): void {
  }

}
