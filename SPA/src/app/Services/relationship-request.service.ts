import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRelationshipRequestCreate } from '../Model/IRelationshipRequestCreate';
import { IRelationshipRequestPending } from '../Model/IRelationshipRequestPending';
import { IRelationshipRequestUpdate } from '../Model/IRelationshipRequestUpdate';
import * as environment from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RelationshipRequestService {
  //private relationshipsRequestUrl = 'https://localhost:5001/mdrs/RelationshipRequests/';
  private relationshipsRequestUrl = environment.environment.APIRelationshipRequest;

  constructor(private http: HttpClient) { }

  getPendingRequests(userId: string) {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.get<IRelationshipRequestPending[]>(this.relationshipsRequestUrl + 'pending/' + userId, { headers });
  }

  sendRequest(request: IRelationshipRequestCreate) {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post<IRelationshipRequestCreate>(this.relationshipsRequestUrl, request, { headers });
  }

  sendRequestResponse(id: string, requestRes: IRelationshipRequestUpdate) {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.put<IRelationshipRequestUpdate>(this.relationshipsRequestUrl + id, requestRes, { headers });
  }
}
