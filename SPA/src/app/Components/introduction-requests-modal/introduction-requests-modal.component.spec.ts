import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgForm } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IntroductionRequestsModalComponent } from './introduction-requests-modal.component';

describe('IntroductionRequestsModalComponent', () => {
  let component: IntroductionRequestsModalComponent;
  let fixture: ComponentFixture<IntroductionRequestsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        HttpClientTestingModule
      ],
      declarations: [IntroductionRequestsModalComponent, NgForm]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroductionRequestsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('Should Instance Be', () => {
    expect(component).toBeInstanceOf(IntroductionRequestsModalComponent);
  });
});
