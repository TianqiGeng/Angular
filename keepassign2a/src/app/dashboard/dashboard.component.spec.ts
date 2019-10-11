import { async, fakeAsync, tick, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { DashboardComponent } from './dashboard.component';
import { NotesService } from '../notes.service';
import { AuthenticationService } from '../authentication.service';


const testConfig = {
  getNotes: {
    positive: [{
      id: 1,
      title: 'Read Angular 8 book',
      text: 'Shall do at 6 pm',
      state: 'not-started'
    },
    {
      id: 2,
      title: 'Angular 8',
      text: 'Writed by Murphy',
      state: 'not-started'
    }],
    negative: []
  }
};

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let notesService: NotesService;
  let spyGetNotes: any;
  let positiveResponse: Array<any>;
  let negativeResponse: Array<any>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [HttpClientModule],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        NotesService,
        AuthenticationService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    notesService = TestBed.get(NotesService);
  });

  it('should create', () => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });


  it('should handle to get all notes', fakeAsync(() => {
    positiveResponse = testConfig.getNotes.positive;
    spyGetNotes = spyOn(notesService, 'getNotes').and.returnValue(of(positiveResponse));
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component.notes).toBe(positiveResponse, `should get all notes from back end`);
  }));

  it('should handle if no note is created by user', fakeAsync(() => {
    negativeResponse = testConfig.getNotes.negative;
    spyGetNotes = spyOn(notesService, 'getNotes').and.returnValue(of(negativeResponse));
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component.notes.length).toBe(0,
      `If there is no 'note' created, notes array length should be 0`);
  }));
});
