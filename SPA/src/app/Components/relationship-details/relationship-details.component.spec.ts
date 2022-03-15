import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgForm } from '@angular/forms';
import { RelationshipDetailsComponent } from './relationship-details.component';
import { IRelationshipCard } from 'src/app/Model/IRelationshipCard';

describe('RelationshipDetailsComponent', () => {
  let component: RelationshipDetailsComponent;
  let fixture: ComponentFixture<RelationshipDetailsComponent>;
  let listTag: Array<string> = [];
  let relationshipCard: IRelationshipCard = {
    id: "0",
    userFromId: "0",
    userFromName: "0",
    userToId: "0",
    userToName: "0",
    listTag: listTag,
    connectionStrength: 0,
    relationshipStrength: 0,
    relationshipRequestId: "0"
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        HttpClientTestingModule
      ],
      declarations: [RelationshipDetailsComponent, NgForm]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelationshipDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
