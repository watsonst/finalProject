import { TestBed } from '@angular/core/testing';

import { OurNasaApiService } from './our-nasa-api.service';

describe('OurNasaApiService', () => {
  let service: OurNasaApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OurNasaApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
