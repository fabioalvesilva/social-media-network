import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { IIntroductionRequest } from 'src/app/Model/IIntroductionRequest';
import { IIntroductionRequestUpdate } from 'src/app/Model/IIntroductionRequestUpdate';
import { IIntroductionRequestCard } from 'src/app/Model/IIntroductionRequestCard';
import { IntroductionRequestService } from 'src/app/Services/introduction-request.service';
import { IntroductionService } from '../../Services/introduction.service';
import { IIntroductionCreate } from '../../Model/IIntroductionCreate';

@Component({
  selector: 'app-introduction-requests',
  templateUrl: './introduction-requests.component.html',
  styleUrls: ['./introduction-requests.component.css']
})
export class IntroductionRequestsComponent implements OnInit {

  public itSearched = {} as IIntroductionRequest;
  public list: IIntroductionRequestCard[] = [];
  public introduction= {} as IIntroductionCreate;
  public userId: string = "";
  public successMessage = '';
  public errorMessage = '';
  public requestSent: boolean | undefined;
  public clicked = false;

  constructor(private introductionRequestSvc: IntroductionRequestService, private introSvc: IntroductionService) { }



  ngOnInit(): void {
    this.userId = this.getUserId();
    this.getIntroductionRequests();
  }

  getIntroductionRequests() {
    this.introductionRequestSvc.getIntroductionsRequestByUserId(this.userId).
      subscribe((data: IIntroductionRequestCard[]) => {

        this.list = data;
      });
  }


  getIntroductionRequestById(id: string): IIntroductionRequest {
    this.introductionRequestSvc.getIntroductionRequestById(id)
      .subscribe((data: IIntroductionRequest) => this.itSearched = data);

    return this.itSearched;
  }


  acceptIntroductionRequest(it: IIntroductionRequestCard) {

    this.introductionRequestSvc.acceptIntroductionRequest(it.id, {
      id: it.id, userFrom: it.userFromId, userMiddle: it.userMiddleId, userTo: it.userToId,
      requestMessage: it.requestMessage, presentationMessage: it.presentationMessage,
      introductionRequestState: it.introductionRequestState, active: it.active
    }).subscribe((data: any) => {

      this.successMessage = "Introduction request has been accepted."
      this.requestSent = true;
      delay(5000);
      this.refresh();
    }, error => {
      this.errorMessage = error.error.message
      this.requestSent = false;
    })
  }

  rejectIntroductionRequest(it: IIntroductionRequestCard) {

    this.introductionRequestSvc.rejectIntroductionRequest(it.id, {
      id: it.id, userFrom: it.userFromId, userMiddle: it.userMiddleId, userTo: it.userToId,
      requestMessage: it.requestMessage, presentationMessage: it.presentationMessage,
      introductionRequestState: it.introductionRequestState, active: it.active
    }).subscribe((data: any) => {
      this.successMessage = "Introduction request has been rejected"
      this.requestSent = true;
      delay(5000);
      this.refresh();
    }, error => {
      this.errorMessage = error.error.message
      this.requestSent = false;

    })
  }

  getUserId(): string {
    var id = sessionStorage.getItem('id');

    if (id != null) {
      return id;
    }
    return '';
  }

  refresh(): void {
    window.location.reload();
  }


}
