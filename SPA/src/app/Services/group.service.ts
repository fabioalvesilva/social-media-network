import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IGroup } from '../Model/IGroup';

import * as environment from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

    private groupsUrl = environment.environment.APIPlanning;
    //private commentUrl = environment.environment.APIComment;
  
  constructor(private http: HttpClient) { }

  getAllSuggestedGroups(user: string, tagA: string, minNumUsers: number, numCommonTags: number ): Observable<IGroup> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.get<IGroup>(this.groupsUrl + 'GroupSuggestion' 
    , {params: { user: user, tagA: tagA, minNumUsers: minNumUsers,numCommonTags: numCommonTags}});
  }
}
