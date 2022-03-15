import { Input, NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { RelationshipService } from '../../Services/relationship.service';

@Component({
    selector: 'app-relationship-details',
    templateUrl: './relationship-details.component.html',
    styleUrls: ['./relationship-details.component.css']
})
export class RelationshipDetailsComponent implements OnInit {

    @Input('relationship') relationship?: any;
    public tagsUpdateList: Array<string> = [];
    public relationUpdated: boolean | undefined;
    public successMessage = '';
    public errorMessage = '';

    constructor(private svc: RelationshipService) { }

    ngOnChange(): void {
        this.tagsUpdateList = this.relationship.listTag
        console.log(this.relationship);
    }

    ngOnInit(): void {
    }

    update(connectionS: string) {
        let connectStrength = Number(connectionS)
        //console.log(connectStrength);
        this.svc.update(this.relationship.id, {
            id: this.relationship.id, userFrom: this.relationship.userFromId, userTo: this.relationship.userToId, listTag: this.relationship.listTag, connectionStrength: connectStrength,
            relationshipStrength: this.relationship.relationshipStrength, relationshipRequestId: this.relationship.relationshipRequestId, active: this.relationship.active
        }).subscribe((data: any) => {
            this.successMessage = "The relationship has been updated successfully."
            this.relationUpdated = true
            this.refresh()
        }, error => {
            this.errorMessage = error.error.message
            this.relationUpdated = false
        })
    }

    addTag(tag: string) {

        this.relationship.listTag.push(tag)
        this.tagsUpdateList.push(tag)
    }

    removeTag(tag: string) {
        const index: number = this.tagsUpdateList.indexOf(tag)
        this.tagsUpdateList.splice(index, 1)

        const indexn: number = this.relationship.listTag.indexOf(tag)
        this.relationship.listTag.splice(indexn, 1)
    }

    refresh(): void {
        window.location.reload();
    }
}
