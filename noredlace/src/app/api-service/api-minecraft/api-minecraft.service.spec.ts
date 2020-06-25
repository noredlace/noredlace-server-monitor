import { TestBed } from '@angular/core/testing';

import { ApiMinecraftService } from './api-minecraft.service';

describe('ApiMinecraftService', () => {
  let service: ApiMinecraftService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiMinecraftService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
