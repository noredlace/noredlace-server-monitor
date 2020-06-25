import { TestBed } from '@angular/core/testing';

import { ApiDstService } from './api-dst.service';

describe('ApiDstService', () => {
  let service: ApiDstService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiDstService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
