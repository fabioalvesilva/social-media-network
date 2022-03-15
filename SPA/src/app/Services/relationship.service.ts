import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRelationship } from '../Model/IRelationship';
import { IRelationshipCard } from '../Model/IRelationshipCard';
import * as environment from 'src/environments/environment';
import { IUserLeaderBoard } from '../Model/IUserLeaderboard';
@Injectable({
  providedIn: 'root'
})
export class RelationshipService {

  //private relationshipsUrl = 'https://localhost:5001/mdrs/relationships/';
  private relationshipsUrl = environment.environment.APIRelationship;

  constructor(private http: HttpClient) { }

  getAllRelationshipsByUser(id: string): Observable<IRelationshipCard[]> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.get<IRelationshipCard[]>(this.relationshipsUrl + "friends/" + id, { headers });
  }

  update(id: string, relation: IRelationship) {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.put<IRelationship>(this.relationshipsUrl + id, relation, { headers });
  }

  updateConnectionStrength(userId: string, objectOwnerId: string, value: number) {
    return this.http.put<IRelationship>(this.relationshipsUrl + 'connectionStrength', { userFrom: userId, userTo: objectOwnerId, reaction: value });
  }

  getLeaderboardRelationshipsByNetworkDimension(): Observable<IUserLeaderBoard[]> {

    const headers = { 'Content-Type': 'application/json' };
    return this.http.get<IUserLeaderBoard[]>(this.relationshipsUrl + 'leaderboardByNetworkDimension/', { headers });
  }

  getLeaderboardRelationshipsByNetworkFortress(): Observable<IUserLeaderBoard[]> {

    const headers = { 'Content-Type': 'application/json' };
    return this.http.get<IUserLeaderBoard[]>(this.relationshipsUrl + 'leaderboardByNetworkFortress/', { headers });
  }
}


