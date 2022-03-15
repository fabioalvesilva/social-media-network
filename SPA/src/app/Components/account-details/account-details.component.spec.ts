import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgForm } from '@angular/forms';
import { AccountDetailsComponent } from './account-details.component';
import { IUser } from 'src/app/Model/IUser';

describe('AccountDetailsComponent', () => {
  let component: AccountDetailsComponent;
  let fixture: ComponentFixture<AccountDetailsComponent>;
  let tags: Array<string> = [];
  let text: string = "[]";
  let user: IUser = {
    id: "string",
    name: "string",
    email: "string",
    password: "string",
    birthdate: "string",
    phoneNumber: "string",
    linkedin: "string",
    facebook: "string",
    mood: "string",
    tags: tags,
    avatar: "string"
  }
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        HttpClientTestingModule
      ],
      declarations: [AccountDetailsComponent, NgForm]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
