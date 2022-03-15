import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing'
import { RelationshipService } from './relationship.service';
import { FormsModule } from '@angular/forms';

describe('RelationshipService', () => {
  let service: RelationshipService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        HttpClientTestingModule,
        FormsModule
      ],
      providers: [RelationshipService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RelationshipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should Instance Be', () => {
    expect(service).toBeInstanceOf(RelationshipService);
  });
});