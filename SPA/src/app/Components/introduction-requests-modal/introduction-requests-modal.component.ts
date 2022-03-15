import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IRelationshipCard } from '../../Model/IRelationshipCard';
import { IUser } from '../../Model/IUser';
import { IntroductionRequestService } from '../../Services/introduction-request.service';
import { RelationshipService } from '../../Services/relationship.service';

@Component({
  selector: 'app-introduction-requests-modal',
  templateUrl: './introduction-requests-modal.component.html',
  styleUrls: ['./introduction-requests-modal.component.css']
})
export class IntroductionRequestsModalComponent implements OnInit {


  @Input('commonFriends') commonFriends?: IUser[];
  @Input('userToId') userToId: string = '';
  @Input('userFromId') userFromId: string = '';

  public successMessage = '';
  public errorMessage = '';
  public requestSent: boolean | undefined;

  constructor(private itReqSvc: IntroductionRequestService) { }

  ngOnInit(): void {
  }

  sendRequest(form: NgForm) {

    this.itReqSvc.sendIntroductionRequest({
      userFrom: this.userFromId,
      userMiddle: form.value.userMiddle,
      userTo: this.userToId,
      requestMessage: form.value.requestMessage,
      presentationMessage: form.value.presentationMessage,
      introductionRequestState: 'PENDING'
    }).subscribe((data: any) => {
      this.requestSent = true
      this.successMessage = "Introduction request sent successfully."
    }, erro => {
      this.requestSent = false;
      this.errorMessage = erro.erro.message;
    })
  }

}
