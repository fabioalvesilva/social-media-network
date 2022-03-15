import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { IRelationshipRequest } from '../../Model/IRelationshipRequest';
import { IRelationshipRequestPending } from '../../Model/IRelationshipRequestPending';
import { IRelationshipRequestUpdate } from '../../Model/IRelationshipRequestUpdate';
import { RelationshipRequestService } from '../../Services/relationship-request.service';

@Component({
    selector: 'app-relationships-requests',
    templateUrl: './relationships-requests.component.html',
    styleUrls: ['./relationships-requests.component.css']
})
export class RelationshipsRequestsComponent implements OnInit {

    public list: IRelationshipRequestPending[] = [];
    public userId: string = "";
    public clicked = false;
    public requestSent: boolean | undefined;
    public errorMessage = "";

    constructor(private svc: RelationshipRequestService) {

    }

    ngOnInit(): void {
        this.userId = this.getUserId();
        this.getRequests();
    }

    getUserId(): string {
        var id = sessionStorage.getItem('id');
        if (id != null) {
            return id;
        }
        return '';
    }

    rejectRequest(request: IRelationshipRequestPending) {
        this.svc.sendRequestResponse(request.id, { id: request.id, relationshipRequestState: "REJECTED", userFrom: request.userFromId, userTo: this.userId }).subscribe((data: any) => {
            this.requestSent = true;
        }, error => {
            this.requestSent = false;
            this.errorMessage = error.error.message;
        })
    }

    acceptRequest(request: IRelationshipRequestPending) {
        this.svc.sendRequestResponse(request.id, { id: request.id, relationshipRequestState: "APPROVED", userFrom: request.userFromId, userTo: this.userId }).subscribe((data: any) => {
            this.requestSent = true;
            delay(5000);
            this.refresh();
        }, error => {
            this.requestSent = false;
            this.errorMessage = error.error.message;
        })
    }

    getRequests() {
        this.svc.getPendingRequests(this.userId).subscribe((data: IRelationshipRequestPending[]) => {
            this.list = data;
        })
    }

  refresh(): void {
    window.location.reload();
  }
}
