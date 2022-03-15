import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SuggestedfriendsComponent } from './suggestedfriends.component';
import { FormsModule } from '@angular/forms';
describe('SuggestedfriendsComponent', () => {
  let component: SuggestedfriendsComponent;
  let fixture: ComponentFixture<SuggestedfriendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        HttpClientTestingModule,
        FormsModule
      ],
      declarations: [ SuggestedfriendsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestedfriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should Instance Be', () => {
    expect(component).toBeInstanceOf(SuggestedfriendsComponent);
  });
});
