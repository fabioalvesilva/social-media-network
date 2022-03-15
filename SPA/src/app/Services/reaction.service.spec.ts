import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { ReactionService } from './reaction.service';

describe('ReactionService', () => {
  let service: ReactionService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        HttpClientTestingModule,
        FormsModule
      ],
      providers: [ReactionService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should Instance Be', () => {
    expect(service).toBeInstanceOf(ReactionService);
  });
});

