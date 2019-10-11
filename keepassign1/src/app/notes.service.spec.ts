import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { NotesService } from './notes.service';

describe('NotesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [NotesService]
  }));

  it('should be created', () => {
    const service: NotesService = TestBed.get(NotesService);
    expect(service).toBeTruthy();
  });
});
