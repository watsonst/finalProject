import { TestBed } from '@angular/core/testing';

import { NASAApiService } from './nasa-api.service';

describe('NASAApiService', () => {
  let service: NASAApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NASAApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
