import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../Model/IUser';
import { IUserCreate } from '../Model/IUserCreate';
import { IUpdateUser } from '../Model/IUpdateUser';

import * as environment from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //private usersUrl = 'https://localhost:5001/mdrs/users/';
    private usersUrl = environment.environment.APIUser;

  constructor(private http: HttpClient) { }

  getAllUsers(id: string): Observable<IUser[]> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.get<IUser[]>(this.usersUrl + 'allUsers/' + id, { headers });
  }

  getAll(): Observable<Number> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.get<Number>(this.usersUrl + 'allUsers/', { headers });
  }

  getUserByEmail(email: string): Observable<IUser> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.get<IUser>(this.usersUrl + 'search/' + email, { headers });
  }

  getUserConnections(id: string): Observable<Array<IUser>> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.get<Array<IUser>>(this.usersUrl + 'search/' + id, { headers });
  }

  getUserById(id: string): Observable<IUser> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.get<IUser>(this.usersUrl + id, { headers });
  }

  getUserByName(name: string): Observable<IUser> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.get<IUser>(this.usersUrl + "getUserByName/"+ name, { headers });
  }

  getSuggestedFriendsById(id: string): Observable<IUser[]> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.get<IUser[]>(this.usersUrl + 'suggestedfriends/' + id, { headers });
  }

  createUser(user: IUserCreate): Observable<IUser> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post<IUser>(this.usersUrl, user, { headers, withCredentials: true });
  }

  updateMood(id: string, user: IUpdateUser): Observable<IUser> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.put<IUpdateUser>(this.usersUrl + id, user, { headers });
  }

  updateDetails(id: string, user: IUpdateUser): Observable<IUser> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.put<IUpdateUser>(this.usersUrl + id, user, { headers });
  }

  getCommonFriends(userFromId: string, userToId: string) {
    const headers = { 'Content-Type': 'application/json' }
    return this.http.get<IUser[]>(this.usersUrl + "commonFriends/" + userFromId + "/" + userToId, { headers });
  }

  getUserNetworkStrength(userId: string): Observable<string> {
    return this.http.get<string>(this.usersUrl + 'networkStrength/' + userId);
  }

  softDelete(userId: string) {
    const headers = { 'Content-Type': 'application/json' }
    return this.http.delete<IUser>(this.usersUrl + userId, { headers });
  }

  getUserFriendsThirdLevel(userId: string) {
    const headers = { 'Content-Type': 'application/json' }
    return this.http.get<IUser[]>(this.usersUrl + "friendsthirdlevel/" + userId, { headers });
  }
}
