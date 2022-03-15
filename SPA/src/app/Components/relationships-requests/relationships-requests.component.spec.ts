import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RelationshipsRequestsComponent } from './relationships-requests.component';

describe('RelationshipsRequestsComponent', () => {
  let component: RelationshipsRequestsComponent;
  let fixture: ComponentFixture<RelationshipsRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        HttpClientTestingModule
      ],
      declarations: [RelationshipsRequestsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelationshipsRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should Instance Be', () => {
    expect(component).toBeInstanceOf(RelationshipsRequestsComponent);
  });
});
