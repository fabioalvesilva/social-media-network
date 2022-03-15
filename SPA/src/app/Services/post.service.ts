import { Injectable } from '@angular/core';
import { IPostCreate } from '../Model/Posts/IPostCreate';
import { IPost } from '../Model/Posts/IPost';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Observable} from "rxjs";
import {ICommentCreate} from "../Model/Comments/ICommentCreate";
import * as environment from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  //private postUrl = 'http://localhost:3000/api/post/';
  private postUrl = environment.environment.APIPost;
  
  constructor(private http: HttpClient) { }

  getFeed() : Observable<IPost[]> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.get<IPost[]>(this.postUrl, { headers, withCredentials: true });
  }

  getUserPosts(id: string) : Observable<IPost[]> {
    return this.http.get<IPost[]>(this.postUrl + 'userPosts', {params: { userId: id }});
  }

  addPost(post : IPostCreate) {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post<IPost>(this.postUrl, post, { headers, withCredentials: true });
  }

  deletePost() {

  }
}
