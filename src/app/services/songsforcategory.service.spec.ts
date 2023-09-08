import { TestBed } from '@angular/core/testing';

import { SongsforcategoryService } from './songsforcategory.service';

describe('SongsforcategoryService', () => {
  let service: SongsforcategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SongsforcategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
