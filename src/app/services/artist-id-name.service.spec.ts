import { TestBed } from '@angular/core/testing';

import { ArtistIdNameService } from './artist-id-name.service';

describe('ArtistIdNameService', () => {
  let service: ArtistIdNameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtistIdNameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
