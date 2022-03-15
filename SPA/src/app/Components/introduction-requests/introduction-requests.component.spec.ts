import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IntroductionRequestsComponent } from './introduction-requests.component';

describe('IntroductionRequestsComponent', () => {
  let component: IntroductionRequestsComponent;
  let fixture: ComponentFixture<IntroductionRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        HttpClientTestingModule
      ],
      declarations: [IntroductionRequestsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroductionRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should Instance Be', () => {
    expect(component).toBeInstanceOf(IntroductionRequestsComponent);
  });
});
