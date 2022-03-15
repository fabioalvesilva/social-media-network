import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IntroductionService } from './introduction.service';


describe('IntroductionService', () => {
  let service: IntroductionService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        HttpClientTestingModule
      ],
      providers: [IntroductionService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntroductionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should Instance Be', () => {
    expect(service).toBeInstanceOf(IntroductionService);
  });
});
