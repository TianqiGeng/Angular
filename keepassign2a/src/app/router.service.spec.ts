import { TestBed } from '@angular/core/testing';

import { RouterService } from './router.service';
import { RouterModule } from '@angular/router';

describe('RouterService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      RouterModule.forRoot([])
      // other imports here
    ]
  }));

  it('should be created', () => {
    const service: RouterService = TestBed.get(RouterService);
    expect(service).toBeTruthy();
  });
});
