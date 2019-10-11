import { TestBed } from '@angular/core/testing';

import { NotesService } from './notes.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('NotesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: NotesService = TestBed.get(NotesService);
    expect(service).toBeTruthy();
  });
});
