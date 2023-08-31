import { TestBed } from '@angular/core/testing';

import { CategoriesSongsService } from './categories-songs.service';

describe('CategoriesSongsService', () => {
  let service: CategoriesSongsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriesSongsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
