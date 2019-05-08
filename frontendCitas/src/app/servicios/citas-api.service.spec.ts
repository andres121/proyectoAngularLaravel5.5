import { TestBed } from '@angular/core/testing';

import { CitasApiService } from './citas-api.service';

describe('CitasApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CitasApiService = TestBed.get(CitasApiService);
    expect(service).toBeTruthy();
  });
});
