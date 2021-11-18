import { TestBed } from '@angular/core/testing';

import { ApiValheimService } from './api-valheim.service';

describe('ApiValheimService', () => {
  let service: ApiValheimService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiValheimService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
