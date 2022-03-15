import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IIntroduction } from '../Model/IIntroduction';
import { IIntroductionUpdate } from '../Model/IIntroductionUpdate';


import * as environment from 'src/environments/environment';
import { IIntroductionCreate } from '../Model/IIntroductionCreate';

@Injectable({
  providedIn: 'root'
})
export class IntroductionService {

    //private introductionUrl = 'https://localhost:5001/mdrs/Introductions/';
    private introductionUrl = environment.environment.APIIntrudoction;

  constructor(private http: HttpClient) { }

  create(intro: IIntroductionCreate) {

    const headers = { 'Content-Type': 'application/json' };

    return this.http.post<IIntroductionCreate>(this.introductionUrl, { headers });
  }

  getIntroductionById(id: string): Observable<IIntroduction>{

    const headers = { 'Content-Type': 'application/json' };

    return this.http.get<IIntroduction>(this.introductionUrl + id, { headers });
  }

  getIntroductionsByUserId(id: string) {
    
    return this.http.get<IIntroductionUpdate[]>(this.introductionUrl + "byuser/" + id);
  }

  acceptIntroduction(id: string, it: IIntroduction){

    const headers = { 'Content-Type': 'application/json' };

    it.introductionState = 'APPROVED';
    
    return this.http.put<IIntroduction>(this.introductionUrl + id, it , { headers });
  }
  
  rejectIntroduction(id: string, it: IIntroduction){

    const headers = { 'Content-Type': 'application/json' };

    it.introductionState = 'REJECTED'

    return this.http.put<IIntroduction>(this.introductionUrl + id, it, { headers });
  }

  }
