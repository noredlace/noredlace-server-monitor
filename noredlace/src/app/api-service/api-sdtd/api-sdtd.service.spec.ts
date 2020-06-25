import { TestBed } from '@angular/core/testing';

import { ApiSdtdService } from './api-sdtd.service';

describe('ApiSdtdService', () => {
  let service: ApiSdtdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiSdtdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
