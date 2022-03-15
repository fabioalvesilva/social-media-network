import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { IntroductionRequestService } from './introduction-request.service';

describe('IntroductionRequestService', () => {
  let service: IntroductionRequestService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        HttpClientTestingModule,
        FormsModule
      ],
      providers: [IntroductionRequestService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntroductionRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should Instance Be', () => {
    expect(service).toBeInstanceOf(IntroductionRequestService);
  });
});
