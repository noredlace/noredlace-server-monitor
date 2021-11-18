import { TestBed } from '@angular/core/testing';

import { ApiEmpyrionService } from './api-empyrion.service';

describe('ApiEmpyrionService', () => {
  let service: ApiEmpyrionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiEmpyrionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
