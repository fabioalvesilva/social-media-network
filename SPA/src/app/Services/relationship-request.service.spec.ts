import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { RelationshipRequestService } from './relationship-request.service';

describe('ReactionService', () => {
  let service: RelationshipRequestService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        HttpClientTestingModule,
        FormsModule
      ],
      providers: [NgForm, RelationshipRequestService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RelationshipRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should Instance Be', () => {
    expect(service).toBeInstanceOf(RelationshipRequestService);
  });
});

