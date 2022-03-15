import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IIntroductionRequest } from '../Model/IIntroductionRequest';
import { IIntroductionRequestCard } from '../Model/IIntroductionRequestCard';
import { IIntroductionRequestCreate } from '../Model/IIntroductionRequestCreate';
import { IIntroductionRequestUpdate } from '../Model/IIntroductionRequestUpdate';

import * as environment from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class IntroductionRequestService {

    private introductionUrl = environment.environment.APIIntrudoctionRequest;
    //private introductionUrl = 'https://localhost:5001/mdrs/IntroductionRequests/';

    constructor(private http: HttpClient) { }

  getIntroductionRequestById(id: string): Observable<IIntroductionRequest>{

    const headers = { 'Content-Type': 'application/json' };

    return this.http.get<IIntroductionRequest>(this.introductionUrl + id, { headers });
  }

  getIntroductionsRequestByUserId(id: string) {
    
    return this.http.get<IIntroductionRequestCard[]>(this.introductionUrl + "byuser/" + id);
  }

  acceptIntroductionRequest(id: string, it: IIntroductionRequestUpdate){

    const headers = { 'Content-Type': 'application/json' };

    it.introductionRequestState = 'APPROVED';
    
    return this.http.put<IIntroductionRequestUpdate>(this.introductionUrl + id, it , { headers });
  }
  
  rejectIntroductionRequest(id: string, it: IIntroductionRequestUpdate){

    const headers = { 'Content-Type': 'application/json' };

    it.introductionRequestState = 'REJECTED'

    return this.http.put<IIntroductionRequestUpdate>(this.introductionUrl + id, it, { headers });
  }

  sendIntroductionRequest(it: IIntroductionRequestCreate){

    const headers = { 'Content-Type': 'application/json' };    

    return this.http.post<IIntroductionRequestCreate>(this.introductionUrl, it, { headers });
  }

  }
