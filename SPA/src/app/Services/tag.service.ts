import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITag } from '../Model/ITag';

import * as environment from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  //private tagsUrl = 'https://localhost:5001/mdrs/tags/';
    private tagsUrl = environment.environment.APITags;

  constructor(private http: HttpClient) { }

  getAllUsersTags(): Observable<ITag[]> {

    const headers = { 'Content-Type': 'application/json' };
    return this.http.get<ITag[]>(this.tagsUrl + 'allusertags', { headers });
  }

  getAllRelationshipTags(): Observable<ITag[]> {

    const headers = { 'Content-Type': 'application/json' };
    return this.http.get<ITag[]>(this.tagsUrl + 'allrelationshiptags', { headers });
  }

  getAllRelationshipTagsByUser(id: string): Observable<ITag[]> {

    const headers = { 'Content-Type': 'application/json' };
    return this.http.get<ITag[]>(this.tagsUrl + 'allrelationshiptagsbyuser/' + id, { headers });
  }

}
