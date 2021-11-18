import { TestBed } from '@angular/core/testing';

import { ApiTheForestService } from './api-theforest.service';

describe('ApiTheForestService', () => {
  let service: ApiTheForestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiTheForestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
