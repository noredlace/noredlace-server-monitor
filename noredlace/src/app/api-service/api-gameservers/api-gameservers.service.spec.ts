import { TestBed } from '@angular/core/testing';

import { ApiGameServerService } from './api-gameservers.service';

describe('ApiGameServerService', () => {
  let service: ApiGameServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiGameServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
