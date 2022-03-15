
import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { IIntroduction } from 'src/app/Model/IIntroduction';
import { IIntroductionUpdate } from 'src/app/Model/IIntroductionUpdate';
import { IntroductionService } from 'src/app/Services/introduction.service';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {

  public itSearched = {} as IIntroduction;
  public list: IIntroductionUpdate[] = [];
  public userId: string = "";
  public successMessage = '';
  public errorMessage = '';
  public requestSent: boolean | undefined;

  constructor(private introductionSvc: IntroductionService) { }

  ngOnInit(): void {
    this.userId = this.getUserId();
    this.getIntroductions();
  }

  getIntroductions() {
    this.introductionSvc.getIntroductionsByUserId(this.userId).subscribe((data: IIntroductionUpdate[]) => {

      this.list = data;
    });
  }


  getIntroductionById(id: string): IIntroduction {
    this.introductionSvc.getIntroductionById(id)
      .subscribe((data: IIntroduction) => this.itSearched = data);

    return this.itSearched;
  }


  acceptIntroduction(it: IIntroductionUpdate) {

    this.introductionSvc.acceptIntroduction(it.id, {
      id: it.id, introductionRequestId: it.introductionRequestId, userFrom: it.userFromId,
      userMiddle: it.userMiddleId, userTo: it.userToId, presentationMessage: it.presentationMessage,
      introductionMessage: it.introductionMessage, introductionState: it.introductionState,
      active: it.active
    }).subscribe((data: any) => {

      this.successMessage = "Your introduction has been accepted successfully."
      this.requestSent = true;

      delay(5000);
      this.refresh();

    }, error => {

      this.errorMessage = error.error.message
      this.requestSent = false;

    })
  }

  rejectIntroduction(it: IIntroductionUpdate) {

    this.introductionSvc.rejectIntroduction(it.id, {
      id: it.id, introductionRequestId: it.introductionRequestId, userFrom: it.userFromId,
      userMiddle: it.userMiddleId, userTo: it.userToId, presentationMessage: it.presentationMessage,
      introductionMessage: it.introductionMessage, introductionState: it.introductionState,
      active: it.active
    }).subscribe((data: any) => {

      this.successMessage = "Your introduction has been rejected successfully."
      this.requestSent = true;

      delay(5000);
      this.refresh();

    }, error => {

      this.errorMessage = error.message
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
