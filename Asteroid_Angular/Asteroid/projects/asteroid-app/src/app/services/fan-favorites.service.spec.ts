import { TestBed } from '@angular/core/testing';

import { FanFavoritesService } from './fan-favorites.service';

describe('FanFavoritesService', () => {
  let service: FanFavoritesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FanFavoritesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
