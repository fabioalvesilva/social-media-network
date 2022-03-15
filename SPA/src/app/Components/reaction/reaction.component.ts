import {Component, Input, OnInit} from '@angular/core';
import {PostService} from "../../Services/post.service";
import {ReactionService} from "../../Services/reaction.service";
import {IPost} from "../../Model/Posts/IPost";
import {RelationshipService} from "../../Services/relationship.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-reaction',
  templateUrl: './reaction.component.html',
  styleUrls: ['./reaction.component.css']
})
export class ReactionComponent implements OnInit {


  /*
  * Reaction:
  * If 1 then Like
  * If -1 then Dislike
  *
  * ObjectType:
  * If 1 then Post
  * If 0 then Comment
  * */

  @Input('objectId') objectId! : string
  @Input('objectType') objectType! : number
  @Input('objectOwnerId') objectOwnerId! : string

  private userId: any;
  public totalLikes: Observable<Number> | undefined;
  public totalDisLikes: Observable<Number> | undefined;

  constructor(private reactionService: ReactionService, private relationshipSvc: RelationshipService) { }

  ngOnInit(): void {
    this.userId = sessionStorage.getItem("id");
    this.getLikes();
    this.getDislikes();
  }

  like(){
    let today = new Date().toLocaleDateString()
    this.reactionService.createLike({reaction: 1, date: today, userId: this.userId, objectId: this.objectId, objectType: this.objectType }).subscribe();
    this.getLikes();
    this.getDislikes();
  }

  dislike(){
    let today = new Date().toLocaleDateString()
    this.reactionService.createDislike({reaction: -1, date: today, userId: this.userId, objectId: this.objectId, objectType: this.objectType }).subscribe();
    this.getLikes();
    this.getDislikes();
  }

  getLikes(){
    this.totalLikes = this.reactionService.totalLikes(this.objectId);
  }

  getDislikes(){
    this.totalDisLikes = this.reactionService.totalDislikes(this.objectId);
  }
}
