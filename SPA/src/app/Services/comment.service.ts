import { Injectable } from '@angular/core';
import {ICommentCreate} from "../Model/Comments/ICommentCreate";
import { HttpClient, HttpParams } from '@angular/common/http';
import {IComment} from "../Model/Comments/IComment";
import {Observable} from "rxjs";
import * as environment from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  //private commentUrl = 'http://localhost:3000/api/comments/';
  private commentUrl = environment.environment.APIComment;

  constructor(private http: HttpClient) { }

  createComment(comment : ICommentCreate) : Observable<IComment>  {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post<IComment>(this.commentUrl, comment, { headers, withCredentials: true });
  }

  getCommentsByPost(pId: string) : Observable<IComment[]> {

    return this.http.get<IComment[]>(this.commentUrl + 'byPost', {params: { postId: pId }});
  }
}
