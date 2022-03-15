import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SuggestedGroupsComponent } from './suggested-groups.component';
import { NgForm } from '@angular/forms';

describe('SuggestedGroupsComponent', () => {
  let component: SuggestedGroupsComponent;
  let fixture: ComponentFixture<SuggestedGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        HttpClientTestingModule
      ],
      declarations: [SuggestedGroupsComponent, NgForm]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestedGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should Instance Be', () => {
    expect(component).toBeInstanceOf(SuggestedGroupsComponent);
  });
});
