import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {IReaction} from "../Model/Reactions/IReaction";
import {IReactionCreate} from "../Model/Reactions/IReactionCreate";
import * as environment from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReactionService {

  //private reactionUrl = 'http://localhost:3000/api/reaction/';
  private reactionUrl = environment.environment.APIReaction;
  

  constructor(private http: HttpClient) { }

  createLike(like: IReactionCreate): Observable<IReaction> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post<IReaction>(this.reactionUrl , like, {headers, withCredentials: true});
  }

  createDislike(dislike: IReactionCreate): Observable<IReaction> {
    return this.http.post<IReaction>(this.reactionUrl , dislike);
  }

  totalDislikes(objectId : string): Observable<Number> {
    return this.http.get<Number>(this.reactionUrl + 'dislikes', {params: { oId: objectId }});
  }

  totalLikes(objectId: string): Observable<Number> {
    return this.http.get<Number>(this.reactionUrl + 'likes', {params: { oId: objectId }});
  }
}
